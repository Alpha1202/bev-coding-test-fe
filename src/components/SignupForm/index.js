import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ImageUploader from "react-images-upload";

import {
  FormContainer,
  FormTitle,
  TextFieldBox,
  Dividers,
  ButtonWrapper,
  Links
} from '../LoginForm/loginform.elements'
import Input from '../Input'
import Button from '../Button'

import { signupRequest } from '../../store/actions/signup'

const SignupForm = ({ handleToggleForms }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [file, setFile] = useState('somerandomsteing')

  const handleFnameChange = value => {
    setFname(value)
  }
  const handleLnameChange = value => {
    setLname(value)
  }
  const handleEmailChange = value => {
    setEmail(value)
  }
  const handlePhoneNumberChange = value => {
    setPhoneNumber(value)
  }
  const handleCPasswordChange = value => {
    setCPassword(value)
  }
  const handlePasswordChange = value => {
    setPassword(value)
  }
  const handleFileChange = () => {
		// console.log(pictureDataURLs)
    // setFile(file[0])
  }
  const handleToggleForm = type => {
    handleToggleForms(type)
  }

  const handleFormSubmit = async () => {
    if (!email) {
      enqueueSnackbar('Please enter a valid email', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        preventDuplicate: true,
        variant: 'error'
      })
    }
    if (!password) {
      enqueueSnackbar('Please enter your password', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        preventDuplicate: true,
        variant: 'error'
      })
    }
    if (!phoneNumber) {
      enqueueSnackbar('Please enter your phone number', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        preventDuplicate: true,
        variant: 'error'
      })
    }
    if (!file) {
      enqueueSnackbar('Please enter select a file for upload', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        preventDuplicate: true,
        variant: 'error'
      })
    }
    if (!fname || !lname) {
      enqueueSnackbar('Please enter a valid name', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        preventDuplicate: true,
        variant: 'error'
      })
    }
    if (!password || !cpassword) {
      enqueueSnackbar(
        'Please enter a valid password or passwords do not match',
        {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          preventDuplicate: true,
          variant: 'error'
        }
      )
    }
    const payload = {
      email,
      password,
      first_name: fname,
      last_name: lname,
      passport: file,
      phone_number: phoneNumber
    }
    const response = await dispatch(signupRequest(payload))

    if (response.status === 'success') {
      enqueueSnackbar('Sign up Successful', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        preventDuplicate: true,
        variant: 'success'
      })
      navigate('/dashboard')
    } else {
      enqueueSnackbar(response.message || 'One or more input are invalid', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        preventDuplicate: true,
        variant: 'error'
      })
    }
  }
  return (
    <FormContainer
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete='off'
    >
      <FormTitle variant='h4'>Sign up</FormTitle>
      <TextFieldBox>
        <Input
          id='signup-form-fname'
          label='First Name'
          required={true}
          type='first name'
          value={fname}
          handleChange={handleFnameChange}
          hasAdornment={false}
        />
      </TextFieldBox>
      <TextFieldBox>
        <Input
          id='signup-form-lname'
          label='Last Name'
          required={true}
          type='last name'
          value={lname}
          handleChange={handleLnameChange}
          hasAdornment={false}
        />
      </TextFieldBox>
      <TextFieldBox>
        <Input
          id='signup-form-email'
          label='E-mail'
          required={true}
          type='email'
          value={email}
          handleChange={handleEmailChange}
          hasAdornment={false}
        />
      </TextFieldBox>
      <TextFieldBox>
        <Input
          id='signup-form-phone'
          label='Phone Number'
          required={true}
          type='tel'
          value={phoneNumber}
          handleChange={handlePhoneNumberChange}
          hasAdornment={false}
        />
      </TextFieldBox>

      <TextFieldBox>
        <Input
          id='signup-form-password'
          label='Password'
          required={true}
          type='password'
          value={password}
          handleChange={handlePasswordChange}
          hasAdornment={true}
        />
      </TextFieldBox>

      <TextFieldBox>
        <Input
          id='signup-form-cpassword'
          label='Confirm Password'
          required={true}
          type='password'
          value={cpassword}
          handleChange={handleCPasswordChange}
          hasAdornment={true}
        />
      </TextFieldBox>

      <TextFieldBox>
			<ImageUploader
        withIcon={false}
        withPreview={true}
        buttonText="Choose images"
        onChange={handleFileChange}
        imgExtension={[".jpg", ".png"]}
        maxFileSize={100000}
      />
        {/* <Input
          id='signup-form-avatar'
          label=''
          required={true}
          type='file'
          value={file}
          handleChange={(e) => handleFileChange(e)}
          hasAdornment={false}
        /> */}
      </TextFieldBox>

      <ButtonWrapper>
        <Button
          onClick={handleFormSubmit}
          primary
          variant='contained'
          label='Sign up'
        />
      </ButtonWrapper>

      <Dividers flexItem>OR</Dividers>
      <ButtonWrapper>
        <Button
          onClick={() => handleToggleForm('login')}
          variant='outlined'
          label='Login'
        />
      </ButtonWrapper>
    </FormContainer>
  )
}

export default SignupForm
