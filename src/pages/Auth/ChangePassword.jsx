import { useState } from 'react';
import CoverImage from '../../assets/img/Cover.png';
import logo from '../../assets/img/logo.png';
import { Button, IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from 'styled-components';

const CreatePasswordContainer = styled.div`
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
const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <CreatePasswordContainer>
    <CoverImageWrapper>
      <img src={CoverImage} alt="Cover" />
    </CoverImageWrapper>
    <FormWrapper>
      <FormContainer>
        <Logo src={logo} alt="Logo" />
        <FormTitle>Create New Password</FormTitle>
        <FormSubtitle>Please Enter your Password and Confirm Password</FormSubtitle>

        <form noValidate autoComplete="off">
          <FieldWrapper>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>New Password</InputLabel>
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
          <FieldWrapper>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>Confirm Password</InputLabel>
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

          <StyledButton variant="contained" color="primary">
            CONTINUE
          </StyledButton>
        </form>

        
      </FormContainer>
    </FormWrapper>
  </CreatePasswordContainer>
  )
}

export default ChangePassword
