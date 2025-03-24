import { Link } from "react-router-dom"
import styled from "styled-components"
import { ButtonPrimary } from "./Buttons"

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  place-content: center;
`
function Error() {
  return (
    <Wrapper>
      <p>404 | Not Found</p>
      <ButtonPrimary as={Link} to="/" viewTransition>
        Home
      </ButtonPrimary>
    </Wrapper>
  )
}
export default Error
