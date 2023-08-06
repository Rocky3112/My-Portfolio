import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MySkills from "../MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Contact></Contact>
        </div>
    );
};

export default Home;