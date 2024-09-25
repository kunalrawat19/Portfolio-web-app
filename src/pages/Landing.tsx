import React from "react";


const Landing=()=>{
  return(

  <div className="flex flex-col w-full md:flex-row h-screen overflow-y-hidden">
    <a href="/home" className="flex-1 h-1/3 ">
      <div className="bg-about  p-0 md:p-4 shadow-lg transition-transform duration-300 hover:scale-105 h-full md:h-screen ">
        <h1 className=" text-3xl md:text-4xl font-doodle inline-block  mt-[1rem] ml-[1rem]  md:m-[2rem]
        bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-left-bottom 
        hover:bg-[length:100%_4px] transition-all duration-300 ease-out bg-no-repeat ">HOME</h1>
        <img src="https://res.cloudinary.com/ddsqjzrow/image/upload/v1727120229/home_uxgwt4.png" className=" mt-0 m-auto md:m-auto h-[180px] md:h-[400px] " alt="" />
      </div>
    </a>
  
    <div className="flex flex-col  md:flex-1 h-2/3 md:h-screen overflow-hidden">
      <a href="/projects" className="h-1/2">
        <div className="relative w-full bg-projects p-4 shadow-lg transition-transform duration-300 hover:scale-105 h-full  md:h-[50vh] text-white">
          
          <img src="https://res.cloudinary.com/ddsqjzrow/image/upload/v1727120229/projects_usce5n.png" className=" md:mt-[2rem] m-auto h-[180px] md:h-[200px]" alt="" />
          
          <h1 className="text-3xl md:text-4xl font-doodle  absolute bottom-0 left-0 m-[1rem] md:m-[2rem]
            bg-gradient-to-r from-white to-white bg-[length:0%_4px] bg-left-bottom 
            hover:bg-[length:100%_4px] transition-all duration-300 ease-out bg-no-repeat">PROJECTS</h1>
        </div>
      </a>
    
      <a href="/contact" className="h-1/2">
        <div className=" relative w-full bg-contact p-4 shadow-lg transition-transform duration-300 hover:scale-105 h-full  md:h-[50vh] ">
          <img src="https://res.cloudinary.com/ddsqjzrow/image/upload/v1727120228/design_z3qlyz.png" className="md:mt-[2rem] m-auto h-[180px] md:h-[200px]" alt="" />
          <h1 className="text-3xl md:text-4xl font-doodle absolute  bottom-0 left-0 m-[1rem] md:m-[2rem] 
            bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-left-bottom 
            hover:bg-[length:100%_4px] transition-all duration-300 ease-out bg-no-repeat ">
            CONTACT
          </h1>
        </div>
      </a>
    </div>
    
  </div>


)
}

export default Landing;