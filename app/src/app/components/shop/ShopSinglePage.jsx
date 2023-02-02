import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopService from "../../../src/services/shop.service";

const ShopSinglePage = () => {
    const [shop, setShop] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const shop = await ShopService.getOne(id);
            setShop(shop);
        };
        fetchData();
    }, [id]);

    console.log(shop);

    return (  
        <div className="container">
            <h1>ShopSinglePage</h1>
            <div>
                <h2>{shop.name}</h2>
                <img src={shop.imageUrl} alt="c'est un bateau" />
                <p>{shop.description}</p>
                <p>{shop.location}</p>
            </div>
        </div>
    );
}
 
export default ShopSinglePage;