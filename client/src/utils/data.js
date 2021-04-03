async function fetchData(arg){
    const api_url = `posts/${arg}/`;
    const res = await fetch(api_url);
    
    const data = await res.json();
    console.log(arg);
    console.log(data);
    return data;


}

export {fetchData};