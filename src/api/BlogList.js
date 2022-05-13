import React  from "react";

function BlogList({blogs, title, handelDelete}){

  return(
      <div>
       {blogs.map((blog)=>(
           <div key={blog.id}>
               <h1>{title}</h1>
               <h2>
                   {blog.title}
               </h2>
               <p>Written by: {blog.name}</p>
               <button onClick={()=> handelDelete(blog.id)}>Delete Blog</button>
               </div>
       ))}
      </div>
  )
}
export default BlogList