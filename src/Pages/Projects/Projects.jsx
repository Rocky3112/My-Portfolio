import { FaGithub } from "react-icons/fa";
// import "./Projects.css"
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { useEffect } from "react";
import Aos from "aos";
import chef_house from '../../assets/chef-house.jpg'
import toy_world from '../../assets/toy-world.jpg'
import career_hub from '../../assets/career-hub.jpg'

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 500, easing: 'ease' })
    }, [])
    return (
        <div id="projects">
            <h1 data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-center font-bold text-4xl mt-16 text-red-500 p-7 mb-8 ">My Projects</h1>
            <div className='w-full md:w-8/12 mx-auto mt-10 md:mt-20'>
                {/* tastyfood  */}
                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='md:flex items-center gap-20 '>
                    <div className='w-full mx-auto' >
                        <div className='project-site mx-auto'>
                            <img className="w-full" src={chef_house} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase'>TastyFood</h5>
                            <p className="text-xl">TastyFood is a Chef Recipe Hunter Flatform</p>
                            <p className="text-justify text-xl" >
                                TastyFood is a Bengali food Website where you can get to know the chefs behind the delicious dishes.
                                If a user logs in to this website , they will be able to access all the information about recipes from that particular chef otherwise he/she con’t.
                                The photo URL of the user who logs in will be displayed in the navbar. This website Also mobile responsive.
                            </p>
                            <div className='flex items-center justify-around gap-4 py-5'>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <p className='underline-offset-2'>Live Link</p>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    <p className='underline-offset-2'>Client Code</p>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    <p className='underline-offset-2'>Server Code</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className=' flex-row-reverse sm:flex  items-center gap-10 md:gap-20 mt-20 '>
                    <div className='w-full mx-auto' >
                        <div className='project-site mx-auto'>
                            <img className="w-full" src={career_hub} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase '>ToyWorld</h5>
                            <p className="text-xl">ToyWorld is a  Toy website for kids .</p>
                            <p className="text-justify text-xl" >
                                If you are logged in, you will be able to add a toy and view my toy page and details page.
                                If all those data will be added to add toy page, those data will be stored in MongoDB.
                                The photo URL of the user who logs in will be displayed in the navbar. This website Also mobile responsive.
                            </p>
                            <div className="flex gap-5 mt-6 sm:mb-7">
                                <div className=" lg:ms-28 text-red-500  "><a href="https://github.com/MithilaKhan/toyWorld"><FaGithub className="text-3xl" /> </a> </div>

                                <div className=" text-red-500  "><a href="https://github.com/MithilaKhan/toyWorld-server"><FaGithub className="text-3xl" /> </a> </div>

                                <div className=" text-red-500"><a href="https://toy-marketplace-28a89.web.app/"><BiSolidRightTopArrowCircle className="text-4xl" /> </a> </div>


                            </div>

                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='md:flex items-center lg:mt-10 gap-20'>
                    <div className='w-full mx-auto' >
                        <div className='project-site mx-auto'>
                            <img className="w-full" src={toy_world} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase '>Fashion House</h5>
                            <p className="text-xl">Fashion House is an online platform for fashion </p>
                            <p className="text-justify text-xl" >
                                related courses. there are three categories of dashboards: admin, instructor and student. If a user logs in, they will be able to see it.
                                The instructor will create a class, the admin will approve/deny the class, and students can enroll in the classes by making payment.All data store in MongoDB
                                The photo URL of the user who logs in will be displayed in the navbar. This website Also mobile responsive.
                            </p>
                            <div className="flex gap-5 mt-6">
                                <div className=" lg:ms-28 text-red-500  "><a href="https://github.com/MithilaKhan/Fashion_house_client"><FaGithub className="text-3xl" /> </a> </div>

                                <div className=" text-red-500  "><a href="https://github.com/MithilaKhan/fashion_house_server"><FaGithub className="text-3xl" /> </a> </div>

                                <div className=" text-red-500"><a href="https://fashion-design-5f75b.web.app/"><BiSolidRightTopArrowCircle className="text-4xl" /> </a> </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;