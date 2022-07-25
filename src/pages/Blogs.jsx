import React, { useEffect, useState } from 'react'

const Blogs = () => {
const [data,setData]=useState([])
 
// author: "Lorry Alexsandrev"
// content: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
// id: 1
// publication: "peacock"
// published_on: "30/08/2021"
// title: "In hac habitasse platea dictumst.

useEffect(()=>{

  fetch('http://localhost:3004/blogs')
  .then((response) => response.json())
  .then((data) => setData(data));

},[])
  return (
    <div>
        {
          data.map((ele)=>{
            return(<>
              <div>
                <p>{ele.author}</p>
                <p>{ele.content}</p>
                <p>{ele.publication}</p>
                <p>{ele.published_on}</p>
                <p>{ele.title}</p>
              </div>
            </>)
          })
        }
    </div>
  )
}

export default Blogs