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

            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;