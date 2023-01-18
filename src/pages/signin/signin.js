import React from 'react'
import { Link, Navigate } from "react-router-dom"
import { Form } from "./style"
import { URL } from "../../constants/urls"
import axios from "axios"
import { useState} from "react"
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom"
 
function sigin() {

    function sendLogin(e) {
        e.preventDefault()

        const post = {
        
        }

        axios.post(`${URL}/`, post)
        .then(resp => { 
            //console.log(resp.data)
            <useNavigate to="/"/>
        })
        .catch(error => { 
            alert(error)
        })
    }

    //     email: "ludvieira125@hotmail.com",
    //     password: "12345"

    return (
        <Form>
            <img src="../../assets/logo.svg"></img>
            <input data-test="email-input" type="email" name="email" placeholder="email" />
            <input data-test="password-input" type="password" name="password" placeholder="password" />
            <button data-test="login-btn" type='submit'  onClick={(e) => sendLogin(e)}>{<ThreeDots height="18" width="30" color="white" ariaLabel="loading" wrapperStyle={{}} wrapperClassName=""/>}</button>
            <Link data-test="signup-link" to="/cadastro">
                Don't have an account? Register
            </Link>
        </Form>
    )
}

export default sigin