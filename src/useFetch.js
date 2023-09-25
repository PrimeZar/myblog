import {useState, useEffect} from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [myError, setMyError] = useState(null);

 useEffect(() =>{
    const abortCont = new AbortController();

    setTimeout(() => {
        fetch(url, { signal: abortCont.signal} )
            .then(res => {
                if (!res.ok){
                    throw Error('could not fetch the required data');
                }
                return res.json();
            })

            .then(data => {
                setData(data);
                setIsPending(false);
                setMyError(null);
            })

            .catch(err => {
                if ( err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else {
                    setIsPending(false);
                    setMyError(err.message);
                }
               
            })
    }, [1000]);
    return () => abortCont.abort();

}, [url]);

    return { data, isPending, myError};
}
 
export default useFetch;