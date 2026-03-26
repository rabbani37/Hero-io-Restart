import { Outlet } from "react-router";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import { useContext, useEffect } from "react";
import AppContext from "../contextApp/AppContextSepareted";
import { Vortex } from "react-loader-spinner";

const Root = () => {

    const { spinner, setSpinner } = useContext(AppContext);

    // useEffect(() => {
        
    //     setTimeout(() => {
    //         setSpinner(false)
    //     }, 400)

    // }, [setSpinner])


    return (
        <div className="">

             <>
                    <div className="shadow">
                        <Navbar></Navbar>
                    </div>
                    <Outlet />
                    <Footer></Footer>
                </>


        </div>
    );
};

export default Root;