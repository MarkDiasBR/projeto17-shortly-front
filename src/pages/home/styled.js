import styled from "styled-components";

export const Container = styled.div`
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;
    margin-top: 80px;
    margin-bottom: 80px;
`

export const ContentContainer = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
`

export const FormContainer = styled.div`
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;


    input {
        width: 100%;
        height: 45px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 400;
        padding: 13px;
        box-sizing: border-box;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    }

    button {
        width: 180px;
        height: 45px;
        border-radius: 12px;
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
    justify-content: space-between;
    background-color: white;
    gap: 26px;
    width: 100vw;
    height: 80px;
    position: fixed;
    top: 0;
    right: 0;
    padding-right: 40px;
    padding-left: 40px;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 26px;
    }

    & > div > a {
        color: #9C9C9C;
        text-decoration: none;
    }

    & div > p, & > p {
        color: #5D9040;
    }
`