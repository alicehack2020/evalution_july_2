import React, { useState } from 'react'
//import { uuid } from 'uuidv4';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

// title, author, content, publication, published_on
const CreateBlog = () => {
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [content,setContent]=useState("")
  const [publication,setPublication]=useState("")
  const [published,setPublished]=useState("")

  const handdleSubmit=()=>{
  
    axios({
      method: 'post',
      url: 'http://localhost:3004/blogs',
      data: {
        id:uuidv4(),
        title:title,
        author:author,
        content:content,
        publication:publication,
        published:published
      }
    });
  }


  return (
    <div>
    <input type="text" name="" id=""  value={title} placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text" name="" id=""  value={author} placeholder="author" onChange={(e)=>setAuthor(e.target.value)}/>
    <input type="text" name="" id=""  value={content} placeholder="content" onChange={(e)=>setContent(e.target.value)}/>
    <input type="text" name="" id=""  value={publication} placeholder="publication" onChange={(e)=>setPublication(e.target.value)}/>
    <input type="text" name="" id=""  value={published} placeholder="published on" onChange={(e)=>setPublished(e.target.value)}/>
    <button onClick={handdleSubmit}>sumit</button>

    </div>
  )
}

export default CreateBlog