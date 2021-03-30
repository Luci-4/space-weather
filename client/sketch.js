const args = ["cme", "cmeanalisys", "gst", "flr", "rbe", "hss", "notifications"]
async function fetchData(arg){
    const api_url = `${arg}/`;
    const res = await fetch(api_url);
    
    const data = await res.json();
    console.log(arg);
    console.log(data);
}
for(let arg of args){
    fetchData(arg);
}
