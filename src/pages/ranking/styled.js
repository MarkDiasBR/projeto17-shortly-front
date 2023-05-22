import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
    margin-top: 80px;
    margin-bottom: 80px;
`

/* export const ContentContainer = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    padding: 32px 40px 26px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #000000;

        & span {
            font-weight: 500;
        }
    }
` */

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    p {
        font-family: 'Lexend Deca';
        font-weight: 700;
        font-size: 36px;
        color: #000000;
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
    width: 100%;
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