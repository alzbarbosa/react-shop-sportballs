import DirectoryItem from "../directory-item/directory-item.components"

import './directory.styles.jsx'
import { CategoriesContainer } from "./directory.styles.jsx"

  const categories = [
  {
    id: 1,
    title: "soccer",
    imageUrl: "https://raw.githubusercontent.com/alzbarbosa/public/main/soccer-main.jpg",
  },
  {
    id: 2,
    title: "tennis",
    imageUrl: "https://raw.githubusercontent.com/alzbarbosa/public/main/tennis-main.jpg",
  },
  {
    id: 3,
    title: "basketball",
    imageUrl: "https://raw.githubusercontent.com/alzbarbosa/public/main/basketball-main2.jpg",
  },
  {
    id: 4,
    title: "football",
    imageUrl: "https://raw.githubusercontent.com/alzbarbosa/public/main/american-football-main.jpg",
  },
  {
    id: 5,
    title: "baseball",
    imageUrl: "https://raw.githubusercontent.com/alzbarbosa/public/main/baseball-main.jpg",
  },
  {
    id: 6,
    title: "volleyball",
    imageUrl: "https://raw.githubusercontent.com/alzbarbosa/public/main/voleyball1.jpg",
  },
]

const Directory = () => {
    return (
        <CategoriesContainer>
          {categories.map((category) => (
             <DirectoryItem key={category.id} category={category}/>
          ))}
        </CategoriesContainer> 
    )
}

export default Directory