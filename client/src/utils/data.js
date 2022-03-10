// import fetch from "node-fetch";

async function fetchData(arg){
    const api_url = `http://127.0.0.1:5000/${arg}`;
    const res = await fetch(api_url);
    
    const data = await res.json();
    console.log(arg);
    console.log(data);
    return data;


}

export {fetchData};