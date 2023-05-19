import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        width: 600px;
        height: 45px;
        border-radius: 12px;
        margin-bottom: 18px;
        font-size: 14px;
        font-weight: 400;
        padding: 13px;
        box-sizing: border-box;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    }

    button {
        width: 130px;
        height: 45px;
        border-radius: 12px;
        margin-top: 10px;
        font-weight: 700;
        color: #FFF;
        background-color: #5D9040;
        border: none;
    }
`

export const Header = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;
    gap: 26px;
    width: 100vw;
    height: 80px;
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 40px;

    & > a {
        color: #9C9C9C;
        text-decoration: none;
    }

    & > p {
        color: #5D9040;
    }
`