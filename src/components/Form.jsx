import styled from "styled-components"

const FormField = styled.div`
  position: relative;
  margin-top: 1.6rem;
`

const Label = styled.label`
  min-width: 12ch;
  position: absolute;
  top: -10px;
  left: calc(1rem - 4px);
  background-color: var(--bg);
  color: var(--primary);
  padding: 0 4px;
  font-size: 0.8rem;
`

const Input = styled.input`
  background-color: var(--bg);
  border: 1px solid #cfcfcf;
  border-radius: 6px;
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 0.8rem;

  &:focus {
    outline: 1px solid var(--primary);
  }

  &::placeholder {
    color: #999999;
  }
`

export { FormField, Input, Label }
