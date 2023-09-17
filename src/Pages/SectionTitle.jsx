/* eslint-disable react/prop-types */


const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 px-7  lg:my-7 my-5">  
            <p className="text-3xl uppercase font-semibold border-y-2 py-2 ">{heading}</p>
        </div>
    );
};

export default SectionTitle;