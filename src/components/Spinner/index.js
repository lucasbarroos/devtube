import React from 'react';

import {
  Container,
} from './styles';

const Spinner = () => (
  <Container>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </Container>
);

export default Spinner;
