import React from 'react';
// import classNames from 'classnames'; // Import classnames
// import './Projects.css';
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoIosUndo } from "react-icons/io";
import Skills from '../components/Skills';

const projectsData=[{
    title:"Legal Bharat",
    image:"https://res.cloudinary.com/ddsqjzrow/image/upload/v1727120228/legal-bharat_rrw5iy.jpg",
    desc:"Legal Bharat is a comprehensive web application designed to provide easy access to legal services and resources across India. The platform aims to bridge the gap between legal professionals and individuals seeking legal assistance.",
    skills:[{
        name:"React",
        svg:<FaReact/>
    },
    {
        name:"TypeScript",
        svg:<TbBrandTypescript/>
    },
    {
        name:"NodeJs",
        svg:<RiNodejsLine/>
    },{
        name:"Tailwind",
        svg:<RiTailwindCssFill/>
    },{
        name:"MongoDB",
        svg:<SiMongodb/>
    },{
        name:"React",
        svg:<SiExpress/>
    }]
},{
    title:"Chill Club",
    image:"https://res.cloudinary.com/ddsqjzrow/image/upload/v1727244440/image_6_nqllwu.png",
    desc:"Chill Club is a Pomodoro-based productivity app designed to help users manage their time efficiently while maintaining a sense of relaxation and balance.",
    skills:[{
        name:"Tailwind",
        svg:<RiTailwindCssFill/>
    },
    {
        name:"JavaScript",
        svg:<IoLogoJavascript/>

    },
    {
        name:"CSS",
        svg:<FaCss3Alt/>
    },
    {
        name:"HTML",
        svg:<FaHtml5/>
    }
]},
    {
    title:"Study Notion",
    image:"https://res.cloudinary.com/ddsqjzrow/image/upload/v1727244285/image_5_k1fofr.png",
    desc:"Developed StudyNotion, an EdTech platform with secure user authentication, course browsing, and transactions via Razorpay. Utilized MongoDB, Cloudinary, Redux, and React.js for efficient data management and a responsive user interface.",
    skills:[
        {
            name:"Tailwind",
            svg:<RiTailwindCssFill/>
        },
        {
            name:"React",
            svg:<FaReact/>
        },
        {
            name:"MongoDB",
            svg:<SiMongodb/>
        },
        {
            name:"NodeJs",
            svg:<RiNodejsLine/>
        },
        {
            name:"JavaScript",
            svg:<IoLogoJavascript/>
        }
    ]}
]




const Projects = () => {
  return (
    <div >
    <a href="/"><div className="text-5xl inline-block m-[2rem]"><IoIosUndo/></div></a>
    <div className='text-center max-w-[80%] m-auto  text-projects'>
    <h1 className='font-bold text-3xl md:text-4xl font-rubik '>My Projects</h1>
    <div className="flex-col ">
      {projectsData.map((project, index) => {
          return (
              <div key={index} className={`flex flex-col ${index%2==0?"lg:flex-row":"lg:flex-row-reverse"} gap-[3rem] mt-[5rem] `}>
            <img src={project.image} alt={project.title} className="w-[500px] h-[250px] m-auto md:w-[600px] md:h-[300px] rounded-2xl " />
            <div className='flex flex-col justify-center'>

            <h3 className="font-extrabold  text-2xl mb-[1rem] font-rubik">{project.title}</h3>
            <p className="font-doodle text-xl">{project.desc}</p>
            <div className=" flex flex-row gap-[1rem] p-[1rem]  text-4xl md:text-5xl text-center m-auto ">
              {project.skills.map((skill, index) => (
                  <div key={index} className="w-[50px] h-[50px] md:h-[60px] md:w-[60px] flex justify-center items-center    backdrop-blur-lg border rounded-2xl transition-transform duration-300 hover:scale-110">{skill.svg}</div>
                ))}
            </div>
            </div>
          </div>
        );
    })}
    </div>
    </div>
    </div>
  );
};

export default Projects;
