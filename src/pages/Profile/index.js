import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import {
  Grid,
  Button,
  TextField,
} from '@material-ui/core';
import {
  Container,
  Form,
  Picture,
} from './styles';
import UserService from '../../services/User/index';
import Toastr from '../../utils/Toastify/index';

const NoImage = 'https://nemsmbr.org/wp-content/uploads/2019/03/no-image-icon-md-2.png';

const Profile = ({ user, dispatch }) => {
  const [nameForm, setNameForm] = useState('');
  const [professionForm, setProfessionForm] = useState('');

  useEffect(() => {
    setNameForm(user.name);
    setProfessionForm(user.profession);
  }, []);

  const inputStyle = {
    width: '80%',
    marginTop: 20,
  };

  const handleSave = async () => {
    const response = await UserService.put(user._id, { name: nameForm, profession: professionForm });
    if (response.ok) {
      dispatch({
        type: 'UPDATE',
        name: nameForm,
        profession: professionForm,
      });
      Toastr.addSuccess();
    } else {
      Toastr.addError();
    }
  };

  return (
    <Container>
      <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={500} animationOutDuration={1000}>
        <Form>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} align="center">
              <Picture src={user.picture ? user.picture : NoImage} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} align="center">
              <TextField id="standard-basic" onChange={(e) => setNameForm(e.target.value)} value={nameForm} label="Name" style={inputStyle} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} align="center">
              <TextField id="standard-basic" onChange={(e) => setProfessionForm(e.target.value)} value={professionForm} label="Profession" style={inputStyle} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} align="center">
              <Button color="primary" variant="contained" onClick={handleSave} style={{ marginTop: 20 }}>Salvar</Button>
            </Grid>
          </Grid>
        </Form>
      </Animated>
    </Container>
  );
};

export default connect((state) => ({ user: state.user }))(Profile);
