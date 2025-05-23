// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import laravellogo from './assets/tech_logo/laravel.png';
import phplogo from './assets/tech_logo/phplogo.png';

// Experience Section Logo's
import digitalstartupsLogo from './assets/company_logo/digitalstartups.png';

// Education Section Logo's
import bbitlogo from './assets/education_logo/bbitlogo.png';
import bseblogo from './assets/education_logo/bseblogo.jpg';

// Project Section Logo's
import portfolioLogo from './assets/work_logo/portfolio.png';
import royalpropertiesLogo from './assets/work_logo/royalproperties.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      // { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'PHP', logo: phplogo },
      { name: 'LARAVEL', logo: laravellogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: digitalstartupsLogo,
      role: "Software Developer",
      company: "Digital Startups",
      date: "August 2024 - March 2024",
      desc: "Developed dynamic and scalable web applications using the Laravel Framework, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Laravel",
        "Tailwind CSS",
        "MySQL",
      ],
    },
    
    
  ];
  
  export const education = [
    {
      id: 0,
      img: bbitlogo,
      school: "Budge Budge Institute of Technology, Kolkata",
      date: "Aug 2021 - June 2025",
      grade: "7.5 CGPA",
      desc: "I am currently pursuing my Bachelor's degree (B.Tech) in Computer Science and Engineering from Budge Budge Institute of Technology (BBIT), Kolkata, and I am expected to graduate in June 2025. Throughout my academic journey at BBIT, I have built a strong foundation in core computer science subjects such as Programming, Data Structures, Algorithms, Operating Systems, Database Management Systems, Web Development, and Computer Networks. I actively participate in workshops, coding events, and technical projects, which continue to strengthen my practical skills and problem-solving abilities. My experience at BBIT is helping me shape my technical expertise and prepare for a successful professional career.",
      degree: "Bachelor of Technology - B.Tech",
    },
    
    {
      id: 2,
      img: bseblogo,
      school: "Mahanth Tapeshwar Goshwami S. S. School Lohri, Chapra",
      date: "Apr 2018 - March 2019",
      grade: "67%",
      desc: "I completed my class 12 education from Mahanth Tapeshwar Goshwami S. S. School, Under BSEB Board. where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Secondary Higher Education - PCM ",
    },
    {
      id: 3,
      img: bseblogo,
      school: "Aadarsh High School, Kohra, Saran",
      date: "Apr 2016 - March 2017",
      grade: "68.8%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Mathematics.",
      degree: "CBSE(X), Science with Mathematics",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and experiences. Built using React.js, it features a responsive design and smooth animations to enhance user experience. it also includes a contact form for easy communication. And it is hosted on Vercel.",
      image: portfolioLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS","Tailwind CSS"],
      github: "https://github.com/guddu00/Portfolio-website.git",
      webapp: "https://portfolio-website-guddu00s-projects.vercel.app/",
    },
    {
      id: 1,
      title: "Royal Properties",
      description:
        "RoyalProperties is a user-friendly real estate website built using HTML, CSS, and JavaScript. It helps users easily browse, buy, sell, and rent properties through a clean and modern interface. The platform offers a wide range of property listings with detailed descriptions, images, and pricing. With advanced search and filter options, users can quickly find their ideal homes, apartments, or commercial spaces. RoyalProperties focuses on delivering a seamless experience with features like property highlights, easy navigation, and contact options. It serves as a reliable bridge between property owners, agents, and potential buyers or tenants, ensuring smooth real estate transactions.",
      image: royalpropertiesLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/guddu00/royalproperties.git",
      webapp: "https://trial-beta-one.vercel.app/",
    },
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  