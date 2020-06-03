/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import { useHistory, Link } from 'react-router-dom';
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
  RegisterButton,
} from './styles';
import Toastify from '../../utils/Toastify/index';


function LoginDispatcher(_id, name, email, profession, channels, picture) {
  return {
    type: 'LOGIN',
    _id,
    name,
    email,
    profession,
    channels,
    picture,
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
        _id, name, email, profession, channels, picture,
      } = response.data;
      dispatch((LoginDispatcher(_id, name, email, profession, channels, picture)));
      history.push('/');
      Toastify.addSuccess('Welcome to Devtube');
    } else {
      Toastify.addError();
    }
  };

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1000}>
      <Container>
        <BlurPage />
        <Form autocomplete="off">
          <RegisterButton>
            <Link to="/register">Sign up</Link>
          </RegisterButton>
          <Grid container align="center">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Title>Devtube</Title>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <InputForm>
                <TextInput
                  placeholder="Name"
                  type="email"
                  onChange={(e) => setFormEmail(e.target.value)}
                />
              </InputForm>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <InputForm>
                <TextInput
                  placeholder="Password"
                  className="input-login"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputForm>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <InputForm>
                <LoginButton onClick={handleLogin}>Login</LoginButton>
              </InputForm>
            </Grid>
          </Grid>
        </Form>
      </Container>
    </Animated>
  );
};

export default connect((state) => ({ user: state.user }))(Login);
