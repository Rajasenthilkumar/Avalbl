// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import './assets/css/slick.css'
// import './assets/css/slick-theme.css';
// import './assets/css/primum-header.css';
// import './assets/css/common.css';
// import './assets/css/view-profile.css';
// import './assets/css/responsive.css';
// import MenuIcon from '@mui/icons-material/Menu';

// class MyClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false
//     };
//   }

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     return (
//       <div>
//         {/* Required meta tags */}
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//         <title>AVALBL</title>
//         {/* Start Header */}
//         <AppBar position="static" className="p-0">
//           <Toolbar>
//             <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleDrawerOpen}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6">
//               <img src="assets/images/logo.png" alt="demo" />
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer open={this.state.open} onClose={this.handleDrawerClose}>
//           <div>
//             <IconButton onClick={this.handleDrawerClose}>
//               <MenuIcon />
//             </IconButton>
//           </div>
//           <List>
//             <ListItem button>
//               <ListItemText primary="Conversations" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="My Bookings" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Availability" />
//             </ListItem>
//           </List>
//         </Drawer>
//         {/* end Header */}
//         {/*--banner start*/}
//         <section className="acc-banner"></section>
//         <section className="acc-header">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-lg-8">
//                 <div className="acc-cont">
//                   <div className="acc-img">
//                     <img src="assets/images/banner-04.png" alt="img" className="img-fluid" />
//                   </div>
//                   <div className="det-info">
//                     <div className="acc-name dis-align">
//                       <h3>James Fierro</h3>
//                       <p className="until-date">Available (Until 12/18/23)</p>
//                     </div>
//                     <div className="skill-info dis-align">
//                       <div className="date dis-align"><img src="assets/images/mail.png" alt="img" className="img-fluid" />
//                         <p>Jr. UX/UI Designer</p>
//                       </div>
//                       <p>Username <span>James2690</span></p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-12 col-lg-4">
//                 <div className="list-btn right-btn">
//                   <button type="button" onClick={() => window.open('choose-plan.html')} className=" btn action-button">Upgrade Premium</button>
//                   <button type="button" onClick={() => window.open('profile-plan.html')} className="btn-border">Edit Profile</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/*--banner end--*/}
//         {/*----gallery start*/}
//         <section className="gallery-slider">
//           <div className="gallery-img">
//             <img src="assets/images/slider-img1.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img2.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img3.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img1.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img2.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img3.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img1.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img2.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img3.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img1.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img2.png" alt="img" className="img-fluid" />
//             <img src="assets/images/slider-img3.png" alt="img" className="img-fluid" />
//           </div>
//         </section>
//         {/*--gallery end*/}
//         {/*----account-information start*/}
//         <section className="acc-info">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-lg-8">
//                 <div className="acc-box">
//                   <h4 className="title-name">About James Van</h4>
//                   <p className="acc-text">My name is James van. I live in Argentina and I love what i do. I grew up
//                     watching cartoons, drawing, making my own Post-it animations, so becoming an Animator was
//                     meant to be. All of that made what i'm today. Being in this business from almost 15 years,
//                     gave me the experience, speed, skills and resources to transform an idea into a beautiful
//                     animated product</p>
//                   <div className="rate-box acc-skill">
//                     <div className="aval-title">
//                       <h4 className="title-name">Availability</h4>
//                       <p className="acc-text">Available (until 12/18/23)</p>
//                     </div>
//                     <div className="aval-title rate-rabge-box">
//                       <h4 className="title-name">Rate Range</h4>
//                       <p className="acc-text">$50/hr - $100/hr</p>
//                     </div>
//                   </div>
//                   <div className="rate-box acc-skill">
//                     <div className="aval-title">
//                       <h4 className="title-name">Job Title</h4>
//                       <p className="acc-text">Jr. UX/UI Designer </p>
//                     </div>
//                     <div className="aval-title rate-rabge-box">
//                       <h4 className="title-name">Total-Experience</h4>
//                       <div className="progress">
//                         <div className="progress-bar" role="progressbar" style={{ width: '33.33%' }}>
//                         </div>
//                         <div className="progress-bar " role="progressbar" style={{ width: '15%' }}>
//                         </div>
//                         <div className="progress-bar" role="progressbar" style={{ width: '0%' }}>
//                         </div>
//                       </div>
//                       <div className="progres-num">
//                         <p>1-5</p>
//                         <p>5-10</p>
//                         <p>10+</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="client-list list-box acc-skill">
//                     <h4 className="title-name">Client List</h4>
//                     <ul>
//                       <li>XYZ Design Studiio</li>
//                       <li>Reliance Industries</li>
//                       <li>Budget Group, Inc.</li>
//                       <li>Duke Energy Corp</li>
//                       <li>Acterna Corp.</li>
//                       <li>Abbott Laboratories</li>
//                       <li>Cabot Corp</li>
//                       <li>First Data Corp.</li>
//                     </ul>
//                   </div>
//                   <div className="skill-sec list-box acc-skill">
//                     <h4 className="title-name">Skill</h4>
//                     <ul>
//                       <li>
//                         <div className="check-box">
//                           <div className="check-head">
//                             <h4>Designer</h4>
//                           </div>
//                           <ul>
//                             <li>Logo Design</li>
//                             <li>Brand Design</li>
//                             <li>Key Art</li>
//                             <li>Editorial Design</li>
//                           </ul>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <div className="check-head">
//                             <h4>Concept Artist</h4>
//                           </div>
//                           <ul>
//                             <li>Matte Painting</li>
//                             <li>Concept Art</li>
//                             <li>Visual Development</li>
//                             <li>Color Scripts &amp; Keys</li>
//                           </ul>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <div className="check-head">
//                             <h4>Experience Designer</h4>
//                           </div>
//                           <ul>
//                             <li>AR/VR</li>
//                             <li>Wayfinding</li>
//                             <li>Exhibition Design</li>
//                             <li>Concert Visuals</li>
//                           </ul>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="Tools-sec list-box ">
//                     <h4 className="title-name">Tools</h4>
//                     <ul>
//                       <li>
//                         <div className="check-box">
//                           <div className="check-head">
//                             <h4>Design &amp; Illustration</h4>
//                           </div>
//                           <ul>
//                             <li>Photoshop</li>
//                             <li>Premier Pro</li>
//                             <li>Cinema 4D</li>
//                             <li>Figma</li>
//                           </ul>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-12 col-lg-4">
//                 <div className="acc-box right-box">
//                   <div className="lang-list acc-skill">
//                     <h4 className="title-name">Language</h4>
//                     <ul>
//                       <li>
//                         English
//                       </li>
//                       <li>French</li>
//                       <li>German</li>
//                     </ul>
//                   </div>
//                   <div className="loca-cont acc-skill">
//                     <h4 className="title-name">Location</h4>
//                     <div className="map-cont">
//                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8739.653343367196!2d72.6572705873721!3d22.929167541842435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e890757164427%3A0x9aab0730641d8155!2sVivekandnagar%2C%20Hathijan%2C%20Ahmedabad%2C%20Gujarat%20382435!5e0!3m2!1sen!2sin!4v1702547637409!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
//                       <div className="date"><img src="assets/images/location.png" className="img-fluid" alt="img" />
//                         <p>Buenos Aires, CABA, Argentina</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="port-cont acc-skill">
//                     <h4 className="title-name">Portfolio Link</h4>
//                     <p className="acc-text">www.jamesvanden.com</p>
//                   </div>
//                   <div className="media-cont acc-skill">
//                     <h4 className="title-name">Social Media</h4>
//                     <ul>
//                       <li><a href="https://www.facebook.com/"><img src="assets/images/facebook.svg" alt="img" className="img-fluid" /></a></li>
//                       <li><a href="https://www.linkedin.com/"><img src="assets/images/linkedin.svg" alt="img" className="img-fluid" /></a></li>
//                       <li><a href="https://twitter.com/"><img src="assets/images/twitter.svg" alt="img" className="img-fluid" /></a></li>
//                       <li><a href="https://www.youtube.com/"><img src="assets/images/youtube.svg" alt="img" className="img-fluid" /></a></li>
//                       <li><a href="https://www.instagram.com/"><img src="assets/images/instagram.svg" alt="img" className="img-fluid" /></a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/*----account-information end*/}
//       </div>
//     );
//   }
// }

// export default MyClass;
import React from 'react'

function Userprofileon() {
  return (
    <div>Userprofileon</div>
  )
}

export default Userprofileon