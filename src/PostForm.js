import axios from "axios";
import React, { useEffect, useState } from "react";
import axion from "./api/axion";

function PostForm() {

    const [data, setData] = useState({
        name: '',
        date: '',
        iduser: ''
    })
    const [user, setUser] = useState([]);
    const [singelUser, setSingelUser] = useState([])
    function handel(event) {
        const newdata = { ...data }
        newdata[event.target.id] = event.target.value
        setData(newdata)
        console.log(newdata)
    }

    function handelSubmit(event) {
        event.preventDefault();
    }


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((user) => setUser(user.data)).then((error) => console.log(error))
    }, [])

    function handelChange(e) {
        axios.get("https://jsonplaceholder.typicode.com/users/" + e.target.value).then((userDetails) => setSingelUser(userDetails.data)).then((error) => console.log(error))
    }

    return (
        <div>
            <form onSubmit={(e) => handelSubmit(e)}>
                <input onChange={(e) => handel(e)} placeholder="name" type="text" id="name"
                    value={data.name}></input>
                <input placeholder="date" type="date" onChange={(e) => handel(e)} id="date"
                    value={data.date}></input>
                <input placeholder="iduser" type="number" onChange={(e) => handel(e)} id="iduser"
                    value={data.iduser}></input>
                <button type="submit">Submit</button>
                <select onChange={handelChange}>
                    <option value="0">--Selected  a user --</option>
                    {user.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
            </form>
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        <tr>
                            <td> {singelUser.id}</td>
                            <td>{singelUser.name}</td>
                            <td> {singelUser.username}</td>
                            <td> {singelUser.email} </td>
                        </tr>
                    }
                </tbody>
            </table>


        </div>
    )
}
export default PostForm;