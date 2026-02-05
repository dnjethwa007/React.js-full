import { useEffect , useState } from "react";

function useCurrencyCycleInfo(currency) {
    const [data , setData] = useState({})
    const [loading , setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=> res.json())
        .then((res) => {
            setData(res.rates)
            setLoading(false)
        })
    },[currency])
    return {data,loading}
}

export default useCurrencyCycleInfo;