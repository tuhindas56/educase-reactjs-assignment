import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ButtonPrimary } from "./Buttons"
import { FormField, Input, Label } from "./Form"

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 1.2rem;

  h1 {
    line-height: normal;
    margin-bottom: 2rem;
  }

  p {
    margin: 0.8rem 0 0.4rem 0;
    font-size: 0.8rem;
  }
`

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  fieldset {
    border: none;
    padding: 0;
  }

  input[type="radio"] {
    accent-color: var(--primary);
    height: 1px;
    width: 1px;
    opacity: 0;
  }

  label[for="agencyYes"],
  label[for="agencyNo"] {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.8rem;
    margin-right: 1rem;
  }

  label[for="agencyYes"]:before,
  label[for="agencyNo"]:before {
    content: "";
    border: 1px solid gray;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
  }

  input[type="radio"]:checked + label::before {
    border: 1px solid var(--primary);

    background: radial-gradient(
      0.75em circle at center,
      var(--primary) 50%,
      transparent 55%
    );
  }
`

const SignUpButton = styled(ButtonPrimary)`
  background-color: ${({ disabled }) =>
    disabled ? `#cbcbcb` : `var(--primary)`};
`

function SignUp() {
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(true)
  const [fieldValues, setFieldValues] = useState({
    fullName: "",
    phoneNo: "",
    emailAddress: "",
    password: "",
    companyName: "",
    agency: "",
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
    if (
      fieldValues.fullName &&
      fieldValues.phoneNo &&
      fieldValues.emailAddress &&
      fieldValues.password &&
      fieldValues.agency
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [fieldValues])

  return (
    <Wrapper>
      <h1>Create your PopX account</h1>

      <Form onSubmit={handleSubmit}>
        <fieldset>
          <FormField>
            <Label htmlFor="fullName">
              Full Name<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              value={fieldValues.fullName}
              placeholder="Marry Doe"
              required
            />
          </FormField>

          <FormField>
            <Label htmlFor="phoneNo">
              Phone number<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="tel"
              name="phoneNo"
              id="phoneNo"
              onChange={handleChange}
              value={fieldValues.phoneNo}
              pattern="[0-9]*"
              placeholder="1234567890"
              required
              minLength={10}
              maxLength={10}
            />
          </FormField>

          <FormField>
            <Label htmlFor="emailAddress">
              Email Address<span style={{ color: "red" }}>*</span>
            </Label>
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
            <Label htmlFor="password">
              Password<span style={{ color: "red" }}>*</span>
            </Label>
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
          <FormField>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              onChange={handleChange}
              value={fieldValues.companyName}
              placeholder="Enter your company name"
            />
          </FormField>

          <FormField style={{ marginTop: "1.2rem" }}>
            <p>
              Are you an Agency?<span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="radio"
              name="agency"
              id="agencyYes"
              onChange={handleChange}
              value="yes"
              required
            />
            <label htmlFor="agencyYes">Yes</label>
            <input
              type="radio"
              name="agency"
              id="agencyNo"
              onChange={handleChange}
              value="no"
              required
            />
            <label htmlFor="agencyNo">No</label>
          </FormField>
        </fieldset>

        <SignUpButton type="submit" disabled={disabled}>
          Create Account
        </SignUpButton>
      </Form>
    </Wrapper>
  )
}
export default SignUp
