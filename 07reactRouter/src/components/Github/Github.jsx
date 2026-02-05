import React, { useState , useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/dnjethwa007')
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data);
    //         setData(data);
    //       });
    //   } , []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white'>Github follower :-{data.followers}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githiubLoader = async () => {
    const response = await fetch('https://api.github.com/users/dnjethwa007');
    const data = await response.json();
    return data;
}