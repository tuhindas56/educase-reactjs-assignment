import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ButtonPrimary } from "./Buttons"
import { FormField, Input, Label } from "./Form"

const Wrapper = styled.div`
  padding: 3rem 1.2rem;

  h1 {
    line-height: normal;
  }

  p {
    margin-top: 0.8rem;
  }
`

const LoginButton = styled(ButtonPrimary)`
  margin-top: 1rem;
  background-color: ${({ disabled }) =>
    disabled ? `#cbcbcb` : `var(--primary)`};
`

function Login() {
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(true)
  const [fieldValues, setFieldValues] = useState({
    emailAddress: "",
    password: "",
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate("/profile")
      })
    } else {
      navigate("/profile")
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFieldValues(f => ({ ...f, [name]: value }))
  }

  useEffect(() => {
    if (fieldValues.emailAddress && fieldValues.password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [fieldValues])

  return (
    <Wrapper>
      <h1>Signin to your PopX account</h1>
      <p>
        Lorem ipsum dolor sit amet
        <br /> consectetur adipisicing elit.
      </p>

      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="emailAddress">Email Address</Label>
          <Input
            type="email"
            name="emailAddress"
            id="emailAddress"
            onChange={handleChange}
            value={fieldValues.emailAddress}
            placeholder="youremail@example.com"
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={fieldValues.password}
            placeholder="minimum 8 characters"
            required
            minLength={8}
          />
        </FormField>

        <LoginButton type="submit" disabled={disabled}>
          Login
        </LoginButton>
      </form>
    </Wrapper>
  )
}
export default Login
