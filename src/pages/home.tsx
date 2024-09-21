import React, { useState } from "react"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import mainImage from "my-project/src/assets/photo.jpeg"

import "../pages/home.css"


 
const Home=()=>{

    const [page, setPage] = useState("home");

    function changePage(newPage){
        setPage(newPage);
    }
    



    return(
        <>

        <div className=" flex font-rubik  justify-evenly items-center p-[3rem] text-2xl">
            <button >HOME</button>
            <button >ABOUT</button>
            <button>PROJECTS</button>
            


        </div>
         
        <div className=" flex md:flex-row flex-col-reverse  m-auto justify-around items-center w-[80%] h-[60vh] mt-[1rem]  bg-light-blue  border border-yellow-200 shadow-2xl rounded-2xl   ">
            <div className="text-center mr-[1rem]">
                <h2 className=" font-rubik text-xl">Hey! I'm</h2>
                <h1 className="font-rubik text-5xl md:text-7xl"> Devesh</h1>
                <h2 className="font-doodle text-2xl typing-animation  ">Full Stack Developer</h2>

            </div>

            <div className="">
                <img src="" alt="your"  className=" w-[250px] h-[250px] border"/>
                <div className="mt-[1rem] flex flex-row justify-center gap-[2rem] text-2xl">

                {/* <a href=""><FaLinkedin/></a> */}
                <a href="https://github.com/Devesh0403"><FaGithub/></a>
                <a href="https://x.com/Tuli2Tuli"><FaXTwitter/></a>
                <a href="https://medium.com/@deveshtuli02"><FaMediumM/></a>
                </div>



            </div>

        </div>

        





        </>

        
    
        
    )

}
export default Home;