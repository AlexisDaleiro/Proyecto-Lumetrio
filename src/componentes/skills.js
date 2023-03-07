import React from "react";
import "../App.css";

export default class Skills extends React.Component {
  render() {
    const skills = [
      { nombre: "HTML5", porcentaje: 60, color: "#E44D26" },
      { nombre: "CSS3", porcentaje: 60, color: "#2965f1" },
      { nombre: "SQL", porcentaje: 50, color:"#FFD700"},
      { nombre: "JavaScript", porcentaje: 50, color: "#f0db4f" },
      { nombre: "React", porcentaje: 50, color: "#61DBFB" },
      { nombre: "Python", porcentaje: 50, color: "#306998" },
      { nombre: "Django", porcentaje: 50, color: "#0C4B33"},
      
    ];

    return (
        <>
        
      <div className="skills-container">
      <h2>Skills</h2>
        <div className="skills">
            
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke={skill.color}
                  strokeWidth="2"
                  strokeDasharray={`${skill.porcentaje}, 100`}
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  {skill.porcentaje}%
                </text>
              </svg>
              <div className="skill-info">
                <h3>{skill.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
}
