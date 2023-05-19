import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #80CC74;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    height: 45px;
    font-family: 'Lexend Deca', sans-serif;
    padding-left: 13px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

    & div:first-child {
        width: 40%;
        overflow: hidden;

        p {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }



    & button {
        background-color: #FFFFFF;
        color: #EA4F4F;
        width: 130px;
        height: 45px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        border-left: none;
        border-radius: 0px 12px 12px 0px;
    }
`

