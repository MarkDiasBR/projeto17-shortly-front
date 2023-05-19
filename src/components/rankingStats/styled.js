import styled from "styled-components";

export const Container = styled.div`
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
`