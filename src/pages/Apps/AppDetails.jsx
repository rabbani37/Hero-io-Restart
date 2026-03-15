import { Link, useParams } from "react-router";
import useDataLoadHooks from "../../Hooks/useDataLoadHooks";
import { IoStar } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { Bar, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {

    const apps = useDataLoadHooks();
    const { Id } = useParams()
    const app = apps.find(a => a.id === parseInt(Id));

    const barData = app?.ratings
    return (
        <div className="bg-gray-100 p-10">
            <div className="w-full  h-auto   flex items-center gap-6 ">


                <div className="flex w-1/3 items-center justify-center shadow rounded bg-white p-5 ">
                    <img src={app?.image} alt={app?.title} className="w-1/2 " />
                </div>

                <div className="flex-1">
                    <div className="mb-7">
                        <h2 className="text-3xl font-bold text-gray-800">{app?.title} </h2>
                        <p className="text-sm text-gray-500">Developed by{" "}<span className="text-blue-600 font-medium">{app?.companyName}</span> </p>
                    </div>

                    <hr className="text-gray-300" />
                    <div className="flex items-center gap-10 mt-4">

                        <div className="flex flex-col items-center">
                            <span className="text-green-600 text-xl"><FaDownload /></span>
                            <p className=" text-gray-500">Downloads</p>
                            <p className="font-bold text-2xl"> {new Intl.NumberFormat("en-us", { notation: "compact" }).format(app?.downloads)}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-orange-500 text-xl">< IoStar /></span>
                            <p className="text-xs text-gray-500">Average Ratings</p>
                            <p className="font-bold text-2xl">{app?.ratingAvg}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-purple-600 text-xl">💬</span>
                            <p className="text-xs text-gray-500">Total Reviews</p>
                            <p className="font-bold text-2xl"> {new Intl.NumberFormat("en-us", { notation: "compact" }).format(app?.reviews)}</p>
                        </div>

                    </div>


                    <Link>
                        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium">
                            Install Now (291 MB)
                        </button>
                    </Link>

                </div>
            </div>
            <hr className="text-gray-300 my-5" />
            <div >
                <p className="text-xl font-semibold">Rating</p>
                <ResponsiveContainer style={{ width: '100%', maxWidth: '800px', aspectRatio: 1.800 }}>
                    <ComposedChart
                        data={barData} // reverse the order
                        layout="vertical"
                        margin={{ top: 120, right: 20, bottom: 20, left: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis type="count" tickFormatter={(v)=>new Intl.NumberFormat("en-us",{notation:"compact"}).format(parseInt(v))} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={120}
                            tick={{ fontSize: 15 }}
                            reversed
                            
                        />
                        <Tooltip />
                        <Bar dataKey="count" barSize={20} fill="#FF8EA1" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <hr className="text-gray-300 my-5" />
            <div>
                <p className=" font-semibold text-gray-600 "> Description:</p>
                <div className="space-y-7">
                    <p className="text-gray-500">{app?.description}  {app?.descrip_1}</p>
                    <p className="text-gray-500"> {app?.descrip_2} {app?.description} </p>
                    <p className="text-gray-500"> {app?.descrip_3} {app?.description}</p>
                </div>
            </div>


        </div>
    );
};

export default AppDetails;