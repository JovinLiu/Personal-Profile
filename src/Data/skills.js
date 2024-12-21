const skillArr = [
  {
    category: "javascript",
    title: `JavaScript`,
    description:
      "Skilled in this core web language, enabling the development of interactive and dynamic websites that enhance user engagement and provide a seamless browsing experience.",
    top: "0.65rem",
    left: "0.65rem",
    scale: "0.8",
    bgcolor: "var(--yellow)"
  },
  {
    category: "typescript",
    title: `TypeScript`,
    description:
      "Enhance JavaScript by incorporating types, generics, decorators, and advanced TypeScript class features, allowing seamless integration of TypeScript with React and Node.js.",
    top: "2rem",
    left: "2rem",
    scale: "0.1",
    bgcolor: "var(--typescript)"
  },
  {
    category: "css",
    title: `CSS`,
    description: "Proficient in this webpage styling, layout and animation language, producing visually attractive and responsive designs.",
    top: "0.38rem",
    left: "0.35rem",
    scale: "0.8",
    bgcolor: "var(--highlight-2)"
  },
  {
    category: "html",
    title: `HTML`,
    description: "Exhibits mastery of this fundamental markup language, enabling the effective structuring of web content.",
    top: "0.65rem",
    left: "0.65rem",
    scale: "0.8",
    bgcolor: "var(--orange)"
  },
  {
    category: "react",
    title: `React`,
    description:
      "Proficiently skilled in building efficient and dynamic user interfaces with this widely used JavaScript library, leveraging its component-based architecture and state management for both micro and macro levels.",
    top: "0.52rem",
    left: "0.54rem",
    scale: "0.8",
    bgcolor: "var(--react)"
  },
  {
    category: "nextjs",
    title: `NextJS`,
    description:
      "Experienced in utilizing Next.js’s server-side rendering and static generation capabilities to build high-performance, SEO-friendly applications, enabling smooth integration with backend APIs and enhancing dynamic content management.",
    top: "0.7rem",
    left: "0.8rem",
    scale: "1",
    bgcolor: "var(--nextjs)"
  },
  {
    category: "sass",
    title: `Sass`,
    description:
      "Experienced in leveraging this advanced CSS preprocessor to craft reusable and maintainable styles, streamlining the process of writing and managing CSS.",
    top: "0.65rem",
    left: "0.9rem",
    scale: "0.8",
    bgcolor: "var(--highlight-1)"
  },
  {
    category: "tailwindcss",
    title: `Tailwind CSS`,
    description:
      "Experienced in utilizing this utility-first CSS framework, enabling the creation of highly customizable designs directly within the markup.",
    top: "0.55rem",
    left: "0.6rem",
    scale: "0.8",
    bgcolor: "var(--turquoise)"
  },
  {
    category: "bootstrap",
    title: `Bootstrap`,
    description:
      "Experienced in using Bootstrap, a powerful CSS framework, to quickly build responsive and modern web designs through its built-in components and tools.",
    top: "0.55rem",
    left: "0.6rem",
    scale: "0.8",
    bgcolor: "var(--bootstrap)"
  },
  {
    category: "styledcomponents",
    title: `Styled Components`,
    description:
      "Proficiently Skilled in this CSS-in-JS library, to seamlessly integrate styles within React applications, able to build dynamic styling based on props and state, improving workflow, scalability and user interface. ",
    top: "0.6rem",
    left: "0.6rem",
    scale: "1",
    bgcolor: "var(--red)"
  },
  {
    category: "reactrouter",
    title: `React Router`,
    description:
      "Experienced in using this React library to develop single-page applications with smooth transitions between pages and components, enhancing user experience and facilitating organized code structure.",
    top: "0.55rem",
    left: "0.75rem",
    scale: "0.8",
    bgcolor: "var(--reactrouter)"
  },
  {
    category: "reactquery",
    title: `React Query`,
    description:
      "Experienced in utilizing this remote state management library to fetch and validate data, enabling the development of applications that synchronize with the database in real time.",
    top: "0.5rem",
    left: "0.53rem",
    scale: "0.8",
    bgcolor: "var(--reactquery)"
  },
  {
    category: "redux",
    title: `Redux`,
    description:
      "Proficient in leveraging this library for both classic Redux and RTK to efficiently manage global UI state and remote state, ensuring a consistent and responsive user experience throughout the application.",
    top: "0.72rem",
    left: "0.76rem",
    scale: "0.8",
    bgcolor: "var(--redux)"
  },
  {
    category: "nodejs",
    title: `Node JS`,
    description:
      "Skilled in using Node.js to develop backend services, able to develope scalable backend services and RESTful APIs, effectively handling data management and real-time interactions",
    top: "0.7rem",
    left: "0.72rem",
    scale: "0.8",
    bgcolor: "var(--node)"
  },
  {
    category: "express",
    title: `Express`,
    description:
      "Proficient in utilizing this library built on top of Node.js, effectively leveraging the request-response cycle and integrate various libraries to streamline server-side operations.",
    top: "0.8rem",
    left: "0.8rem",
    scale: "0.8",
    bgcolor: "black"
  },
  {
    category: "supabase",
    title: `Supabase`,
    description:
      "Experienced in using this PostgreSQL backend web services, leveraging its database, authentication, and real-time capabilities to streamline front end application.",
    top: "0.78rem",
    left: "0.78rem",
    scale: "0.8",
    bgcolor: "var(--supabase)"
  },
  {
    category: "mongodb",
    title: `MongoDB`,
    description:
      "Proficient in utilizing this NoSQL database, enabling efficient data storage and retrieval for applications that require flexible schema design and scalability.",
    top: "0.72rem",
    left: "0.72rem",
    scale: "0.8",
    bgcolor: "var(--mongodb)"
  },
  {
    category: "mongoose",
    title: `Mongoose`,
    description:
      "Proficient in using this library with MongoDB, possessing a good understanding of its schema design, model definitions, document management, and features like aggregation and querying for efficient data handling.",
    top: "0.58rem",
    left: "0.55rem",
    scale: "0.95",
    bgcolor: "var(--mongoose)"
  },
  {
    category: "chatgpt",
    title: `ChatGPT`,
    description: "Capable to integrate AI assistance into the programming workflow to enhance productivity and streamline development processes.",
    top: "1rem",
    left: "1.05rem",
    scale: "1.1",
    bgcolor: "black"
  },
  {
    category: "postman",
    title: `Postman`,
    description:
      "Experienced in utilizing this API testing software to execute queries and generate comprehensive API documentation, ensuring effective communication of functionality and usage to developers.",
    top: "0.74rem",
    left: "0.75rem",
    scale: "1",
    bgcolor: "var(--postman)"
  },
  {
    category: "git",
    title: `Git`,
    description:
      "Experienced in managing both local and remote repositories, ensuring efficient version control and collaboration within development teams.",
    top: "0.7rem",
    left: "0.75rem",
    scale: "0.8",
    bgcolor: "var(--git)"
  },
  {
    category: "github",
    title: `GitHub`,
    description:
      "Experienced in using this Git repository hosting service, facilitating seamless code sharing, effective version control, and collaboration, thereby fostering a productive team development environment.",
    top: "0.6rem",
    left: "0.7rem",
    scale: "1",
    bgcolor: "black"
  },
  {
    category: "copilot",
    title: `Github Copilot`,
    description:
      "Experienced in utilizing GitHub Copilot, leveraging its AI-powered code suggestions to enhance productivity and streamline the coding process. ",
    top: "0.65rem",
    left: "0.7rem",
    scale: "0.8",
    bgcolor: "black"
  },
  {
    category: "vercel",
    title: `Vercel`,
    description:
      "Experienced in deploying and managing frontend applications with Vercel, ensuring optimal performance and stability for web applications.",
    top: "0.7rem",
    left: "0.9rem",
    scale: "0.8",
    bgcolor: "black"
  },
  {
    category: "heroku",
    title: `Heroku`,
    description:
      "Experienced in deploying and managing backend applications on Heroku, ensuring reliable performance and stability for web applications.",
    top: "1rem",
    left: "1.1rem",
    scale: "0.8",
    bgcolor: "var(--heroku)"
  }
];

export default skillArr;
