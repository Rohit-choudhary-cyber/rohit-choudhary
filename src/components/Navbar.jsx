import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import logo from "../assets/RohitkumarLogo.webp"

const Navbar = () => {
    return ( 
       <nav className="flex items-center justify-between py-6"> 
       <div className="flex flex-shrink-0 items-center"> 
            <a href="/" aria-label="Home" > 
                <img src = {logo} className= "mx-2" width ={50} height={33} alt="Logo" /> 
            </a>
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
            <a href="https://www.linkedin.com/in/rohit-choudhary-4252b7334/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn" >
                <FaLinkedin/>
            </a>    
            <a href="https://github.com/Rohit-choudhary-cyber" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub" >
                <FaGithub/>
            </a> 
            <a href="https://instagram.com/rohit._.choudharyy_/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram" >
                <FaInstagram/>
            </a> 
            <a href="https://www.linkedin.com/in/your-linkedin-profile" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp" >
                <FaWhatsapp/>
            </a> 
       </div>


       </nav>
     );
}
 
export default Navbar;

