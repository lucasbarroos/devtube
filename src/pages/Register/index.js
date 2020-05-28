import React from 'react';
import { connect } from 'react-redux';

const Register = () => (<div>Register page</div>);

export default connect((state) => ({ user: state.user }))(Register);
