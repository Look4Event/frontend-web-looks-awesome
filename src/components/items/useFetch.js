import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
            .then(res => {
                if (! res.ok) {
                    throw Error('Failed to fetch resource');
                }
    
                return res.json();
            }).then(data => {
                setData(data);
                setIsLoading(false);
                setErr(null);
            }).catch(err => {
                if (err === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    setIsLoading(false);
                    setErr(err);
                }
            })
        }, 1000);

        return () => abortController.abort();
    }, [url]
    )

    return {'data': data, 'isLoading': isLoading, 'err': err};
}

export default useFetch;