import styled from "styled-components"

const ButtonPrimary = styled.button`
  display: inline-block;
  width: 100%;
  background-color: var(--primary);
  color: #fff;
  margin-top: 2rem;
  padding: 0.7rem 1.4rem;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
`

const ButtonSecondary = styled(ButtonPrimary)`
  background-color: var(--secondary);
  color: #1d2226;
  font-weight: 500;
  margin-top: 0.6rem;
`

export { ButtonPrimary, ButtonSecondary }
