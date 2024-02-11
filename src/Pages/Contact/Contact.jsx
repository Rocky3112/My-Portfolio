/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { Fade, Zoom } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import contact from '../../../public/contact.json'
// import PartTitle from '../../../components/PartTitle/PartTitle';
import SectionTitle from '../SectionTitle';

const Contact = () => {
    const form = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(`service_ubx0k4e`, `template_tv5gkjj`, form.current, `fwUBPkDRGJGX8491J`)
            .then(function (response) {
                toast.success('thanks for your message');
                e.target.reset();
            }, function (error) {

            });
    }
    return (
        <div id='contactMe' className='mt-20 mb-10'>
            <div className=" min-h-screen ">
                <div>
                    <SectionTitle heading={'Contact Info-'}></SectionTitle>
                    <h3 className='text-2xl mx-20 text-justify'>
                        Let's Connect! Reach out through the Contact Me section to discuss your web development needs, collaborations, or any inquiries. I'm excited to hear from you and explore how we can work together to bring your ideas to life.
                    </h3>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000" className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right" className="  p-5 rounded-xl ">

                        <div className='sm:p-10 md:p-0 lg:p-2 '>
                            <Lottie animationData={contact} loop={true} className='sm:h-[250px] lg:h-[550px] lg:w-[500px] sm:w-[150px]' />
                        </div>
                    </div>
                    <Fade direction='right'>
                        <div  className=" flex-shrink-0 w-[350px]  shadow-xl">
                            <div className=" text-white">
                                <form ref={form} onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input required type="name" name='user_name' placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input required type="email" name='user_email' placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Message</span>
                                        </label>
                                        <textarea required type="text" name='message' rows={5} cols={30} className="textarea textarea-bordered" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type='submit' value='Send' className="btn bg-yellow-500 border-0 hover:bg-green-500"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Contact;