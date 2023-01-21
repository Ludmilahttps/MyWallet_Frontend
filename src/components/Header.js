import React from 'react'
import styled from "styled-components"
import UserContext from '../UserContext'
import { useContext } from "react"


function Header() {
    const { info } = useContext(UserContext)
    return (
        <Head data-test="header">
            <p>Hello, {info.name}</p>
            <LogoImg src="../../assets/Vector.svg" />
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
`