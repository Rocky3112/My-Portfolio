import SectionTitle from "../SectionTitle";


const MySkills = () => {
    return (
        <div className='my-14'>
            <SectionTitle heading={'My Skills'}></SectionTitle>
            <div className='text-left flex flex-col md:flex-row justify-center items-center md:gap-20'>
                <div data-aos="fade-left">
                    <div>
                        <label className='block font-bold'>HTML</label>
                        <progress className="progress progress-success h-3 w-56" value="92" max="100"></progress>
                    </div>
                    <div>
                        <label className='block font-bold'>CSS</label>
                        <progress className="progress progress-success h-3 w-56" value="90" max="100"></progress>
                    </div>
                    <div>
                        <label className='block font-bold'>JavaScript</label>
                        <progress className="progress progress-success h-3 w-56" value="70" max="100"></progress>
                    </div>
                    <div>
                        <label className='block font-bold'>React</label>
                        <progress className="progress progress-success h-3 w-56" value="65" max="100"></progress>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div>
                        <label className='block font-bold'>Firebase</label>
                        <progress className="progress progress-success h-3 w-56" value="60" max="100"></progress>
                    </div>
                    <div>
                        <span className='block font-bold'>Node.js</span>
                        <progress className="progress progress-success h-3 w-56" value="30" max="100"></progress>
                    </div>
                    <div>
                        <label className='block font-bold'>Express.js</label>
                        <progress className="progress progress-success h-3 w-56" value="25" max="100"></progress>
                    </div>
                    <div>
                        <label className='block font-bold'>Mongodb</label>
                        <progress className="progress progress-success h-3 w-56" value="45" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;