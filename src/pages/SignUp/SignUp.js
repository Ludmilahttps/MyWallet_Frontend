import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { New } from "./style"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react"

function NewAccount() {

    const goTo = useNavigate()
    const [userEmail, setEmail] = useState('')
    const [userName, setName] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userConfirmPassword, setConfirmPassword] = useState('')
    const [sentRequest, setSentRequest] = useState(false)

    async function sendLogin(e) {
        e.preventDefault()
        setSentRequest(true)

        if (userPassword !== userConfirmPassword) {
            alert("The passwords must be the same!")
            return setSentRequest(false)
        }

        const post = {
            email: userEmail,
            name: userName,
            password: userPassword
        }

        try {
            console.log(process.env.REACT_APP_API_URL)
            const aux = await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, post)
            setSentRequest(false)
            if (aux.status !== 201) return
            goTo("/")
        } catch (error) {
            alert(error)
            setSentRequest(false)
        }
    }

    return (
        <New>
            <img src="../../assets/MyWallet.svg"></img>
            <input data-test="email" type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input data-test="name" type="name" name="name" placeholder="name" disabled={sentRequest} onChange={(e) => setName(e.currentTarget.value)} />
            <input data-test="password" type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)} />
            <input data-test="conf-password" type="password" name="password" placeholder="password confirm" disabled={sentRequest} onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
            <button data-test="sign-up-submit" type='submit' disabled={sentRequest} onClick={(e) => sendLogin(e)}>{sentRequest ? <ThreeDots height="18" width="30" color="white" ariaLabel="loading" wrapperStyle={{}} wrapperClassName="" /> : "Register"}</button>
            <Link to="/">
                Already have an account? LogIn
            </Link>
        </New>
    )
}

export default NewAccount