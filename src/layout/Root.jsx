import { Outlet } from "react-router";
import Navbar from "./NavBar/Navbar";

const Root = () => {
    return (
        <div >
           <div className="shadow">
             <Navbar></Navbar>
           </div>
            <Outlet />
        </div>
    );
};

export default Root;