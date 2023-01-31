import Signup from "../../components/auth/Signup";
import Signin from "../../components/auth/Signin";

const AuthPage = () => {

    return ( 
        <div>
            <h1>Signup</h1>
            <Signup/>

            <hr />
            <h1>Signin</h1>
            <Signin/>
        </div>
        
     );
}
 
export default AuthPage;
