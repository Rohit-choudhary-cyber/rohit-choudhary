import { CONTACT } from "../constants";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 ">
        <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0 ,y:-100}}
         transition={{duration:0.5}}
         className="my-10 text-center text-4xl text-white"> 
          Get in touch
        </motion.h2>
        <div className="text-center tracking-tighter text-white">
          <motion.p 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0 ,x:-100}}
           transition={{duration:1}}
           className="my-4"> 
            {CONTACT.phoneNo}
          </motion.p>
        
          < a href="#" 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0 ,x:-100}}
           transition={{duration:1}}
           className="border-b"
            >
              {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact
