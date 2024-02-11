/* eslint-disable react/no-unescaped-entities */
import ReactTyped from 'react-typed';
import bannerPhoto from '../../assets/bannerImg.jpg';
import { Fade } from 'react-awesome-reveal';


const Banner = () => {
    const handleDownloadCV = () => {
        window.open('https://drive.google.com/file/d/1ehCq_SijTpaC-8xH6OfBjzyGD1psecv2/view?usp=sharing');
    }
    return (
        <div className=''>
            <div data-aos="zoom-in" className="hero h-[85vh] mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5 mt-16">
                    <Fade direction='left'>
                    <img src={bannerPhoto} className="w-sm md:max-w-md rounded-lg shadow-slate-300 h-[500px]" alt='' />
                    </Fade>
                    <div className='w-xs md:max-w-3xl ' >
                        <p className="text-xl font-semibold">Hello I'm</p>
                        <h1 className="text-2xl md:text-5xl font-bold py-1">Alamgir Hossain Rocky</h1>
                        <ReactTyped
                            className="text-xl md:text-3xl text-red-600 font-semibold"
                            strings={[
                                "Junior Web Developer",
                                "Frontend Developer",
                                "Web Developer",
                                "Full-Stack Web Developer",
                
                            ]}
                            typeSpeed={80}
                            backSpeed={60}
                            loop
                        />
                        <p className="text-md py-4 md:pr-8 text-justify">As a passionate junior web developer, I constantly seek to expand my skills and embrace new technologies. I find joy in taking on challenges and crafting full-stack websites that deliver exceptional user experiences. My commitment to quality drives me to deliver impactful solutions. Eager to grow and contribute to meaningful projects that make a positive difference. Let's connect and collaborate to create innovative web experiences together!</p>
                        <div className='flex gap-8'>
                            <button onClick={handleDownloadCV} className="btn btn-accent">Download Resume</button>
                            <button
                                onClick={() => {
                                    window.open('')
                                }}
                                className="underline bg-slate-700 rounded-md text-accent p-3">Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;