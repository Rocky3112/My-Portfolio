/* eslint-disable react/no-unescaped-entities */
import ReactTyped from 'react-typed';
import bannerPhoto from '../../assets/bannerImg.jpg';


const Banner = () => {
    const handleDownloadCV = () => {
        window.open('https://drive.google.com/file/d/17DQmFH0WH_zj2VxiLZ6ma6eqCywf4-iR/view?usp=sharing');
    }
    return (
        <div style={{}}>
            <div data-aos="zoom-in" className="hero h-[85vh]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <img src={bannerPhoto} className="w-sm md:max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className='w-xs md:max-w-4xl' >
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
                        <p className="text-md py-4 md:pr-8">I am a junior web developer. I love coding and coding is my passion. I like to constantly get acquainted with new technologies and take on challenges and I find joy in it. Recently I created some fullstack websites that you can find in the projects area.</p>
                        <div className='flex gap-8'>
                            <button onClick={handleDownloadCV} className="btn btn-accent">Download Resume</button>
                            <button
                                onClick={() => {
                                    window.open('https://www.fiverr.com/burhan190629?up_rollout=true')
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