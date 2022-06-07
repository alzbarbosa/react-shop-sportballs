import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import { AuthenticationContainer } from "./sign-in.styles"

const SignIn = () => {

    return (
        <AuthenticationContainer>
          <SignInForm/>
          <SignUpForm/>
        </AuthenticationContainer>
    
    )
}

export default SignIn
