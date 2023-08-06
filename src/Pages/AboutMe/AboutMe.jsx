
import { Fade } from 'react-awesome-reveal';
import aboutMeImage from '../../assets/bannerImg.jpg';
import SectionTitle from '../SectionTitle';

const AboutMe = () => {

    return (
        <div
            style={{ overflow: 'hidden' }}
            id='aboutMe' className='my-12'>
            <SectionTitle heading={'About me'}></SectionTitle>
            <div data-aos="zoom-out-left" className="hero">
                <div className="hero-content flex-col lg:flex-row gap-6 md:gap-20 mx-9">
                   <Fade duration={2000}>
                   <div>
                        <img src={aboutMeImage} className="w-md md:max-w-sm rounded-full h-80" />
                    </div>
                   </Fade>
                    <Fade direction='right'>
                    <div className='w-xs md:max-w-4xl'>
                        <h1 className="text-4xl font-bold">Why You Are Hire Me</h1>
                        <p className="py-6 md:pr-8">My name is Md Borhan Uddin Ashik. I am a junior web developer.My sole purpose is to create new websites all the time. Always try to work with advanced technology and with
                            total concentration to be user-friendly. But I am always ready to take on a challenge so that I can learn
                            something new.This year I have completed Diploma in Computer Technology from Rajshahi Polytechnic Institute.</p>
                        <a className='btn btn-accent' href="tel:+8801737509339">Contact Me</a>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;