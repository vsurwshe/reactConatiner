import React from 'react'
import { Card,CardBody } from 'reactstrap';
import { Container } from 'react-bootstrap';

const HeaderPart=(props)=>{

    return  <header id="header" className="ex-header">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Welcome to Cloud Based Hotel Desktop Application.</h1>
                <p style={{color:"#FFFFFF"}}>Design by : V & Y Soft. Tech. development team.</p>
            </div>
             {/* <!-- end of col --> */}
        </div> 
        {/* <!-- end of row --> */}
    </div> 
    {/* <!-- end of container --> */}
</header>
} 
export default HeaderPart;