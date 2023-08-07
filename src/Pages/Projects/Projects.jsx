import { FaGithub } from "react-icons/fa";
import "./Projects.css"
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { useEffect } from "react";
import Aos from "aos";

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 500, easing: 'ease' })
    }, [])
    return (
        <div id="projects">
            <h1 data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-center font-bold text-4xl mt-16 text-red-500 p-7 mb-8 ">My Projects</h1>
            <div className='w-full md:w-8/12 mx-auto mt-10 md:mt-20'>
                {/* tastyfood  */}
                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='md:flex items-center gap-20 text-white'>
                    <div className='w-full md:w-1/2 mx-auto' >
                        <div className='project-site mx-auto'>
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase text-pink-700'>TastyFood</h5>
                            <p className="text-xl">TastyFood is a Chef Recipe Hunter Flatform</p>
                            <p className="text-justify text-xl" >
                                TastyFood is a Bengali food Website where you can get to know the chefs behind the delicious dishes.
                                If a user logs in to this website , they will be able to access all the information about recipes from that particular chef otherwise he/she con’t.
                                The photo URL of the user who logs in will be displayed in the navbar. This website Also mobile responsive.
                            </p>
                            <div className="flex gap-5 mt-6">
                                <div className=" lg:ms-28 text-red-500  "><a href="https://github.com/MithilaKhan/Chef-recipe-client"><FaGithub className="text-3xl" /> </a> </div>

                                <div className=" text-red-500  "><a href="https://github.com/MithilaKhan/chef-recipe-server"><FaGithub className="text-3xl" /> </a> </div>

                                <div className=" text-red-500"><a href="https://chef-recipe-hunter-clien-4c59d.web.app/"><BiSolidRightTopArrowCircle className="text-4xl" /> </a> </div>


                            </div>

                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className=' flex-row-reverse sm:flex  items-center gap-10 md:gap-20 mt-20 text-white'>
                    <div className='w-full md:w-1/2 mx-auto' >
                        <div className='project-site2 mx-auto'>
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase text-pink-700'>ToyWorld</h5>
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

                <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='md:flex items-center lg:mt-10 gap-20 text-white'>
                    <div className='w-full md:w-1/2 mx-auto' >
                        <div className='project-site3 mx-auto'>
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase text-pink-700'>Fashion House</h5>
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