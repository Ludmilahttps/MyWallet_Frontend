import React from 'react'
import { Link } from "react-router-dom"
import { New} from "./style"
import { URL } from "../../constants/urls"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react"

function NewAccount() {
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userName, setName] = useState('')
    const [userPasswordConf, setUserPasswordConf] = useState("")
    const [sentRequest, setSentRequest] = useState(false)

    function sendLogin(e) {
        e.preventDefault()
        setSentRequest(true)

        const post = {
            email: userEmail,
            name: userName,
            password: userPassword
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, post)
            .then(res => { <Link to="/"></Link> })
            .catch(error => { 
                alert(error) 
                setSentRequest(false)  
            })
    }

    return (
        <New>
            <img src="../../assets/MyWallet.svg"></img>
            <input data-test="email" type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input data-test="name" type="name" name="name" placeholder="name" disabled={sentRequest} onChange={(e) => setName(e.currentTarget.value)} />
            <input data-test="password" type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)} />
            <input data-test="conf-password" type="password" name="password" placeholder="password confirm" disabled={sentRequest} onChange={(e) => setUserPasswordConf(e.currentTarget.value)} />
            <button data-test="sign-up-submit" type='submit' disabled={sentRequest} onClick ={(e) => sendLogin(e)}>{sentRequest ? <ThreeDots height="18" width="30" color="white" ariaLabel="loading" wrapperStyle={{}} wrapperClassName=""/> : "Register" }</button>
            <Link to="/">
                Already have an account? LogIn
            </Link>
        </New>
    )
}

export default NewAccount