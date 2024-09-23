import React, { useState } from "react"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Skills from "../components/Skills"
import { IoIosUndo } from "react-icons/io";



import "../pages/home.css"



 
const Home=()=>{

    const [page, setPage] = useState("home");

    function changePage(newPage){
        setPage(newPage);


    }
    const Services=[{
        title:"I focus heavily on UI/UX. I like to create visually appealing web apps that aligns with the brand goals and strategies",
        svg:"https://res.cloudinary.com/ddsqjzrow/image/upload/v1727120228/design_z3qlyz.png",
        
    },{
        title:"I can help improve your engagement, through web apps that blend functionality with aesthetic appeal.",
        svg:'https://res.cloudinary.com/ddsqjzrow/image/upload/v1727120229/social-media_rm5wgz.png',
        
    }]
    



    return(
        <div className="bg-about">
            <a href="/"><div className="text-5xl inline-block m-[2rem] "><IoIosUndo/></div></a>

        


        
        <div className="flex flex-col  ">

            <div className=" flex md:flex-row flex-col-reverse   m-auto  justify-center gap-[3rem] items-center w-screen h-[75vh]   bg-home     ">
                <div className="text-center mr-[1rem]">
                <h2 className=" font-rubik text-xl">Hey! I'm</h2>
                <h1 className="font-rubik text-5xl md:text-7xl"> Kunal</h1>
                <h2 className="font-doodle text-2xl   ">Full Stack Developer</h2>
                

            </div>

            <div className="">
                <img src="https://res.cloudinary.com/ddsqjzrow/image/upload/v1727119693/Passport_Photograph_hjqvdb.jpg" alt="your"  className=" rounded-2xl w-[300px] h-[300px] border"/>
                <div className="mt-[2rem] flex flex-row justify-center gap-[2rem] text-4xl">

                <a href="https://www.linkedin.com/in/kunal-rawat-56b00322a/" target="blank"><FaLinkedin/></a>
                <a href="https://github.com/kunalrawat19" target="blank"><FaGithub/></a>
                <a href="https://x.com/KunalRa07763972" target="blank"><FaXTwitter/></a>
                {/* <a href="https://medium.com/@deveshtuli02"><FaMediumM/></a> */}
                </div>



            </div>
            
            

        </div>

        <div>
</div>


        <Skills/>
   <div className="flex flex-col w-[60%] gap-[5rem] m-auto mt-[5rem]">

  {Services.map((service, index) => {
      return (
          <div key={index} className=" flex flex-col md:flex-row gap-[3rem] items-center font-bold font-rubik">
        
          <img src={service.svg} className="h-[200px] w-[200px] " alt="" />
        <h1 className="font-bold text-center">{service.title}</h1>
        
      </div>
    );
})}
</div>
        </div>    
        </div>
    )

}
export default Home;