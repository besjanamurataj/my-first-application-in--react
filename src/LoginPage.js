// import React, { useState, useEffect } from "react"
// import axion from "./api/axion"
// const register_URL = '/register'
// function LoginForm() {
//     const initalValue = { username: '', email: '', password: '' }
//     const [formValues, setFormValues] = useState(initalValue)
//     const [formError, setFormErrors] = useState({})
//     const [isSubmit, setIsSubmit] = useState(false)

//     function handelChange(event) {
//         const { name, value } = event.target;
//         setFormValues({ ...formValues, [name]: value })
//     };

//     function handelSubmit(event) {
//         event.preventDefault();
//         setFormErrors(validate(formValues));
//         setFormValues(true);
//         try{
//             const required = await axion.post(register_URL)
//             JSON.stringify(formValues),
//             {
//                 headers:{'Content-Type':'application/json'}
//             }

//         }
//         catch (err){
//             if(!err.response){
//                 setFormErrors('No server response');

//             }
//             else if(err.response.status === 400){
//                 setFormErrors('Missing username or password')
//             }
//             else if(err.response.status === 401){
//                 setFormErrors('Unauthorization')
//             }
//             else{
//                 setFormErrors('Login faild')
//             }

//         }

//     }

//     useEffect(()=>{
//      if(Object.keys(formError).length === 0 && isSubmit){
//   }
//     },[formValues])
//     const validate = (values) => {
//         const error = {};
//         const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         if (!values.username) {
//             error.username = "Username is required"
//         }
//         if (!values.email) {
//             error.email = "Email is required"
//         }
//         else if(!regex.test(values.email)) {
//             error.email ="This is not a valid email format!"
//         }
//         if (!values.password) {
//             error.password = "Passwoerd is required"
//         }
//         else if(values.password.length < 4){
//             error.password = "Password must be more than 4 character!"
//         }
//         else if(values.password.length > 10){
//             error.password = "Passwordcannor exceed more than 10 character!"
//         }
//         return error;
//     }

//     return (

//         <div>
//             <div >
//             {Object.keys(formError).length === 0 && isSubmit ? (<div>Signed in successfull</div>): (<pre>{JSON.stringify(formValues, undefined)}</pre>)}
            
//             <form onSubmit={handelSubmit}>
//                 <div>
//                     <input type='text' onChange={(e) => handelChange(e)} name="username" value={formValues.username} placeholder="UserName"></input>
//                 </div>
//                 <p>{formError.username}</p>
//                 <div>
//                    <input type='email' onChange={(e) => handelChange(e)} name="email" value={formValues.email} placeholder="Email"></input> 
//                 </div>
//                 <p>{formError.email}</p>
//                <div>
//                <input type='password' onChange={(e) => handelChange(e)} name="password" value={formValues.password} placeholder="Password"></input>
//                </div>
//                <p>{formError.password}</p>
//                 <button disables>Submit</button>
//             </form>
//         </div>
//         </div>
//     )
// }
// export default LoginForm;