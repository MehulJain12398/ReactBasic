import {useEffect,useState} from 'react'




const useFetch = (url) =>{

    const [data , setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [getError,setError] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('unavailable data')
            }
            return res.json();
        })
        .then(data=>{
            
        setData(data.data)
        setLoading(false)
       
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })

        },1000)

},[])

return {data,loading,getError}
}

export default useFetch