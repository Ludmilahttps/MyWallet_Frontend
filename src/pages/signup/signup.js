import React from 'react'
import { Link } from "react-router-dom"
import { New} from "./style"
import { URL } from "../../constants/urls"
import axios from "axios"

function NewAccount() {

    function sendLogin(e) {
        e.preventDefault()

        const post = {
        }

        axios.post(`${URL}/sign-up`, post)
            .then(res => { <Link to="/"></Link> })
            .catch(error => { 
                alert(error) 
            })

    }

    return (
        <New>
            <img src="../../assets/logo.svg"></img>
            <input data-test="email-input" type="email" name="email" placeholder="email"  />
            <input data-test="password-input" type="password" name="password" placeholder="password"  />
            <input data-test="user-name-input" type="name" name="name" placeholder="name"  />
            <input data-test="user-image-input"  type="photo" name="photo" placeholder="photo" />
            <Link data-test="login-link" to="/">
                Already have an account? LogIn
            </Link>
        </New>
    )
}

export default NewAccount