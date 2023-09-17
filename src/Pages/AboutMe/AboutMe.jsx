/* eslint-disable react/no-unescaped-entities */

import { Fade } from 'react-awesome-reveal';
import aboutMeImage from '../../assets/bannerImg.jpg';
import SectionTitle from '../SectionTitle';

const AboutMe = () => {

    return (
        <div
            style={{ overflow: 'hidden' }}
            id='aboutMe' className='mt-60 lg:my-16 sm:mt-64'>
            <SectionTitle heading={'About me'}></SectionTitle>
            <div data-aos="zoom-out-left" className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-6 md:gap-20 mx-9">
                   <Fade duration={2000}>
                   <div>
                        <img src={aboutMeImage} className="w-md md:max-w-sm rounded-full h-80" />
                    </div>
                   </Fade>
                    <Fade direction='right'>
                    <div className='w-xs md:max-w-4xl'>
                        <h1 className="text-4xl font-bold">Why You Are Hire Me</h1>
                        <p className="py-6 md:pr-8">I'm Alamgir Hossain Rocky.As a junior web developer, I am dedicated to crafting innovative and user-friendly websites. My passion for technology drives me to stay updated with the latest advancements. I thrive on challenges as they provide opportunities to learn and grow. With a keen eye for detail, I create seamless and intuitive user experiences. I value effective communication and collaboration in team environments. My adaptability allows me to quickly grasp new concepts and technologies. Hiring me means gaining a proactive and enthusiastic team member ready to contribute to your company's success. I am committed to making a positive impact through my work and constantly evolving in the field of web development.</p>
                        <a className='btn btn-accent' href="tel:+8801772893112">Contact Me</a>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;