import { useState } from "react"
import { Container } from "./style"

export default function NewExit() {
  const [value, setValue] = useState("")

  function sendLogin(e) {
    e.preventDefault()
  }

  return (
    <>
      <Container>
          <h1>New exit</h1>
        <form onSubmit={sendLogin}>
          <input type="number" name="value" placeholder="value" value={value} onChange={(e) => setValue(e.target.value)}/>
          <input type="text" placeholder="description" />
          <button type="submit">save</button>
        </form>
      </Container>
    </>
  )
}