
import { FaDownload } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const Installation = () => {
    return (
        <div className="p-10 bg-gray-100">
            <div className="text-center py-10 max-w-3xl mx-auto">
                <h2 className="text-5xl  font-bold mb-5 mt-10">Your Installed Apps</h2>
                <p className="text-gray-500">View all your installed apps in one place and manage them effortlessly. Also installed apps, ready to open, update, or manage anytime.</p>
            </div>
            <div className="md:flex justify-between items-center  space-y-5 text-center mb-5">
                <p className="text-2xl font-semibold">1 Apps Found</p>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline">Sort By Size <IoMdArrowDropdown />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>


            <div className="space-y-5">
                <div className="bg-white rounded p-5 flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <div className="bg-gray-100 p-2 rounded">
                            <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl">This is my test tittle</h2>
                            <div className="flex gap-3">
                                <p className="flex items-center gap-1 text-green-400"><FaDownload /> <span>9M</span></p>
                                <p className="flex items-center gap-1 text-yellow-500">< IoStar /> <span>5</span></p>
                                <p className="flex items-center gap-1 text-gray-500">250 MB</p>
                            </div>

                        </div>
                    </div>

                    <button className="btn btn-success text-white">Unistall</button>

                </div>




                <div className="bg-white rounded p-5 flex justify-between items-center ">
                    <div className="flex items-center gap-5">
                        <div className="bg-gray-100 p-2 rounded">
                            <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl">This is my test tittle</h2>
                            <div className="flex gap-3">
                                <p className="flex items-center gap-1 text-green-400"><FaDownload /> <span>9M</span></p>
                                <p className="flex items-center gap-1 text-yellow-500">< IoStar /> <span>5</span></p>
                                <p className="flex items-center gap-1 text-gray-500">250 MB</p>
                            </div>

                        </div>
                    </div>

                    <button className="btn btn-success text-white">Unistall</button>

                </div>
            </div>

        </div>
    );
};

export default Installation;