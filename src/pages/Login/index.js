import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import UserService from '../../services/User/index';
import {
  Container,
  BlurPage,
  Form,
  Title,
  InputForm,
  LoginButton,
  TextInput,
} from './styles';


function LoginDispatcher(name, email, profession, channels) {
  return {
    type: 'LOGIN',
    name,
    email,
    profession,
    channels,
  };
}

const Login = ({ dispatch }) => {
  const [formEmail, setFormEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    const response = await UserService.login({ email: formEmail, password });
    if (response.ok) {
      const {
        name, email, profession, channels,
      } = response.data;
      dispatch((LoginDispatcher(name, email, profession, channels)));
      history.go('/');
    }
  };

  return (
    <Container>
      <BlurPage />
      <Form>
        <Grid container align="center">
          <Grid item lg={12} md={12} sm={12}>
            <Title>Devtube</Title>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <InputForm>
              <TextInput
                type="email"
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </InputForm>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <InputForm>
              <TextInput
                className="input-login"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputForm>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <InputForm>
              <LoginButton onClick={handleLogin}>Login</LoginButton>
            </InputForm>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default connect((state) => ({ user: state.user }))(Login);
