import React, { Component } from 'react'
import { PreLoder, Navigation, Features, Details } from './Helper/ComponentPage';
import Pricing from './Helper/Priceing';
import HeaderPart from './Helper/HeaderPart';
import FooterPart from './Helper/FooterPart';

class Main extends Component {

  render() {
    return this.loadSecureFramework();
  }

  // This is loading main Dashborad Sturctres
  loadSecureFramework = () => {
    return <>
      <PreLoder />
      <Navigation />
      <HeaderPart />
      <Details />
      <Features />
      <Pricing />
      <FooterPart />
    </>
  };
}

export default Main;