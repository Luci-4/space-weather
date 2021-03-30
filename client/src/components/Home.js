import React, {useState, useEffect} from "react";

function Home() {
    const [dataObjects, setDataObjects] = useState(null);
    useEffect(() => {
        const args = ["cme", "gst", "flr", "rbe", "hss", "notifications"]
        let dataObjects = [];
        async function fetchData(arg){
            const api_url = `posts/${arg}/`;
            const res = await fetch(api_url);
            
            const data = await res.json();
            dataObjects.push(data);
            console.log(arg);
            console.log(data);
        }
        console.log("in home")
        for(let arg of args){
            fetchData(arg);
        }
        setDataObjects(dataObjects);
    }, [])
    
    return (
        <div>
            <h1>Hello {dataObjects}</h1>
        </div>
    );
}

export default Home;