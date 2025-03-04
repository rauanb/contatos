import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        /* background-color: red; */
    }
`;

export default EstiloGlobal;


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
`;

export const Div = styled.div`
    background-color: #eee;
    padding: 32px;
    border-radius: 8px;
`;

export const Titulo = styled.h3`
    color: red;
    text-align: center;
`

export const Button = styled.button`
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 4px;
    border-radius: 4px;
`;

export const ButtonEdit = styled(Button)`
    background-color: #04AA6D;
`;

export const ButtonCancel = styled(Button)`
    background-color: #f44336;
`;

export const Form = styled.form`
    width: 100%;
`;

export const Input = styled.input`
    width: 99%;
    margin-bottom: 8px;
`;

export const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
`;
