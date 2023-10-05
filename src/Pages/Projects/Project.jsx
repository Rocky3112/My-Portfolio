import { Bounce } from "react-awesome-reveal";

const Project = () => {
  return (
    <section className="bg-gray-100 py-16" id="project">
      <div className="container mx-auto px-2">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
        <Bounce>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <div className="carousel w-full">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/ZLb0nZv/1.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide4" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/NTbwKBg/2.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/wLm4Jxg/3.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide4" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sakura Kitchen</h2>
                <p>
                  • Implemented a responsive website using Tailwind CSS,
                  Firebase, and React <br /> • Designed and developed a
                  user-friendly Login page with multiple authentication options,
                  including Email/Password, Google Sign-in, and GitHub Sign-in.{" "}
                  <br /> • The View Profile section on the home page will only
                  work if the user is logged in. If the user is not logged in,
                  clicking on the section will redirect them to the login page.
                </p>
                <div className="mt-3 flex flex-col md:flex-row gap-1">
                  <a
                    href="https://chef-recipe-f656d.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Live Link
                      </button>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EftekharAlam2/sakura-kitchen-client-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Github-Client-Side
                      </button>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EftekharAlam2/sakura-kitchen-server-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Github-Server-Side
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <div className="carousel w-full">
                  <div id="slide5" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/t293K0B/4.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide8" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide6" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide6" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/8gpT9ZD/5.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide5" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide7" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide7" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/CWKkWrj/6.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide6" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide8" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">GameToys</h2>
                <p>
                  • Created a dynamic navbar displaying the website logo, name,
                  and navigation options based on user login status, improving
                  navigation and user experience. <br />• Developed a private
                  route for logged-in users to manage their added toys, allowing
                  updates and deletion of toy information, providing a seamless
                  toy management experience. <br />• Implemented a public route
                  to display all toys with a search system based on toy names
                  and pagination for optimal results, facilitating easy
                  exploration and finding desired toys.
                </p>
                <div className="mt-3 flex flex-col md:flex-row gap-1">
                  <a
                    href="https://video-gaming-toys.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Live Link
                      </button>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EftekharAlam2/GameToys-client-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Github-Client-Side
                      </button>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EftekharAlam2/GameToys-server-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Github-Server-Side
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <div className="carousel w-full">
                  <div id="slide9" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/s5pkHzd/7.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide12" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide10" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide10" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/LrbBMyq/9.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide9" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide11" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide11" className="carousel-item relative w-full">
                    <img
                      src="https://i.ibb.co/Fhqjbcs/8.png"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide10" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide12" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">SportCamp</h2>
                <p>
                  • Navbar and footer present on all pages except the 404 page.
                  Stylish and meaningful footer with website logo/name,
                  copyright, contact information, and address. <br />
                  • Conditional display of profile picture and Dashboard on the
                  navbar based on user sign-in status. Error handling for
                  password requirements on the registration page. <br />• Admin
                  dashboard accessible only to admins. Manage Users page in the
                  admin dashboard displaying user information and buttons to
                  make users instructors or admins.
                </p>
                <div className="mt-3 flex flex-col md:flex-row gap-1">
                  <a
                    href="https://practice-all-39805.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Live Link
                      </button>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EftekharAlam2/SportCamp-Client-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Github-Client-Side
                      </button>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EftekharAlam2/SportCamp-Server-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                      <button className="btn btn-outline btn-accent btn-sm">
                        Github-Server-Side
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </Bounce>
      </div>
              
{/*               
      <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className=' flex-row-reverse sm:flex  items-center gap-10 md:gap-20 my-20 '>
                    <div className='w-full mx-auto' >
                        <div className='project-site mx-auto'>
                        <Carousel showThumbs={false} autoPlay={true} interval={3000}>
                                <div>
                                    <img className="w-full h-[500px]" src={sports_camp} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={chef_house} alt="" />
                                </div>
                                <div>
                                    <img className="w-full h-[500px]" src={chef_house} alt="" />
                                </div>
                               
                            </Carousel>
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase '>Job Hunts</h5>
                            <p className="text-2xl">.</p>
                            <p className="text-justify text-xl" >
                                Job Hunts is a simple job web application built with React. This project was created as a personal project to improve my React skills and learn more about working with APIs.

                                ##Features 1.Job openings based on type either full time or part time 2.View job details such as company, location, job title, and job description 3.Saved applied job in Applied job section 4.Responsive design for mobile and desktop 5.Statistics section for rechart based on marks 6.blogs

                                ##Technologies Used HTMl CSS FrameWork Tailwind React Material-UI
                            </p>
                            <div className='flex items-center justify-around gap-4 py-5 text-center'>
                                <div className="flex items-center justify-center flex-col text-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://astounding-kitten-fe1da6.netlify.app">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <p className='underline-offset-2'>Live Link</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer text-center bg-slate-400 p-3 rounded-xl">
                                    <a href=" https://github.com/Rocky3112/Career-Hub">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Client Code</p>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div> */}
  {/* <div data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='md:flex items-center gap-20 '>
                    <div className='w-full mx-auto' >
                        <div className='project-site mx-auto'>
                            <img className="w-full h-[500px]" src={double_digit} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-full mt-10 md:mt-0'>
                        <div className='text-center' >
                            <h5 className='font-Gilroy font-extrabold text-2xl uppercase'>Double Digit Restaurant</h5>
                            <p className=" text-xl">
                            Discover a diverse menu featuring appetizers to desserts, complemented by exclusive branded merchandise in our shop. Seamlessly transition between user and admin roles via the dashboard, which also allows admin privileges for menu management and overseeing user accounts. Enjoy an enhanced dining experience with the favorite button for quick access to marked menu items. Complete secure payments with our integrated system, ensuring safe transactions.
                            </p>
                            <div className='flex items-center justify-around gap-4 py-5 text-center'>
                                <div className="flex flex-col text-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://double-digit-44d82.web.app/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <p className='underline-offset-2'>Live Link</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer text-center bg-slate-400 p-3 rounded-xl">
                                    <a href="https://github.com/Rocky3112/Double_Digit_Client">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Client Code</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center hover:underline  cursor-pointer bg-slate-400 p-3 rounded-xl">
                                    <a href="https://github.com/Rocky3112/Double_Digit_Server">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        <p className='underline-offset-2'>Server Code</p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
    </section>
  );
};

export default Project;