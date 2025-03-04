import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../../assets/UserReducer";
import { ButtonCancel, ButtonEdit, Button, Container, Div, Titulo } from "../../styles";

function Home() {

    const users = useSelector((state) => state.users);
    // console.log(users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        // console.log(id) OK
        dispatch(deleteUser({id: id}))
    }


    return (
        <Container>
            <Div>
                <Titulo>Contatos</Titulo>
                    <Button onClick={() => navigate('/create')}>Novo</Button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.telefone}</td>
                                <td>
                                    <ButtonEdit onClick={() => navigate(`/edit/${user.id}`)}>Editar</ButtonEdit>
                                    <ButtonCancel onClick={() => handleDelete(user.id)}>Delete</ButtonCancel>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Div>
        </Container>
    )
}

export default Home