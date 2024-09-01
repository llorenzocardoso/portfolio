import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";	
import project2Secondary from "../assets/projects/project-2-secondary.png";
import project1Secondary from "../assets/projects/project-1-secondary.jpg"; // Nova imagem

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Sou o Lorenzo, sou estudante do curso superior de Análise e Desenvolvimento de Sistemas, atualmente no 6º semestre. Possuo conhecimentos em Kotlin, Flutter, Java, Python, PHP, C# e também em Banco de Dados, adquiridos através de projetos da faculdade. Estou sempre disposto e preparado para aprender mais e enfrentar novos desafios. Espero encontrar uma empresa que me permita crescer e desenvolver minhas habilidades profissionais.`;

export const PROJECTS = [
  {
    title: "FlixFlix",
    image: project1,
    secondaryImage: project1Secondary, // Adicionando a segunda imagem
    description:
      "A movie app in Flutter with secure login, a trending movies catalog, a featured carousel, and a dark theme, using Firebase and the TMDb API. Currently, I am refactoring it to Kotlin to add new functionalities.",
    technologies: ["Flutter", "Kotlin", "Firebase", "Figma", "TMDb API"],
  },
  {
    title: "Weather App",
    image: project2,
    secondaryImage: project2Secondary, // Adicionando a segunda imagem
    description:
      "A weather app in Flutter with real-time data from the OpenWeatherMap API. The app allows users to search for the weather in multiple cities, displays data such as temperature and humidity, and features intuitive animations and an adjustable night mode. It also includes geolocation to dynamically show the local weather.",
    technologies: ["Flutter", "Dart", "Geolocator", "Lottie", "OpenWeatherMap API"],
  },
];
