import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../src/context/UserContext';
import ShopService from '../../../src/services/shop.service';
import TokenService from '../../../src/services/token.service';

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const {user} = useContext(UserContext)
  const navigate = useNavigate();

  const fetchData = async () => {
    const shop = await ShopService.getAll();
    console.log(shop);
    setShops(shop);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelate = async (id) => {
    try {
        const token = TokenService.getTokenFromLocalStorage();
        const shop = await ShopService.delate(id, token);
        fetchData()
        navigate("/shops");
    }catch (error) {
        console.log(error);

    }
    };

  return (
    <div>
      <h1>ShopList</h1>
        <Link to="/shops/form">Create</Link>
        <ul>
            {shops.map((shop) => (
                <div key={shop._id}>
                    <li>{shop.name}</li>
                    <img src={shop.imageUrl} alt="" />
                    <Link to={`/shops/${shop._id}`}>View</Link>   
                    
                    {(user && user._id === shop.user) && 
                        <>
                            <Link to={`/shops/form/${shop._id}`}>Edit</Link>
                            <button onClick={() => handleDelate(shop._id)}>Delete</button>
                        </>
                    }         
                </div>
            ))}
        </ul>

    </div>
  );
};

export default ShopList