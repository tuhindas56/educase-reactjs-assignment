import { Link } from "react-router-dom"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondary } from "./Buttons"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 3rem 1.2rem;
`

function Home() {
  return (
    <Wrapper>
      <h1>Welcome to PopX</h1>
      <p>
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit.
      </p>

      <ButtonPrimary as={Link} to="/signup" viewTransition>
        Create Account
      </ButtonPrimary>
      <ButtonSecondary as={Link} to="/login" viewTransition>
        Already Registered? Login
      </ButtonSecondary>
    </Wrapper>
  )
}
export default Home
