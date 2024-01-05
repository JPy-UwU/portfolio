import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  python,
  docker,
  teevibe,
  weather,
  genius,
  learninghub,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Sales Associate",
    company_name: "The Home Depot",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TheHomeDepot.svg",
    iconBg: "#383E56",
    date: "November 2022 - Currently",
    points: [
      "Worked with potential customers to understand their needs and match them with 38+ potential product offerings",
      "Managed an expert knowledge of product inventory to answer customerquestions and direct them to what they were seeking or to an alternative",
      "Managed checkout process for customers and ensured quick payment processes",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TeeVibe",
    description:
      "Web-based platform that allows users to customize a t-shirt with a logo of their choice or ask AI to get a logo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: teevibe,
    source_code_link: "https://github.com/JPy-UwU/TeeVibe",
    page_link: "https://tee-vibe.vercel.app/",
  },
  {
    name: "Genius",
    description:
    "A SaaS website that works around OpenAI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: genius,
    source_code_link: "https://github.com/JPy-UwU/genius",
    page_link: "https://genius-one-pearl.vercel.app/",
  },
  {
    name: "Learning Hub",
    description:
      "A web plateform for everyone to share, gather knowledge and do much more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: learninghub,
    source_code_link: "https://github.com/JPy-UwU/LearningHub",
    page_link: "https://next-learning-hub.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Web application that enables users to search for a city and displays weather conditions for that city.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/JPy-UwU/Weather-App",
    page_link: "https://jpy-uwu.github.io/Weather-App/",
  },
];

export { services, technologies, experiences, testimonials, projects };