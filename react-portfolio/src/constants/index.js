import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";	
import project2Secondary from "../assets/projects/project-2-secondary.png";
import project1Secondary from "../assets/projects/project-1-secondary.jpg"; // Nova imagem

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Sou o Lorenzo, sou estudante do curso superior de Análise e Desenvolvimento de Sistemas, atualmente no 6º semestre. Possuo conhecimentos em Kotlin, Flutter, Java, Python, PHP, C# e também em Banco de Dados, adquiridos através de projetos da faculdade. Estou sempre disposto e preparado para aprender mais e enfrentar novos desafios. Espero encontrar uma empresa que me permita crescer e desenvolver minhas habilidades profissionais.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "FlixFlix",
    image: project1,
    secondaryImage: project1Secondary, // Adicionando a segunda imagem
    description:
      "Desenvolvi um aplicativo de filmes em Flutter com login seguro, catálogo de filmes em alta, carrossel de destaques e tema escuro, usando Firebase e a API TMDb. Atualmente, estou refatorando para Kotlin para adicionar novas funcionalidades.",
    technologies: ["Flutter", "Kotlin", "Firebase", "Figma", "TMDb API"],
  },
  {
    title: "Weather App",
    image: project2,
    secondaryImage: project2Secondary, // Adicionando a segunda imagem
    description:
      "Desenvolvi um aplicativo de previsão do tempo em Flutter com dados em tempo real da API OpenWeatherMap. O app permite buscar o clima de várias cidades, exibir dados como temperatura e umidade, e conta com animações intuitivas e modo noturno ajustável. Também inclui geolocalização para mostrar o clima local dinamicamente.",
    technologies: ["Flutter", "Dart", "Geolocator", "Lottie", "OpenWeatherMap API"],
  },
];
