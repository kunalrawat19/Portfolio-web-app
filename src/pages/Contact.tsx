import React from "react";
import { IoIosUndo } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact=()=>{
    const socialMediaData=[{
        name:"Twitter",
        logo:<FaXTwitter/>,
        link:"https://x.com/KunalRa07763972"
    },{
        name:"LinkedIn",
        logo:<FaLinkedin/>,
        link:"https://www.linkedin.com/in/kunal-rawat-56b00322a/"
    },{
        name:"Github",
        logo:<FaGithub/>,
        link:"https://github.com/kunalrawat19"
    }]
    return(
        <div className="bg-contact h-screen">

        <a href="/"><div className=" text-5xl inline-block m-[2rem] "><IoIosUndo/></div></a>

        <div className="text-center">
        <h1 className="font-bold text:4xl text-5xl font-rubik mb-[2rem]">CONTACT ME</h1>


        <div className=" grid grid-cols-2 gap-[3rem] md:flex md:flex-row md:gap-[2rem] w-[50%] m-auto  justify-center">

    
    
    {socialMediaData.map((socialMedia, index) => (
        <div key={index} className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] m-0 md:p-[4px] transition-transform duration-300 transform hover:scale-110 border border-transparent hover:border-black rounded-xl flex  items-center justify-center">
    <a href={socialMedia.link} target="blank" className=" text-8xl md:text-9xl">
      {socialMedia.logo}
    </a>
  </div>
))}

            




        </div>
        <div className="font-bold text-xl flex justify-center items-center gap-2 mt-8">
  <a href="mailto:deveshtuli02@gmail.com"  className="flex items-center bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-left-bottom 
  hover:bg-[length:100%_4px] transition-all duration-300 ease-out bg-no-repeat ">
    <MdEmail className="mr-2 text-2xl" />
    kunalrawat693@gmail.com
  </a>
</div>
      </div>


        </div>
    )
}
export default Contact;