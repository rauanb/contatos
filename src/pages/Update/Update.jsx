import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../assets/UserReducer";
import { Botoes, Button, ButtonCancel, Container, Div, Form, Input, Titulo } from "../../styles";

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

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/')

    }

    return (
        <>
            <Container>
                <Div>
                    <Titulo>Atualizar Contato</Titulo>
                    <Form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <Input type="text" name="name"
                            value={uname}
                            id="name"
                            onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Input type="email" name="email"
                            value={uemail}
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone:</label>
                            <Input type="tel" name="telefone"
                            value={utelefone}
                            id="telefone"
                            onChange={e => setTelefone(e.target.value)}
                            />
                        </div>
                        <Botoes>
                            <Button onClick={handleUpdate}>Salvar</Button>
                            <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>
                        </Botoes>
                    </Form>
                </Div>
            </Container>
        </>
    )
}

export default Update