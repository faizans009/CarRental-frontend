import { useState } from 'react';
import CoverImage from '../../assets/img/Cover.png';
import logo from '../../assets/img/logo.png';
import { TextField, Button, IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput, Checkbox, FormControlLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from 'styled-components';
import GoogleIcon from '../../assets/icons/google-icon.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const CoverImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: 404px;
  height: 56px;
`;

const FieldWrapper = styled.div`
  margin-bottom: 20px;
  width: 404px;
`;

const Signup = styled(Link)`
  color: #007bff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.p`
  text-align: center;
  margin: 10px 0;
  color: #777;
`;

const SocialAuth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SocialButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 404px;
  height: 56px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  color: #333333;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const ForgotPassword = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const RememberForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <LoginContainer>
      <CoverImageWrapper>
        <img src={CoverImage} alt="Cover" />
      </CoverImageWrapper>
      <FormWrapper>
        <FormContainer>
          <Logo src={logo} alt="Logo" />
          <FormTitle>Sign In to your Account</FormTitle>
          <FormSubtitle>Welcome! Please enter your details</FormSubtitle>

          <form noValidate autoComplete="off">
            <FieldWrapper>
              <TextField label="Email" variant="outlined" required type="email" fullWidth />
            </FieldWrapper>

            <FieldWrapper>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </FieldWrapper>

            <RememberForgotContainer>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <ForgotPassword to="/forgetPassword">Forgot Password?</ForgotPassword>
            </RememberForgotContainer>

            <StyledButton variant="contained" color="primary">
              Sign In
            </StyledButton>
          </form>

          <Divider>
            Dont have an account? <Signup to="/signup">Sign Up</Signup>
          </Divider>

          <Divider>OR</Divider>

          <SocialAuth>
            <SocialButton>
              <SocialIcon src={GoogleIcon} alt="Google" />
              Sign in with Google
            </SocialButton>
            <SocialButton>
              <SocialIcon src={FacebookIcon} alt="Facebook" />
              Sign in with Facebook
            </SocialButton>
          </SocialAuth>
        </FormContainer>
      </FormWrapper>
    </LoginContainer>
  );
};

export default LoginPage;
