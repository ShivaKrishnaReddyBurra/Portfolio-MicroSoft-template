/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am currently pursuing a B.Tech at Kakatiya Institute of Technology and Science, Warangal, where I am a second-year student in the Computer Science Department. My interest in web development has driven me to gain proficiency in a range of technologies. On the frontend, I have learned HTML, CSS, JavaScript, and React. On the backend, I have learned Node.js, Express.js, and Embedded JavaScript (EJS). Additionally, I have developed skills in working with REST APIs and PostgreSQL, which round out my abilities as a Full Stack Developer.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "REST APIs",
  "C Language",
  "Python",
  "Java",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "To validate and enhance my knowledge, I have obtained various certifications from respected platforms. I earned certificates in C Language and Java from NPTEL, and in JavaScript, Python, and SQL from HackerRank. I have also completed courses on Udemy to further my understanding of web development.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
