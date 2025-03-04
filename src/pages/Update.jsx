import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../assets/UserReducer";

function Update() {

    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email, telefone} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const [utelefone, setTelefone] = useState(telefone)
    // console.log(users) OK
    // console.log(existingUser) OK
    // console.log(name) OK
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail,
            telefone: utelefone
        }))
        navigate('/')
    }

    return (
        <div>
            <div>
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name"
                        value={uname}
                        onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email"
                        value={uemail}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" name="telefone"
                        value={utelefone}
                        onChange={e => setTelefone(e.target.value)}
                        />
                    </div>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update