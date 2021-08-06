import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home  = () =>{

const { data,loading,getError } = useFetch('https://reqres.in/api/products')



// const [deleteData , setDeleteData] = useState(data.)

    // const useDelete = (id) => {
  

    //     let updatedData = data.filter((fil) => {
    //         return fil.id !== id
    //     })
    //     setData(updatedData)
    
  


  
return (
    <div className="home">
        <h1>The Homepage</h1>

         {/* two methods of doing this for useEffect  */}               
        {/* {loading ? <div>loading...</div> : <BlogList data={blogs} handleDelete={handleDelete}/>} */}
        {getError && <div>{getError}</div>}
        {loading && <div>Loading...</div>}
        {data && <BlogList data={data} />}

    </div>
)
}

export default Home