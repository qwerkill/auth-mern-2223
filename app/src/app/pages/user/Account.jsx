import { Link } from "react-router-dom";

const Account = () => {
    
    return ( 
        <div>
            <h1>Account Page</h1>

            <div>
                <Link to="/account/update">Update</Link>
            </div>
        </div>
     );
}


 
export default Account;