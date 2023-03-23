import { useState, useEffect } from "react";

const useFetch = (url)=>
{
    // Use hooks with useState (re-display) and useEffect
    const [data, setData] =useState(null);
    const [error, setError] = useState(null);
    const [isDataLoading, setDataLoading] = useState(true);

    // useEffect is executed when page is displayed
    useEffect(()=>
    {
        setTimeout(()=>
        {
            fetch(url)
                .then((response)=>
                {
                    if(!response.ok)
                    {
                        throw Error("Pas de panique, c'est juste une erreur");
                    }
                    return response.json();
                })
                .then((data)=>
                {
                    setData(data);
                    setDataLoading(false);
                    setError(null);
                })
                .catch((err)=>
                {
                    console.log(err.message);
                    setError(err.message);
                    setDataLoading(false);
                });
        }, 500);       
    }, [url] );

    return { data, error, isDataLoading };
};
    
export default useFetch;
