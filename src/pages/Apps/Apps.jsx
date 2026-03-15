import { Suspense } from "react";
import useDataLoadHooks from "../../Hooks/useDataLoadHooks";
import AppDetails from "./AppDetails";
import { FaDownload } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { Search } from "lucide-react";

const Apps = () => {
    const allApps = useDataLoadHooks();
    //  const { title, image, downloads, ratingAvg } = allApps;
    return (
        <div>
            <div className="text-center py-10 max-w-3xl mx-auto">
                <h2 className="text-5xl  font-bold mb-2 mt-10">All Apps</h2>
                <p className="text-gray-500">All your apps, now in one place. All apps in our section are neatly organized and instantly ready to use. From work to fun, manage and launch your favorites with ease.</p>
            </div>
            <div className="md:flex justify-between items-center px-5 space-y-5 text-center mb-5">
                <p className="text-2xl font-semibold">({allApps.length}) Apps Found</p>
                <label className="input">
                    <Search className="text-gray-600" />
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-3">

                {
                    allApps.map(app => <div className=" bg-base-100 shadow-sm rounded flex flex-col
             transform transition-transform duration-700  hover:scale-103  hover:shadow-xl
            ">
                        <figure className="p-3 text-center  w-1/2 mx-auto flex-1 ">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="rounded   " />
                        </figure>
                        <div className=" px-4 mb-5 ">
                            <h2 className="text-xl font-bold">{app.title}</h2>
                            <div className=" flex justify-between items-center mt-3">
                                <div className="badge badge-soft badge-success rounded"><FaDownload />
                                    {new Intl.NumberFormat("en-us", { notation: "compact" }).format(app?.downloads)}
                                </div>

                                <div className="badge badge-soft badge-warning rounded"> < IoStar /> {app.ratingAvg}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Apps;