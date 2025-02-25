// Navigation Bar SECTION
const navBar = {
  show: true,
};

const photography = {
  show: true,
  mediaHeading: "Photography",
}

const films = {
  show: true,
  mediaHeading: "Films",
}

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Lucas",
  middleName: "",
  lastName: "Schroeder",
  message: " Passionate about changing the world with film and technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/lucasschroeder",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100009604327268",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/lschroeds/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lucasschroeder/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/lucas.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/lucas.jpg"),
  imageSize: 375,
  message:
    "My name is Lucas Schroeder. I am a senior studying film and computer science at Brown University. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering and film.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "LucasSchroeder", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/lucas.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/lucas.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "C", value: 50 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 },
    { name: "Java", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions or just want to say hi, feel free to email me at",
  email: "lucas_schroeder@brown.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'TechStart Intern',// Here Add Company Name
      companylogo: require('../assets/img/liberty.jpg'),
      date: 'May 2021 – Present',
    },
    {
      role: 'Computer Vision Intern',
      companylogo: require('../assets/img/edlight.png'),
      date: 'May 2020 – Present',
    },
    {
      role: 'Student Journalist',
      companylogo: require('../assets/img/polyu.png'),
      date: 'May 2019 – August 2019',
    },
    {
      role: 'Operations Intern',
      companylogo: require('../assets/img/year-up.jpg'),
      date: 'January 2019 – January 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, photography, films };
