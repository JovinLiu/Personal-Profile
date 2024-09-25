const skillArr = [
  {
    category: "javascript",
    title: `JavaScript`,
    description: "Proficiently skilled in this fundamental web language, facilitating the development of interactive and dynamic websites.",
    top: "0.65rem",
    left: "0.65rem",
    scale: "0.8",
    bgcolor: "var(--yellow)"
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
      "Proficient in developing efficient and dynamic user interfaces using this widely adopted JavaScript library, utilizing its component-based architecture and state management from micro to macro.",
    top: "0.52rem",
    left: "0.54rem",
    scale: "0.8",
    bgcolor: "var(--react)"
  },
  {
    category: "sass",
    title: `Sass`,
    description: "",
    top: "0.65rem",
    left: "0.9rem",
    scale: "0.8",
    bgcolor: "var(--highlight-1)"
  },
  {
    category: "tailwindcss",
    title: `Tailwind CSS`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.55rem",
    left: "0.6rem",
    scale: "0.8",
    bgcolor: "var(--turquoise)"
  },
  {
    category: "styledcomponents",
    title: `Styled Components`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.6rem",
    left: "0.6rem",
    scale: "1",
    bgcolor: "var(--red)"
  },
  {
    category: "reactrouter",
    title: `React Router`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.55rem",
    left: "0.75rem",
    scale: "0.8",
    bgcolor: "var(--reactrouter)"
  },
  {
    category: "reactquery",
    title: `React Query`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.5rem",
    left: "0.53rem",
    scale: "0.8",
    bgcolor: "var(--reactquery)"
  },
  {
    category: "redux",
    title: `Redux`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.72rem",
    left: "0.76rem",
    scale: "0.8",
    bgcolor: "var(--redux)"
  },
  {
    category: "redux",
    title: `RTK Query`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.72rem",
    left: "0.76rem",
    scale: "0.8",
    bgcolor: "var(--redux)"
  },
  {
    category: "nodejs",
    title: `Node JS`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.7rem",
    left: "0.72rem",
    scale: "0.8",
    bgcolor: "var(--node)"
  },
  {
    category: "express",
    title: `Express`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.8rem",
    left: "0.8rem",
    scale: "0.8",
    bgcolor: "black"
  },
  {
    category: "supabase",
    title: `Supabase`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.78rem",
    left: "0.78rem",
    scale: "0.8",
    bgcolor: "var(--supabase)"
  },
  {
    category: "mongodb",
    title: `MongoDB`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.72rem",
    left: "0.72rem",
    scale: "0.8",
    bgcolor: "var(--mongodb)"
  },
  {
    category: "mongoose",
    title: `Mongoose`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.58rem",
    left: "0.55rem",
    scale: "0.95",
    bgcolor: "var(--mongoose)"
  },
  {
    category: "chatgpt",
    title: `ChatGPT`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "1rem",
    left: "1.05rem",
    scale: "1.1",
    bgcolor: "black"
  },
  {
    category: "postman",
    title: `Postman`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.74rem",
    left: "0.75rem",
    scale: "1",
    bgcolor: "var(--postman)"
  },
  {
    category: "git",
    title: `Git`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.7rem",
    left: "0.75rem",
    scale: "0.8",
    bgcolor: "var(--git)"
  },
  {
    category: "github",
    title: `GitHub`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.6rem",
    left: "0.7rem",
    scale: "1",
    bgcolor: "black"
  },
  {
    category: "copilot",
    title: `Github Copilot`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.65rem",
    left: "0.7rem",
    scale: "0.8",
    bgcolor: "black"
  },
  {
    category: "vercel",
    title: `Vercel`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "0.7rem",
    left: "0.9rem",
    scale: "0.8",
    bgcolor: "black"
  },
  {
    category: "heroku",
    title: `Heroku`,
    description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
    top: "1rem",
    left: "1.1rem",
    scale: "0.8",
    bgcolor: "var(--heroku)"
  }
];

export default skillArr;
