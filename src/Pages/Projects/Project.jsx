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
    </section>
  );
};

export default Project;