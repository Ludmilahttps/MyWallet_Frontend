import React from 'react'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext} from "react"
import { UserContext } from "../UserContext.js"

function Header() {
    const { info } = useContext(UserContext)
    const GoTo= useNavigate()
    console.log(info)

    return (
        <Head data-test="header">
            <p data-test="user-name">Hello, {info.name}</p>
            <LogoImg data-test="logout" src="../../assets/Vector.svg" onClick={() => GoTo("/")}/>
        </Head>
    )
}

export default Header

export const Head = styled.div
    `
    width: 100%;
    height: 78px;
    position: fixed;
    top: 0; left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #fff;
`

export const LogoImg = styled.img
    `
    width: 28px;
    height: 24px;
    cursor: pointer;
`