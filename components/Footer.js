import React from "react";
import FooterStyles from "../styles/Footer.module.css";
import { AiFillTwitterCircle } from 'react-icons/ai';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <div className={FooterStyles.container}>
      <footer className={FooterStyles.footer}>
        <div className={FooterStyles.mainContent}>
          <div className={FooterStyles.box}>
            <h2>About</h2>
            <div className="content">
              <p>
                For more stylished content creations and page creations follow
                us.
              </p>
              <div className="social">
                <a href="#"><span> <FacebookIcon/></span></a>
                <a href="#"><span><AiFillTwitterCircle style={{"width":"30px","height":"25px"}}/></span></a>
                <a href="#"><span><InstagramIcon/></span></a>
                <a><span><YouTubeIcon/></span></a>
              </div>
            </div>
          </div>

          <div className={FooterStyles.box}>
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span><AddLocationIcon />3/40A,Main complex,Hosur-635109</span>
              </div>
              <div className="phone">
                <span><PhoneIcon />+9089-34566786</span>
              </div>
              <div className="email">
                <span><EmailIcon />acb@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={FooterStyles.box}>
            <h2>Contact Us</h2>
            <div className={FooterStyles.content}>
            <form action="#">
              <div className="email">
              <div className="text">Email</div>
              <input type="email" required/>
              </div>
              <div className="msg">
                <div className="text"> Message</div>
                <textarea rows="5" cols="20" />
              </div>
              <div>
                <input type="submit" value="send"/>
              </div>
            </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
