import React, { Component } from 'react'
import { PreLoder, Navigation, Features, Details } from './Helper/ComponentPage';
import Pricing from './Helper/Priceing';
import HeaderPart from './Helper/HeaderPart';
import FooterPart from './Helper/FooterPart';
import * as MainPageAction from '../redux/action/MainPageAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Main extends Component {

  state={
    loading:false
  }

  handelLoadingValue=()=>{this.setState({loading : !this.state.loading})}

  componentDidMount=async()=>{
    const { price, featuers}=this.props.MainPageState
    const { GetFeaturesList, GetPriceList }=this.props.MainPageAction
    await this.handelLoadingValue();
    (featuers && featuers.length <=0) && await GetFeaturesList();
    (price && price.length <=0) && await GetPriceList();
    await this.handelLoadingValue();
  }


  render() {
    const { loading }=this.state
    return loading ? <PreLoder /> :this.loadSecureFramework();
  }

  // This is loading main Dashborad Sturctres
  loadSecureFramework = () => {
    const { price, featuers}=this.props.MainPageState
    return <>
      <PreLoder />
      <Navigation />
      <HeaderPart />
      <Details />
      <Features featuers={featuers} />
      <Pricing price={price}/>
      <FooterPart />
    </>
  };
}

const mapStateToProps=(state)=>{return state}
const mapDispatchToProps=(dispatch)=>({
  dispatch,
  MainPageAction : bindActionCreators(MainPageAction,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(Main);