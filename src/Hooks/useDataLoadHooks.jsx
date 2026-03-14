import axios from "axios";
import { useEffect, useState } from "react";





const useDataLoadHooks = () => {

    const [appData, setAppData] = useState([])

    useEffect(() => {
        const appDataLoad = async () => {
            const res = await axios.get("apps_al_ldata.json");
            setAppData(res.data)
        };
        appDataLoad();
    }, [])
    return appData
};

export default useDataLoadHooks;