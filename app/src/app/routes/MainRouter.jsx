import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../src/context/UserContext";
import ShopForm from "../components/shop/ShopForm";
import ShopSinglePage from "../components/shop/ShopSinglePage";
import UserUpdate from "../components/user/form/UserUpdate";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Shop from "../pages/Shop";
import Account from "../pages/user/Account";
import ProtectedRoute from "./ProtectedRoute";

const MainRouter = () => {
    const {user} = useContext(UserContext)

    return ( 
    <>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/shops" element={<Shop/>} />
            <Route path="/shops/:id" element={<ShopSinglePage/>} />
            {!user && <Route path="/auth" element={<AuthPage/>} /> }
            <Route path="/account" element={
                <ProtectedRoute>
                    <Account/>
                </ProtectedRoute>
            }  /> 
            <Route path="/account/:id" element={
                <ProtectedRoute>
                    <UserUpdate/>
                </ProtectedRoute>
            }  />
            <Route path="/shops/form/:id" element={
                <ProtectedRoute>
                    <ShopForm/>
                </ProtectedRoute>
            }  />
            <Route path="/shops/form" element={
                <ProtectedRoute>
                    <ShopForm/>
                </ProtectedRoute>
            }  />


        </Routes>
    </>
     );
}
 
export default MainRouter;