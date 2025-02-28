import React, { useState } from "react"
import { addUser } from "./UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Create() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email, telefone}))
        navigate('/')
    }

    return (
        <div>
            <div>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" name="telefone" onChange={(e) => setTelefone(e.target.value)}/>
                    </div>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create