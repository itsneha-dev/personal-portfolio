import cZentrixLogo from "../assets/c-zentrixLogo.jpg"
import omSoftLogo from "../assets/omSoftLogo.jpg"
import welKinLogo from "../assets/welKinLogo.jpg"
import davim from "../assets/davim.jpg"
import ignou from "../assets/ignou.jpg"
import agentDesktop from "../assets/agent-desktop.jpg"
import swmSystem from "../assets/swm-system.jpg"
import adminPanel from "../assets/admin-panel.jpg"
import web1 from "../assets/web-1.jpg"
import web2 from "../assets/web-2.jpg"
import web3 from "../assets/web-3.jpg"

export const Bio = {
  name: "Neha Rani",
  roles: ["Front-End Developer", "React.Js Developer", "Web Developer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  resume:
    "https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view?usp=drive_link",
};

export const skills = [
  {
    title: "Languages & Core",
    skills: [
      { name: "JavaScript (ES6+)", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Responsive Design", image: "https://www.svgrepo.com/show/166179/responsive-design-symbol.svg" },
      { name: "Cross-Browser Compatibility", image: "https://img.icons8.com/color/48/browser-window.png" }
    ]
  },
  {
    title: "Frameworks & State Management",
    skills: [
      { name: "React.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Zustand", image: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg" },
      { name: "Context API", image: "https://www.svgrepo.com/show/418488/context-data-details.svg" },
      { name: "Custom Hooks", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "i18next", image: "https://simpleicons.org/icons/i18next.svg" }
    ]
  },
  {
    title: "UI Libraries & CMS",
    skills: [
      { name: "MUI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "Chakra UI", image: "https://img.icons8.com/color/48/chakra-ui.png" },
      { name: "ShadCN", image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
      { name: "Tailwind CSS", image: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      { name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "Joomla", image: "https://www.joomla.org/templates/joomla/images/apple-touch-icon-180x180.png" }
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "RESTful APIs", image: "https://img.icons8.com/color/48/api-settings.png" },
      { name: "WebSocket", image: "https://www.svgrepo.com/show/354553/websocket.svg" },
      { name: "WebRTC", image: "https://worldvectorlogo.com/logos/webrtc.svg" },
      { name: "Component Architecture", image: "https://img.icons8.com/ios/50/module.png" }
    ]
  },
  {
    title: "Backend & Dev Tools",
    skills: [
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Webpack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
      { name: "Babel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" },
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
    ]
  },
  {
    title: "Cloud & Utilities",
    skills: [
      { name: "AWS", image: "https://static.cdnlogo.com/logos/a/19/aws.svg" },
      { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Photoshop", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "Canva", image: "https://img.icons8.com/color/48/canva.png" },
      { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Windows", image: "https://img.icons8.com/color/48/windows-10.png" }
    ]
  }
];

export const experiences = [
  {
    id: 0,
    img: cZentrixLogo,
    role: "Jr. Web Developer",
    company: "C-Zentrix",
    date: "April 2023 – Present",
    desc: `Engineered high-performance React.js applications with modern JS frameworks, optimizing performance through code-splitting and lazy loading. Deployed apps on AWS with CI/CD and built reusable UI components to accelerate development.`,
    skills: [
      "ReactJS",
      "Redux",
      "Node.js",
      "Context API",
      "REST API",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: welKinLogo,
    role: "Website Designer",
    company: "Welkin Ring Digital Solutions",
    date: "June 2022 – March 2023",
    desc: `Delivered 15+ responsive websites using HTML5, CSS3, JavaScript, and WordPress. Handled full-stack delivery including UI/UX, hosting, DNS setup, and client consultations with a 95% satisfaction rate.`,
    skills: [
      "WordPress",
      "Custom Websites",
      "HTML",
      "CSS",
      "JavaScript",
      "cPanel",
      "Photoshop",
      "Canva",
    ],
  },
  {
    id: 2,
    img: omSoftLogo,
    role: "WordPress Developer",
    company: "Om Soft Solutions",
    date: "July 2021 – July 2022",
    desc: `Developed custom WordPress themes and plugins for 20+ projects, boosting UX and performance. Integrated SEO best practices and Google Analytics, and enhanced security to reduce vulnerabilities by 40%.`,
    skills: [
      "HTML5",
      "WordPress",
      "SEO",
      "Bootstrap",
      "CSS",
      "Google Analytics",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: davim,
    college: "DAV Institute of Management, MDU",
    date: "July 2023 - Present",
    grade: "",
    desc: "Currently pursuing my Master's degree in Computer Applications at DAVIM, affiliated with MDU, focusing on software development, system design, and advanced computing technologies.",
    degree: "Master of Computer Applications (MCA)",
  },
  {
    id: 1,
    img: ignou,
    college: "Indira Gandhi National Open University (IGNOU)",
    date: "July 2019 - December 2022",
    grade: "68.8%",
    desc: "Completed my Bachelor's degree in Computer Applications from IGNOU, where I built a strong foundation in programming, data structures, and web development.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
];


export const projects = [
  {
    id: 0,
    title: "Agent Desktop Interface",
    description: "WebRTC-based Agent UI with SSO, CRM integration, localization, Redux & MUI for real-time calls.",
    image: agentDesktop,
    tags: ["React Js", "WebRTC", "REST API", "OKTA", "AWS", "WebSocket", "MUI UI Framework", "i18next", "Redux"],
    category: "web-app",
    webapp: "https://czobd.c-zentrixcloud.com/czagent",
  },
  {
    id: 1,
    title: "Website Admin Panel",
    description: "Full-featured admin panel with blogs, lead tracking, RBAC using Node.js, MongoDB & React.",
    image: adminPanel,
    tags: ["React JS", "Node", "AWS", "BootsTrap", "MongoDB", "Context API", "Express.js"],
    category: "web-app",
    webapp: "https://cp.stg.c-zentrix.com/",
  },
  {
    id: 3,
    title: "Solid Waste Management System",
    description: "OTP-based complaint system with role access for public/admin using Zustand & Tailwind CSS.",
    image: swmSystem,
    tags: ["React", "Zustand", "Rest API", "TailWind Css"],
    category: "web-app",
    webapp: "https://briskode.online/login",
  },
  {
    id: 0,
    title: "Massari Mara Travels",
    description: "Custom HTML/CSS site with engaging visuals & content created using Canva & Photoshop.",
    image: web1,
    tags: ["HTML", "CSS", "JavaScript", "Canva", "PhotoShop"],
    category: "client-site",
    webapp: "https://maasaimaratravels.com/",
  },
  {
    id: 1,
    title: "Apeejay Education",
    description: "Managed & redesigned responsive Joomla websites for schools with improved UI/UX.",
    image: web2,
    tags: ["Joomla", "HTML", "CSS", "Photoshop"],
    category: "client-site",
    webapp: "https://apeejay.edu/",
  },
  {
    id: 2,
    title: "ASG Biochem Private Limited",
    description: "Pharma site with branded design, UI/UX, and professional layout for client showcase.",
    image: web3,
    tags: ["HTML", "Jhoomla", "Photoshop"],
    category: "client-site",
    webapp: "https://asgbiochem.com/",
  },
];



