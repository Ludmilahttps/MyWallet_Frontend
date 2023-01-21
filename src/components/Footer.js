import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'
import { useContext } from "react"

function Footer() {

    return (
        <Foot  data-test="menu">
            <Link to="/nova-entrada">
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>New Entry</p>
            </Link>
            <Link to="/nova-saida">
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>New Exit</p>
            </Link>
        </Foot>
    )
}

export default Footer

export const Foot = styled.footer
    `
    position: fixed;
    width: 100%;
    bottom: 0; 
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 35px;
    padding-right: 35px;
    > a {
        width: 40%;
        height: 114px;
        background-color: #A328D6;
        border-radius: 5px;
        text-decoration: none;
        text-align: center;
        color: #FFF;
        display: flex;
        flex-direction: column;
        justify-context: center;
        align-items: flex-start;
        margin: 15px;
        > ion-icon{
            width: 30px;
            height: 30px;
            margin: 10px;
        }
        > p{
            width: 10%;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            margin: 10px;
        }
    }
`