/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import chef_house from '../../assets/chef-house.jpg'
import chef_house1 from '../../assets/chef-house1.jpg'
import chef_house2 from '../../assets/chef-house2.jpg'
import toy_world from '../../assets/toy-world.jpg'
import toy_world1 from '../../assets/toy-world1.jpg'
import toy_world2 from '../../assets/toy-world2.jpg'
import sports_camp1 from '../../assets/sports-camp1.jpg'
import sports_camp2 from '../../assets/sports-camp2.jpg'
import sports_camp3 from '../../assets/sports-camp3.jpg'
import sports_camp4 from '../../assets/sports-camp4.jpg'
import Aos from "aos";
import 'aos/dist/aos.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 3000, easing: 'ease' })
    }, [])

    return (
        <div id="projects" className="mx-4">
            <h1 data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-center font-bold text-4xl mt-16 text-red-500 p-7 mb-8 ">My Projects</h1>
            <div className='w-full mx-auto mt-10 md:mt-20'>
                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='md:flex items-center gap-20 my-20'>
                    <div className='w-full mx-auto' >
                        <div className="project-site mx-auto">
                            <Carousel showThumbs={false} autoPlay={true} interval={2000}>
                                <div>
                                    <img className="w-full h-[500px]" src={sports_camp1} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={sports_camp4} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={sports_camp3} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={sports_camp2} alt="" />
                                </div>

                            </Carousel>
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-justify' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase'>sports camp</h5>
                            <p className="text-xl"> Sports Camp Learning Platform</p>
                            <p className=" text-xl">
                                User registration and login are facilitated through Firebase, ensuring secure access for personalized camp tracking. A personalized dashboard offers students control over profiles, enrolled classes, and activities. Admin control is provided through a dashboard managing users, classes, and student data efficiently. The frontend employs React.js, React Router, and modern technologies, complemented by CSS, Tailwind CSS, and daisyUI for visual appeal. Firebase Authentication ensures user security, while mongoDB safely stores camp and user data.
                            </p>
                            <div className='flex items-center justify-around gap-4 py-5 text-center'>
                                <div className="flex flex-col text-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://summer-camp-1841c.web.app/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <p className='underline-offset-2'>Live Link</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer text-center bg-slate-400 p-3 rounded-xl">
                                    <a href=" https://github.com/Rocky3112/Sports_Camp_Client">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Client Code</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://github.com/Rocky3112/Sports_Camp_Server">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Server Code</p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='md:flex items-center lg:mt-10 gap-20'>
                    <div className='w-full mx-auto' >
                        <div className='project-site mx-auto'>
                            <Carousel showThumbs={false} autoPlay={true} interval={2000}>
                                <div>
                                    <img className="w-full h-[500px]" src={toy_world} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={toy_world1} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={toy_world2} alt="" />
                                </div>

                            </Carousel>
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase '>Toy World</h5>

                            <p className="text-justify text-xl" >
                                created banner section , gallery section , shp by band and customer reviews in home page .
                                creating 3 sub category to using react tab . also fetch the data from server side . And this data come from database(mongoDB)
                                in all toy page at first i created a table then keep data on this table . also create details button . if anyone click this button it reached you another page .
                                add a toy page you add information .and my toy page you see the your toys information , update those data also delete data if you want .if you don't login you con't see and use these page .
                            </p>
                            <div className='flex items-center justify-around gap-4 py-5 text-center'>
                                <div className="flex flex-col text-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://toy-marketplace-3756a.web.app/toyform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <p className='underline-offset-2'>Live Link</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer text-center bg-slate-400 p-3 rounded-xl">
                                    <a href="https://github.com/Rocky3112/toy-marketplace-client-side">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Client Code</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://github.com/Rocky3112/toy-marketplace-server-side">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Server Code</p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='md:flex items-center gap-20 '>
                    <div className='w-full mx-auto' >
                        <div className='project-site mx-auto'>
                            <Carousel showThumbs={false} autoPlay={true} interval={2000}>
                                <div>
                                    <img className="w-full h-[500px]" src={chef_house} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={chef_house1} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={chef_house2} alt="" />
                                </div>

                            </Carousel>
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-justify' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase'>Chef Recipe</h5>
                            <p className="text-xl"> Chef Recipe Hunter Flatform</p>
                            <p className=" text-xl">
                                * The Chef Recipe Garden is a collection of Chef cookbooks and recipes maintained by the Chef community.
                                <br />
                                * It is organized by different categories such as databases, web servers, and monitoring tools, making it easy to find the right cookbook or recipe for your needs. <br />

                                * Each cookbook and recipe has includes instructions on how to use it, along with any dependencies and prerequisites. <br />

                                * you can see the the recipe details for a specific chef after click the view recipes button.
                            </p>
                            <div className='flex items-center justify-around gap-4 py-5 text-center'>
                                <div className="flex flex-col text-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://celebrated-trifle-29138f.netlify.app/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <p className='underline-offset-2'>Live Link</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer text-center bg-slate-400 p-3 rounded-xl">
                                    <a href="https://github.com/Rocky3112/Chef-Recipe-Hunting">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Client Code</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://github.com/Rocky3112/Chef-Recipe-Hunting-Server">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Server Code</p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;