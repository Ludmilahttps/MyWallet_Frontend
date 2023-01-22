import { useState, useContext } from "react"
import { Container } from "./style"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../UserContext.js"
import dayjs from "dayjs"

export default function NewEnter() {
  const { info, historic, setInfo, setHistoric } = useContext(UserContext)
  const goTo = useNavigate()
  const [value, setValue] = useState("")
  const [description, setDescription] = useState("")

  async function sendLogin(e) {
    e.preventDefault()

    const post = {
      value: value,
      description: description,
      type: "enter"
    }
    const config = {
      headers: {
        Authorization: `Bearer ${info.token}`
      }
    }

    console.log(info.token)

    try {
      const signIn = await axios.post(`${process.env.REACT_APP_API_URL}/post`, post, config)
      console.log(signIn.status)
      goTo('/home')

    } catch (error) {
      if (error.name === "AxiosError") alert("We couldn't find an account with this data!")
      //setSentRequest(false)
    }
  }

  return (
    <>
      <Container>
        <h1>New enter</h1>
        <form onSubmit={sendLogin}>
          <input type="number" name="value" placeholder="value" value={value} onChange={(e) => setValue(e.target.value)} />
          <input type="text" name="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="submit">save</button>
        </form>
      </Container>
    </>
  )
}