import React, { useState } from "react"
import { addUser } from "../../assets/UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Titulo, Div, Form, Input, Botoes } from "./styles"
import { Container, ButtonOk, ButtonCancel } from "../../styles"

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

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <>
            <Container>
                <Div>
                    <Titulo>Novo Contato</Titulo>
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form>
                        <div>
                            <label htmlFor="name">Name:
                            </label>
                            <Input type="text" name="name" onChange={(e) => setName(e.target.value)} id="name"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Input type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="email"/>
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone:</label>
                            <Input type="tel" name="telefone" onChange={(e) => setTelefone(e.target.value)} id="telefone"/>
                        </div>
                        <Botoes>
                        <ButtonOk onClick={handleSubmit}>Adicionar</ButtonOk>
                        <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>
                        </Botoes>
                    </Form>
                </Div>
            </Container>
        </>
    )
}

export default Create