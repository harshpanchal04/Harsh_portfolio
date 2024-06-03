import Header from "../../Components/Header"
import Tile from "../../Components/Tile"
// import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiInstagram } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiGoogle } from "@mdi/js";
import Footer from "../../Components/Footer";
import './ContactUs.css'
import prof from '../profile.jpeg';
function ContactPage () {
    return (
        <>
        <Header/>

        <Tile
            image={"circle"}
            img={prof}
            header={"Reach out to me!"}
            text1={"I am available on almost every social media platform.You want to discuss a project or just want to say hi? My Inbox is always open for you."}
            icon8={mdiGithub}
            icon9={mdiInstagram}
            icon10={mdiLinkedin}
            icon11={mdiGoogle}
            text4={"www.google.com"}
            text5={"Check MY Resume"}
            btnText={"See my Resume"}
        />


        <div className="connection">
            <h2>Let's connect and build something together!</h2>
        </div>
        <div class="container">
        <a class="sayhello" href="#contact">Say Hello <span class="wave">👋</span></a>
        </div>
        <div className="img">
            <img src="https://ajitverma15.github.io/Interactive-Portfolio/Image/connection.svg"/>
        </div>

        <Footer/>
    </>
    )
   
}

export default ContactPage;