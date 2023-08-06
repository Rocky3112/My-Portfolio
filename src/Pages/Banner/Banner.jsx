/* eslint-disable react/no-unescaped-entities */
import ReactTyped from 'react-typed';
import bannerPhoto from '../../assets/bannerImg.jpg';


const Banner = () => {
    const handleDownloadCV = () => {
        window.open('https://drive.google.com/file/d/17DQmFH0WH_zj2VxiLZ6ma6eqCywf4-iR/view?usp=sharing');
    }
    return (
        <div className=''>
            <div data-aos="zoom-in" className="hero h-[85vh] mb-64">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <img src={bannerPhoto} className="w-sm md:max-w-md rounded-lg shadow-slate-300 h-[500px]" alt='' />
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
                        <p className="text-md py-4 md:pr-8">As a passionate junior web developer, I constantly seek to expand my skills and embrace new technologies. I find joy in taking on challenges and crafting full-stack websites that deliver exceptional user experiences. My commitment to quality drives me to deliver impactful solutions. Eager to grow and contribute to meaningful projects that make a positive difference. Let's connect and collaborate to create innovative web experiences together!</p>
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