import { Outlet } from "react-router";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
    return (
        <div >
            <div className="shadow">
                <Navbar></Navbar>
            </div>
            <Outlet />

            <div >
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;