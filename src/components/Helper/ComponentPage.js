import React from 'react'

export const PreLoder=()=> <div className="spinner-wrapper">
    <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
</div>

export const Navigation=()=> {return <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" style={{backgroundColor:"#5f4dee"}}>
<div className="container">
    {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
    {/* <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Tivo</a> --> */}
    {/* <!-- Image Logo --> */}
    <a className="navbar-brand logo-image" href="index.html"> <i>V & Y </i></a> 
    {/* <!-- Mobile Menu Toggle Button --> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-awesome fas fa-bars"></span>
        <span className="navbar-toggler-awesome fas fa-times"></span>
    </button>
    {/* <!-- end of mobile menu toggle button --> */}
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">FEATURES</a>
            </li>
            <li className="nav-item">
                <a className="nav-link page-scroll" href="#details">DETAILS</a>
            </li>
            {/* <!-- Dropdown Menu -->           */}
            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle page-scroll" href="#video" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">VIDEO</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="article-details.html"><span className="item-text">ARTICLE DETAILS</span></a>
                    <div className="dropdown-items-divide-hr"></div>
                    <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                    <div className="dropdown-items-divide-hr"></div>
                    <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                </div>
            </li> */}
            {/* <!-- end of dropdown menu --> */}
            <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">PRICING</a>
            </li>
        </ul>
        {/* <span className="nav-item">
            <a className="btn-outline-sm" href="log-in.html">LOG IN</a>
        </span> */}
    </div>
</div> 
</nav>}


export const Desription=()=><div className="cards-1">
<div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="above-heading">DESCRIPTION</div>
            <h2 className="h2-heading">Marketing Automation Will Bring More Qualified Leads</h2>
        </div> 
        {/* <!-- end of col --> */}
    </div> 
    {/* <!-- end of row --> */}
    <div className="row">
        <div className="col-lg-12">

            {/* <!-- Card --> */}
            <div className="card">
                <div className="card-image">
                    <img className="img-fluid" src="images/description-1.png" alt="alternative"/>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Lists Builder</h4>
                    <p>It's very easy to start creating email lists for your marketing actions. Just create your Tivo account</p>
                </div>
            </div>
            {/* <!-- end of card -->

            <!-- Card --> */}
            <div className="card">
                <div className="card-image">
                    <img className="img-fluid" src="images/description-2.png" alt="alternative" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">Campaign Tracker</h4>
                    <p>Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's functionalities</p>
                </div>
            </div>
            {/* <!-- end of card --> */}

            {/* <!-- Card --> */}
            <div className="card">
                <div className="card-image">
                    <img className="img-fluid" src="images/description-3.png" alt="alternative" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">Analytics Tool</h4>
                    <p>Tivo collects customer data in order to help you analyse different situations and take required action</p>
                </div>
            </div>
            {/* <!-- end of card --> */}

        </div> 
        {/* <!-- end of col --> */}
    </div> 
    {/* <!-- end of row --> */}
</div> 
{/* <!-- end of container --> */}
</div>


export const Features=()=> <div id="features" className="tabs">
<div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="above-heading">FEATURES</div>
            <h2 className="h2-heading">Marketing Automation</h2>
            <p className="p-heading">Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks</p>
        </div> 
        {/* <!-- end of col --> */}
    </div> 
    {/* <!-- end of row --> */}
    <div className="row">
        <div className="col-lg-12">

            {/* <!-- Tabs Links --> */}
            <ul className="nav nav-tabs" id="argoTabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-list"></i>List Builder</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-envelope-open-text"></i>Campaigns</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-chart-bar"></i>Analytics</a>
                </li>
            </ul>
            {/* <!-- end of tabs links --> */}

            {/* <!-- Tabs Content --> */}
            <div className="tab-content" id="argoTabsContent">

                {/* <!-- Tab --> */}
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/features-1.png" alt="alternative" />
                            </div>
                             {/* <!-- end of image-container --> */}
                        </div> 
                        {/* <!-- end of col --> */}
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h3>List Building Is Easier Than Ever</h3>
                                <p>It's very easy to start using Tivo. You just need to fill out and submit the <a className="blue page-scroll" href="sign-up.html">Sign Up Form</a> and you will receive access to the app and all of its features in no more than 24h.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Create and embed on websites newsletter sign up forms</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Manage forms and landing pages for your services</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Add and remove subscribers using the control panel</div>
                                    </li>
                                </ul>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                            </div> 
                            {/* <!-- end of text-container --> */}
                        </div>
                         {/* <!-- end of col --> */}
                    </div>
                     {/* <!-- end of row --> */}
                </div> 
                {/* <!-- end of tab-pane --> */}
                {/* <!-- end of tab --> */}

                {/* <!-- Tab --> */}
                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/features-2.png" alt="alternative" />
                            </div>
                             {/* <!-- end of image-container --> */}
                        </div> 
                        {/* <!-- end of col --> */}
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h3>Campaigns Monitoring Tools</h3>
                                <p>Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Tivo and basically to any marketing activity focused on results.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Easily plan campaigns and schedule their starting date</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Start campaigns and follow their evolution closely</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Evaluate campaign results and optimize future actions</div>
                                    </li>
                                </ul>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                            </div> 
                            {/* <!-- end of text-container --> */}
                        </div>
                         {/* <!-- end of col --> */}
                    </div> 
                    {/* <!-- end of row --> */}
                </div> 
                {/* <!-- end of tab-pane --> */}
                {/* <!-- end of tab --> */}

                {/* <!-- Tab --> */}
                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/features-3.png" alt="alternative" />
                            </div> 
                            {/* <!-- end of image-container --> */}
                        </div> 
                        {/* <!-- end of col --> */}
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h3>Analytics Control Panel</h3>
                                <p>Analytics control  panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">If you set it up correctly you will get acces to great intel</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Easy to integrate in your websites and landing pages</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">The generated reports are important for your strategy</div>
                                    </li>
                                </ul>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-3">LIGHTBOX</a>
                            </div> 
                            {/* <!-- end of text-container --> */}
                        </div> 
                        {/* <!-- end of col --> */}
                    </div> 
                    {/* <!-- end of row --> */}
                </div> 
                {/* <!-- end of tab-pane --> */}
                {/* <!-- end of tab --> */}
                
            </div>
             {/* <!-- end of tab content -->
            <!-- end of tabs content --> */}

        </div>
         {/* <!-- end of col --> */}
    </div> 
    {/* <!-- end of row --> */}
</div> 
{/* <!-- end of container --> */}
</div>



export const LightBox=()=><div id="details-lightbox-1" class="lightbox-basic zoom-anim-dialog mfp-hide">
<div class="container">
    <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
        <div class="col-lg-8">
            <div class="image-container">
                <img class="img-fluid" src="images/details-lightbox.png" alt="alternative" />
            </div>
             {/* <!-- end of image-container --> */}
        </div> 
        {/* <!-- end of col --> */}
        <div class="col-lg-4">
            <h3>List Building</h3>
            <hr/>
            <h5>Core service</h5>
            <p>It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.</p>
            <ul class="list-unstyled li-space-lg">
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">List building framework</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Easy database browsing</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">User administration</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Automate user signup</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Quick formatting tools</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Fast email checking</div>
                </li>
            </ul>
            <a class="btn-solid-reg mfp-close" href="sign-up.html">SIGN UP</a> <a class="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
        </div> 
        {/* <!-- end of col --> */}
    </div>
     {/* <!-- end of row --> */}
</div> 
{/* <!-- end of container --> */}
</div>


export const Details=()=><div id="details" class="basic-1">
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="text-container">
                <h2>Now Is The Time To Upgrade Your Marketing Solution</h2>
                <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                <ul class="list-unstyled li-space-lg">
                    <li class="media">
                        <i class="fas fa-square"></i>
                        <div class="media-body">Understand customers and meet their requirements</div>
                    </li>
                    <li class="media">
                        <i class="fas fa-square"></i>
                        <div class="media-body">Targeted client base with Tivo's efficient technology</div>
                    </li>
                </ul>
                <a class="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
            </div> 
            {/* <!-- end of text-container --> */}
        </div>
        {/* </div><!-- end of col --> */}
        <div class="col-lg-6">
            <div class="image-container">
                <img class="img-fluid" src="images/details.png" alt="alternative" />
            </div>
             {/* <!-- end of image-container --> */}
        </div>
         {/* <!-- end of col --> */}
    </div> 
    {/* <!-- end of row --> */}
</div> 
{/* <!-- end of container --> */}
</div>