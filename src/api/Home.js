import React, { useEffect, useState }  from "react";
import BlogList from "./BlogList";
import axios from "axios";
function Home(){
  const [blogs, setBlog] = useState([]);


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((user) => setBlog(user.data)).then((error) => console.log(error))
}, [])


const handelDelete = (id) => {
 
   const newBlog  = blogs.filter(blog =>blog.id !== id );
    setBlog(newBlog)
 }

  return(
      <div>
     <BlogList blogs ={blogs} title= "All blogs" handelDelete ={handelDelete}/>
     <BlogList blogs ={blogs.filter((blog)=> blog.name ==="Leanne Graham")} title= "hello" />
      </div>
  )
}
export default Home