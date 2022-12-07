import { useState, useEffect } from "react";

const useFetch = (url)=>
{
    // Use hooks with useState (re-display) and useEffect
    const [data, setData] =useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                        throw Error("Désolé, une erreur est survenue pendant le chargement de la page !");
                    }
                    return response.json();
                })
                .then((data)=>
                {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err)=>
                {
                    console.log(err.message);
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 1000);       
    }, [url] );

    return { data, error, isLoading };
};
    
export default useFetch;
