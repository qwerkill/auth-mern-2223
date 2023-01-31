import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../src/context/UserContext';
import TokenService from '../../../../src/services/token.service';
import UserService from '../../../../src/services/user.service';

const UserUpdate = () => {
    const {user, setUser} = useContext(UserContext)
    const token = TokenService.getTokenFromLocalStorage()
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState(user)
  
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setCredentials({...credentials, [name]: value})
    }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const updatedUser = await UserService.update(user._id, credentials)
            setUser(updatedUser)
            navigate('/account')
        } catch (error) {
            console.log(error)
        }        
    }



    
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                name="firstName"
                value={credentials.firstName || ''}
                onChange={handleChange}/>
            </div>
            <div>
                <input type="text" 
                name="lastName"  
                value={credentials.lastName || ''}
                onChange={handleChange}/>
            </div>
            <div>
                <input type="password" 
                name="password"
                onChange={handleChange}/>
            </div>
                <button type="submit">Update</button>
        </form>
     );
}
 
export default UserUpdate;