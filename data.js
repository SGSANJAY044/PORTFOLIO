// ============================================
// PORTFOLIO DATA - Edit this file to update content
// ============================================

const PORTFOLIO_DATA = {
  // Personal Information
  personal: {
    name: "S G SANJAY",
    title: "Friendly Neighbourhood Developer🧑🏻‍💻",
    description: "I am a dynamic software developer proficient in frontend and backend technologies",
    email: "sgsanjay044@gmail.com",
    phone: "+918220174285",
  },

  // About Section
  about: `I'm Sanjay, a Developer at <b class="text-white">SurveySparrow</b> and a B.Tech graduate in <b class="text-white"> Artificial Intelligence & Data Science</b>. I work on building and scaling user-focused web applications, with experience across platform systems and product features.
  With a strong foundation in <b class="text-white">MERN stack</b> development, I enjoy crafting clean interfaces and solving real-world problems at the intersection of <b class="text-white">creativity and functionality</b>.
  Always eager to learn, grow, and contribute to impactful products in innovative, fast-paced environments.`,

  // Navigation Items
  navigation: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ],

  // Social Links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/SGSANJAY044",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>`,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/SGSanjay",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      </svg>`,
    },
    {
      name: "Phone",
      url: "tel:+918220174285",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>`,
    },
    {
      name: "Mail",
      url: "mailto:sgsanjay044@gmail.com",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
        <path d="M22 6.21L12.88 12.11a2.1 2.1 0 0 1-2.76 0L2 6.21"></path>
        <path d="M22 6.21l-9.12 5.9L2 6.21"></path>
        <path d="M6 9.21l6 3.85 6-3.85"></path>
        <path d="M3 10.75v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8"></path>
      </svg>`,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/SGSanjay044/",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" class="h-5 w-5" aria-hidden="true">
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path>
      </svg>`,
    },
  ],

  // Experience Section
  experiences: [
    {
      dateRange: "Mar 2024 – Present",
      title: "Frontend Developer",
      company: "SurveySparrow",
      companyUrl: "https://surveysparrow.com",
      subtitle: "Intern → Full-time",
      description: `Joined SurveySparrow as a third-year intern and transitioned into a full-time Frontend Developer.
        Worked across platform and core teams on frontend infrastructure, build and bundle improvements,
        API optimizations, and system upgrades, while also contributing to product features and ongoing enhancements.`,
      technologies: ["React", "TanStack", "Express.js", "PostgreSQL", "Docker", "Jenkins"],
    },
    {
      dateRange: "Dec 2020 - Feb 2024",
      title: "Client-side Developer",
      company: "Agri Tech",
      companyUrl: "https://greencollar.ai",
      subtitle: null,
      description: `Developed a dynamic frontend for the company's admin control actions with React and Redux and used Tailwind CSS for styling.
        Designed the application with the Figma tool, tested it with Cypress, and used a github action for CI/CD.`,
      technologies: ["Figma (Software)", "React.js", "Redux.js", "Tailwind CSS", "Cypress", "Git Actions", "CI/CD"],
    },
    {
      dateRange: "Mar 2023 - Sep 2023",
      title: "Software Development Engineer",
      company: "FABROMEN",
      companyUrl: "",
      subtitle: null,
      description: `Developed new features in a real-time MERN stack application. Integrate Firebase for cloud services.
        Collaborated with the development team to resolve critical bugs, enhancing the application's performance.
        Deploying the application onto an AWS EC2 instance with nginx server, ensuring high availability and scalability.`,
      technologies: ["MERN Stack", "Amazon EC2", "Firebase", "nginx"],
    },
    {
      dateRange: "Dec 2023 - Jan 2023",
      title: "Build Freelancer Forum",
      company: "EMDC Club",
      companyUrl: "https://freelancer.kongu.edu/",
      subtitle: null,
      description: `Collaborated with a team to develop a full-stack web application using React/Redux and Node.js.
        Designed the UI of the application using Figma and implemented the backend using Express.js.
        Utilized MongoDB Atlas for database management and deployed the application on AWS.`,
      technologies: ["Mongodb Atlas", "Mongoose", "Node.js", "Express.js"],
    },
    {
      dateRange: "Aug 2022 - Jan 2023",
      title: "Junior Product Developer",
      company: "IDOT",
      companyUrl: "https://idotinc.in/",
      subtitle: null,
      description: `Developed an engaging and responsive company landing page using HTML, CSS, Bootstrap and JavaScript.
        Implemented a sleek and modern user interface (UI) design to enhance user experience.
        Successfully deployed a non-profit organization's website using Node.js and Tailwind CSS.
        Hosted the NGO site on the Netlify platform for reliable performance and accessibility.`,
      technologies: ["Javascript", "Bootstrap", "Node.js", "Tailwind CSS"],
    },
    {
      dateRange: "From Dec 2021",
      title: "Engineering Student",
      company: "Kongu Engineering College",
      companyUrl: "https://www.kongu.ac.in/",
      subtitle: null,
      description: `I entered college equipped with my secondary school programming knowledge and a foundation in basic scripting.`,
      technologies: ["HTML", "CSS", "C", "Java"],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "Developed Power Station App",
      url: "https://github.com/SGSANJAY044/power-station-client.git",
      image: "./public/Power_Station.png",
      description: `The full-stack application combines Tailwind CSS for sleek design, Redux for smooth state management, and Docker for easy deployment.
        It seamlessly integrates Google Maps API for location-based features and employs Node.js, Express.js, and MongoDB for robust backend functionality.
        With JWT authentication, CI/CD pipelines, and rigorous testing, it ensures both security and reliability, delivering a seamless user experience.`,
      technologies: ["React", "Node", "GCP MAP API"],
    },
    {
      title: "Algorithm Visualizer",
      url: "https://sgsanjay044.github.io/algo-v/",
      image: "./public/Algo-v.png",
      description: `The dynamic web application, built with React and TypeScript, vividly visualizes diverse sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, and Insertion Sort.
        Real-time animations enhance user engagement, providing a tangible understanding of algorithmic operations.
        This project significantly enriches the learning experience for Design and Analysis of Algorithms (DAA), offering a hands-on approach to comprehend complex sorting methodologies.`,
      technologies: ["React", "TypeScript", "DSA"],
    },
  ],

  // Footer
  footer: {
    designTool: { name: "Figma", url: "https://www.figma.com/" },
    codeTool: { name: "Visual Studio Code", url: "https://code.visualstudio.com/" },
    buildTool: { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    deployTool: { name: "GIT pages", url: "https://pages.github.com/" },
  },
};

// Export for use in app.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
