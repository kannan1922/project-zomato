import React, { useEffect } from 'react'
import axios from 'axios';
function Dummy() {
    const fetchData = async () => {
       
            try {
              const response = await axios.get(`http://localhost:4000/search?startsWithLetter=s`);
         
              console.log('start')
              console.log(response.data.search)
            //   setResults(response.data.search);
            } catch (error) {
              console.error('Error during fetch:', error);
            }
          };
      useEffect(()=>{
        fetchData()
      },[])
  return (
    <div>Dummy</div>
  )
}

export default Dummy