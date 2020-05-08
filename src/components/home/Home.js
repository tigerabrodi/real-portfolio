import React, { Fragment } from 'react';
import Header from './header/Header';
import Technologies from './technologies/Technologies';
import Touch from './touch/Touch';

const Home = () => {
    return (
      <Fragment>
        <Header />
        <Technologies />
        <Touch />
      </Fragment>
    );
}

export default Home;
