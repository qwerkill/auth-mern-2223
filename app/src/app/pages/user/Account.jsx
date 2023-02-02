import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../src/context/UserContext";

const Account = () => {
    const {user} = useContext(UserContext)
    
    return ( 
        <div>
            <h1>Account Page</h1>
            <div>
                <Link to={`/account/${user._id}`}>Update</Link>
            </div>
        </div>
     );
}


 
export default Account;