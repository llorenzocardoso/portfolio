import { SITE, getAge } from "../config/site";
import { localize } from "../i18n/useT";

/**
 * Texto da página About, montado por idioma.
 *
 * As partes que envelhecem (idade, empresa, cargo) vêm de
 * `src/config/site.js`, e as frases se ajustam sozinhas quando esses campos
 * estão vazios — nunca sobra um "21 years old" velho no ar.
 */

const firstName = SITE.name.split(" ")[0];

export function getAboutIntro(language) {
    const company = SITE.company;
    const jobTitle = localize(SITE.jobTitle, language)?.toLowerCase();

    if (language === "pt") {
        const intro = [
            "Sou formado em Análise e Desenvolvimento de Sistemas",
            company
                ? `atualmente trabalhando na ${company}${jobTitle ? ` como ${jobTitle}` : ""}`
                : null,
        ]
            .filter(Boolean)
            .join(", ");

        return (
            `${intro}. No dia a dia uso Flutter e Dart no mobile, Go e Python ` +
            "no backend, além de React, TypeScript, Node.js e PostgreSQL."
        );
    }

    const intro = [
        "I'm a Systems Analysis and Development graduate",
        company
            ? `currently working at ${company}${jobTitle ? ` as a ${jobTitle}` : ""}`
            : null,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        `${intro}. Day to day I work with Flutter and Dart on mobile, Go and ` +
        "Python on the backend, plus React, TypeScript, Node.js and PostgreSQL."
    );
}

export function getAboutSections(language) {
    const age = getAge();
    const company = SITE.company;
    const pt = language === "pt";

    const background = pt
        ? [
              [
                  `Meu nome é ${firstName}`,
                  age ? `tenho ${age} anos` : null,
                  `e sou de ${SITE.location}, onde moro até hoje`,
              ]
                  .filter(Boolean)
                  .join(", ") +
                  ". Desde criança tenho paixão por tecnologia e, ao terminar o " +
                  "ensino médio, decidi cursar Análise e Desenvolvimento de Sistemas, " +
                  "que hoje já concluí.",

              (company ? `Hoje trabalho na ${company}, no ` : "Hoje trabalho no ") +
                  "PicsOfMe, um app de fotos que entrega automaticamente às pessoas " +
                  "as fotos em que elas aparecem. Faço parte do time que desenvolve " +
                  "o aplicativo em Flutter e os serviços por trás dele, escritos em " +
                  "Go e Python. Em paralelo, desenvolvo o Welth, um app de finanças " +
                  "pessoais feito em Flutter, com backend em NestJS e PostgreSQL.",

              "Ao longo do caminho fui me aproximando cada vez mais de mobile e " +
                  "front-end, especialmente de criar apps e aplicações web com design " +
                  "limpo e minimalista.",
          ]
        : [
              [
                  `My name is ${firstName}`,
                  age ? `I'm ${age} years old` : null,
                  `and I'm from ${SITE.location}, where I still live today`,
              ]
                  .filter(Boolean)
                  .join(", ") +
                  ". Since childhood, I've always had a passion for technology, " +
                  "and after finishing high school I decided to pursue a degree " +
                  "in Systems Analysis and Development, which I have now completed.",

              (company ? `Currently, I work at ${company} on ` : "I work on ") +
                  "PicsOfMe, a photo app that automatically delivers people the " +
                  "pictures they appear in. I'm part of the team building the app " +
                  "in Flutter and the services behind it, written in Go and Python. " +
                  "On the side, I'm building Welth, a personal finance app made with " +
                  "Flutter, with a NestJS and PostgreSQL backend.",

              "Throughout my journey I developed a deeper interest in mobile and " +
                  "front-end development, especially in building apps and web " +
                  "applications with clean, minimalist design.",
          ];

    const love = pt
        ? [
              "Gosto de muitas coisas que deixam o dia a dia mais leve. Curto jogar " +
                  "online com os amigos e adoro a companhia dos meus bichos: tenho 13 " +
                  "gatos, 8 cachorros e uma jabuti chamada Lola. Minha família, minha " +
                  "namorada e amigos são essenciais para mim, e viajar é algo de que gosto muito.",

              "Também adoro um bom sorvete, assistir a filmes, séries e lives. Curto " +
                  "fotografia, skate, praticar esportes e várias outras coisas!",
          ]
        : [
              "I am passionate about many things that make my day-to-day life more " +
                  "joyful. I enjoy playing online with my friends and love the company " +
                  "of my pets: I have 13 cats, 8 dogs, and a tortoise named Lola. My " +
                  "family, my girlfriend and friends are essential to me, and traveling is " +
                  "something I really enjoy.",

              "I also love a good ice cream, watching movies, series and live streams. " +
                  "I'm into photography, skateboarding, playing sports, and many other " +
                  "activities!",
          ];

    return [
        {
            id: "background",
            title: pt ? "Trajetória" : "Background",
            paragraphs: background,
        },
        {
            id: "love",
            title: pt ? "Coisas que eu amo" : "Things I Love",
            paragraphs: love,
        },
    ];
}
