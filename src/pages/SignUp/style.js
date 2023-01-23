import styled from "styled-components"

export const New = styled.div
    `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-context: center;
    margin-top: 25%;
    flex-direction: column;
    > img {
        width: 147px;
        height: 50px;
        margin-bottom: 25px;
    }
    > input {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 3px;
        cursor: pointer;
    }
    > button {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        background: #A328D6;
        border-radius: 4.63636px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        margin: 3px;
        cursor: pointer;
        align-items: center;
        justify-context: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > a {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        text-decoration-line: underline;
        color: #fff;
        margin: 22px;
        cursor: pointer;
    }
`