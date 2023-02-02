import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ShopService from "../../../src/services/shop.service";
import TokenService from "../../../src/services/token.service";

const ShopForm = () => {
        const [credentials, setCredentials] = useState({})
        const [setShop] = useState({})
        const {id} = useParams();
        const navigate = useNavigate();     
        const method = id ? true : false;

        useEffect(() => {
            if(id !== undefined) {
                const fetchData = async () => {
                    const shop = await ShopService.getOne(id);
                    setShop(shop);
                };
                fetchData();
            } 
        }, [id]);     
       


        
        const handleSubmit = async (e) => {
            e.preventDefault();
            const token = TokenService.getTokenFromLocalStorage();
            if (method) {
                const {accessToken} = await ShopService.update(id, credentials, token);
                TokenService.setTokenInlocalStorage(accessToken);
                setShop(token);
            }
            else {
                const {accessToken} = await ShopService.create(credentials);
                TokenService.setTokenInlocalStorage(accessToken);
                setShop(token);
            }
            navigate("/shops");
        }



        const handleChange = (e) => {
            const {name, value} = e.target;
            setCredentials({...credentials, [name]: value})
        }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="">Name</label>
                <input type="text" 
                name="name" 
                onChange={handleChange}
                value={credentials.name || ""}
                />
            </div>
            <div>
            <label htmlFor="">Description</label>
                <input type="text" 
                name="description" 
                onChange={handleChange}
                value={credentials.description || ""}
                />
            </div>
            <div>
            <label htmlFor="">Location</label>
                <input type="text" 
                name="location" 
                onChange={handleChange}
                value={credentials.location || ""}
                />
            </div>
            <div>
            <label htmlFor="">Image</label>
                <input type="text" 
                name="imageUrl" 
                onChange={handleChange}
                value={credentials.imageUrl || ""}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
     );
}
 
export default ShopForm;