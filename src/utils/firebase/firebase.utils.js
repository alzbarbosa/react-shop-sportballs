import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithRedirect } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCW9Wm2K_H1cJ2BADr73lgX2DdOkdplMo",
  authDomain: "react-sport-shop.firebaseapp.com",
  projectId: "react-sport-shop",
  storageBucket: "react-sport-shop.appspot.com",
  messagingSenderId: "865184361270",
  appId: "1:865184361270:web:5bb6c1e8b8616c9ae8a197"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const batch = writeBatch(db)
    const collectionRef = collection(db, collectionKey)
    

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log("done")
}

export const getCategoriesandDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=> {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap

}

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if(!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)

    //console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    //console.log(userSnapshot)
    /*
    console.log(userSnapshot.exists())
    */
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation
            })
        } catch(error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)