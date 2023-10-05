import { useState } from "react";

import "./skills.css";
const MySkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (skillName) => {
    setHoveredSkill(skillName);
  };

  return (
    <div id="skills" className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-8 mt-4 text-center">My Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "HTML" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("HTML")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/km3vHBm/html5.png"
            alt="HTML Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">HTML</span>
        </div>
        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "CSS" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("CSS")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/R4bV25W/css3.png"
            alt="CSS Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">CSS</span>
        </div>

        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "Tailwind CSS" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("Tailwind CSS")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/v36YY4p/tailwind.png"
            alt="Tailwind CSS Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">Tailwind CSS</span>
        </div>
        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "Bootstrap" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("Bootstrap")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/9rYcF4B/bootstrap.png"
            alt="Bootstrap Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">Bootstrap</span>
        </div>
        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "JavaScript" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("JavaScript")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/BTdwRZg/javascript.png"
            alt="JavaScript Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">JavaScript</span>
        </div>
        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "React" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("React")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/vZmxZxN/react.png"
            alt="React Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">React</span>
        </div>
        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "Firebase" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("Firebase")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/Z6VddKK/firebase.png"
            alt="Firebase Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">Firebase</span>
        </div>
        <div
          className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-center skill-card ${
            hoveredSkill === "MongoDB" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleSkillHover("MongoDB")}
          onMouseLeave={() => handleSkillHover(null)}
        >
          <img
            src="https://i.ibb.co/cbVTDQD/mongodb.png"
            alt="MongoDB Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default MySkills;