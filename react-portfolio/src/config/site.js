/**
 * Fonte única de verdade para tudo que muda com o tempo.
 * Trocar de emprego, de cidade ou de currículo = editar só este arquivo.
 */

// Data de nascimento (mês é 0-indexado em JS: 10 = novembro).
// A idade é derivada daqui, então nunca mais fica desatualizada no site.
const BIRTH_DATE = new Date(2003, 10, 13);

export const SITE = {
    name: "Lorenzo Cardoso",
    role: "Developer",

    company: "Ambanga",
    jobTitle: {
        en: "Fullstack Developer",
        pt: "Desenvolvedor Fullstack",
    },

    location: "Arroio do Sal, RS",
    email: "llorenzocardoso1@gmail.com",

    // Descrição usada nas meta tags de SEO e Open Graph.
    tagline:
        "Developer focused on mobile and front-end, building apps and web interfaces with clean, minimalist design.",
};

export const SOCIALS = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/llorenzocardoso/",
    },
    {
        label: "GitHub",
        href: "https://github.com/llorenzocardoso",
    },
    {
        label: "Mail",
        href: `mailto:${SITE.email}`,
    },
];

// `label` aponta para uma chave de src/i18n/ui.js.
export const NAV_LINKS = [
    { label: "nav.projects", to: "/" },
    { label: "nav.about", to: "/about" },
    {
        label: "nav.cv",
        href: "https://drive.google.com/file/d/1pW4KaCBHFBDXuDRUVn64rfmGFusvA3db/view",
        external: true,
    },
];

/**
 * Idade atual. Desconta o ano quando o aniversário ainda não chegou —
 * subtrair só os anos daria um número a mais durante boa parte do ano.
 */
export function getAge(today = new Date()) {
    let age = today.getFullYear() - BIRTH_DATE.getFullYear();

    const monthsUntilBirthday = today.getMonth() - BIRTH_DATE.getMonth();
    const birthdayHasPassed =
        monthsUntilBirthday > 0 ||
        (monthsUntilBirthday === 0 && today.getDate() >= BIRTH_DATE.getDate());

    if (!birthdayHasPassed) age -= 1;

    return age;
}
