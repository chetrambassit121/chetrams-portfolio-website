import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
    href: "https://www.linkedin.com/in/chetram-bassit-4335a4202/?skipRedirect=true"
  },
  {
    id: 2,
    icon: RiGithubFill,
    href: "https://github.com/chetrambassit121"
  },
];

export const aboutItems = [
  {
    id: 1,
    label: "Python",
  },
  {
    id: 2,
    label: "Django WEB & REST Framework",
  },
  {
    id: 3,
    label: "Unit-Testing",
  },
  {
    id: 4,
    label: "JavaScript",
  },
  {
    id: 5,
    label: "React, React-Native",
  },
  {
    id: 6,
    label: "Bootstrap, HTML, CSS",
  },
  {
    id: 7,
    label: "SQL",
  },
  {
    id: 8,
    label: "Power-BI",
  },
   {
    id: 9,
    label: "Google Analytics",
  },
  {
    id: 10,
    label: "Docker",
  },
  {
    id: 11,
    label: "Git, Github",
  },
  {
    id: 12,
    label: "Agile, Scrum",
  },
  {
    id: 13,
    label: "PostgreSQL",
  },
  {
    id: 14,
    label: "Heroku, AWS",
  },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experience",
    list: [
      {
        label: "Software Engineer (QA)",
        role: "Global Logic",
        href: "https://www.linkedin.com/company/globallogic/posts/?feedView=all",
        time: "April 2024 -> March 2026",
        duration: "1 year, 11 months",
        experience: 
        `
        • Ensuring the highest quality final product for Google via Global Logic by reviewing their LLM cases containing Python API's curated by Global Logic engineers.
        • Overall improvements of Google’s model via Global Logic serving over 10 million users.
        • Increased quality and helpfulness of the models responses by 4.23%.
        • Decreased unnecessary usage of API calls needed to answer user queries by 5%.
        • Improvement of the models factuality by 22%.
        `,

      },
      {
        label: "Full Stack Developer",
        role: "Digitus Labs",
        href: "https://www.linkedin.com/company/digitus-labs/posts/?feedView=all",
        time: "June 2022 -> Jan 2024",
        duration: "1 year, 7 months",
        experience: 
        `
        • Primary developer writing approximately 80% of code for startup apps using Django REST, JavaScript, and Bootstrap (coliseum-gym.herokuapp.com/).
        • Testing code with Unit-Test/PyTest, averaging 90% code coverage. 
        • Developing features with Django REST, React, and React-Native such as user profiles, social media, E-Commerce, custom admin panels, and data visualization sections for apps containing 100,000+ users, leading to an increase in user engagement and client revenue.  
        • Growing repeat visits by 15%, measured using Google Analytics. 
        • Debugging leading to a 20% decrease in the bounce rate of users.
        `,
      },
      {
        label: "Jr Full Stack Developer",
        role: "Fivver",
        href: "https://www.fiverr.com/?source=top_nav",
        time: "Sep 2021 -> March 2022",
        duration: "7 months",
        experience: 
        `
        • Networking on the Fiverr freelance platform to connect with clients and developers. 
        • Contributing to server-side and client-side coding using Python and JavaScript. 
        `,

      },
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Mechanical Engineering Related Technologies",
        role: "CUNY The New York City\nCollege of Technology",
        href: "https://www.citytech.cuny.edu/",
        time: "2012 -> 2016",
      },
      {
        label: "Architecture (AutoCAD)",
        role: "High School for Construction Trades\nEngineering and Architecture",
        href: "https://www.hsforctea.org/",
        time: "2008 -> 2012",
      },
    ],
  },
];

export const EducationItems = [
  {
    id: 1,
    title: "Education",
    list: [
      {
        label: "Mechanical Engineering Related Technologies",
        role: "CUNY The New York City\nCollege of Technology",
        href: "https://www.citytech.cuny.edu/",
        time: "2012-2016",
      },
      {
        label: "Architecture (AutoCAD)",
        role: "High School for Construction Trades\nEngineering and Architecture",
        href: "https://www.hsforctea.org/",
        time: "2008-2012",
      },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "",
    src: "/images/portfolio-7.png",
    href: "https://coliseum-gym.herokuapp.com/",
    text: "Modern Fitness, User Based, Social Media Application.\nMade with Django and Bootstrap",
  },
  // {
  //   id: 2,
  //   title: "Porfolio 2",
  //   src: "/images/portfolio-2.png",
  //   href: "https://coliseum-gym.herokuapp.com/",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  // },
  // {
  //   id: 3,
  //   title: "Porfolio 3",
  //   src: "/images/portfolio-3.png",
  //   href: "https://coliseum-gym.herokuapp.com/",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  // },
  // {
  //   id: 4,
  //   title: "Porfolio 4",
  //   src: "/images/portfolio-4.png",
  //   href: "https://coliseum-gym.herokuapp.com/",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  // },
];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "chetrambassit121@gmail.com",
  },
  {
    id: 2,
    label: "Location:",
    link: "New York, NYC",
  },
];
