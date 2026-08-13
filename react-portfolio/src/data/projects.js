import { resolveProjectImages } from "../lib/images";

/**
 * Projetos do portfólio. Cada um tem uma página própria em /:slug, então
 * este arquivo carrega o resumo do card e o conteúdo da página inteira.
 *
 * Campos de texto são bilíngues no formato `{ en, pt }` e passam por
 * `localize()` na hora de renderizar; o que não muda de idioma (nomes de
 * tecnologia, arquivos, URLs) fica como string simples.
 *
 * Para adicionar um projeto:
 *   1. jogue as imagens em `src/assets/projects/`
 *   2. adicione um objeto aqui, citando os arquivos pelo nome
 *
 * @typedef {{en: string, pt: string}} Text
 *
 * @typedef  {Object} Highlight
 * @property {Text}   title
 * @property {Text}   description
 *
 * @typedef  {Object} Segment
 * @property {Text}    text
 * @property {boolean} [strong]  trecho em destaque (escuro) do headline
 *
 * @typedef  {Object} Fact
 * @property {Text}   label
 * @property {(Text|string)[]} values
 *
 * @typedef  {Object}   FlowStep
 * @property {Text}     title
 * @property {Text}     description
 * @property {string[]} images   uma ou duas telas do passo
 *
 * @typedef  {Object}   Project
 * @property {string}   slug          identificador estável: key, âncora e URL
 * @property {string}   title
 * @property {Text}     tagline       frase curta e forte; o display do card
 * @property {Text}     summary       frase de apoio, usada na página
 * @property {Text}     [status]      selo curto, ex.: "In development"
 * @property {Text}     [context]     linha ao lado do nome, na página
 * @property {Text[]}   [categories]  domínio do produto; é o que o card mostra
 * @property {Text}     [role]        seu papel, ex.: "Fullstack Development"
 * @property {string[]} technologies  stack; aparece na página, não no card
 * @property {string}   [website]     site oficial do produto
 * @property {string[]} [images]      preview do card (1–2 arquivos)
 * @property {string}   [cover]       imagem de topo da página de detalhe
 * @property {string[]} [gallery]     telas soltas na página de detalhe
 * @property {FlowStep[]} [flow]      passo a passo comentado; substitui a galeria
 * @property {'browser'|'phone'} [display]  molda o preview: 4/3 ou retrato
 * @property {'in'|'none'|'out'} [zoom]  amplia ou reduz a arte dentro do palco
 * @property {Segment[]} [headline]   título da página, em segmentos destacáveis
 * @property {Fact[]}   [facts]       grid de contexto no topo da página
 * @property {Text[]}   [overview]    parágrafos de abertura da página
 * @property {Highlight[]} [highlights]  o que o produto faz
 * @property {Text[]}   [contribution]  qual foi o seu papel no projeto
 */

/** @type {Project[]} */
const PROJECTS = [
    {
        slug: "picsofme",
        title: "PicsOfMe",
        tagline: {
            en: "Own your moments.",
            pt: "Seus momentos são seus.",
        },
        summary: {
            en: "A photo app that automatically delivers you the pictures you appear in, from the private groups and events you join.",
            pt: "Um app de fotos que entrega automaticamente as fotos em que você aparece, vindas dos grupos privados e eventos de que você participa.",
        },
        status: { en: "Live on iOS", pt: "No ar no iOS" },
        categories: [
            { en: "Consumer App", pt: "App de consumo" },
            { en: "Computer Vision", pt: "Visão computacional" },
            { en: "Photo Sharing", pt: "Compartilhamento de fotos" },
            { en: "iOS", pt: "iOS" },
        ],
        role: { en: "Fullstack Development", pt: "Desenvolvimento fullstack" },
        technologies: ["Flutter", "Dart", "Go", "Python", "Face recognition"],
        website: "https://picsofme.com/",
        context: { en: "at Ambanga", pt: "na Ambanga" },
        display: "browser",
        // O mockup nasce com bastante folga transparente em volta.
        zoom: "in",
        images: ["picsofme-device.webp"],
        cover: "picsofme-cover.webp",
        gallery: [
            "picsofme-explore.webp",
            "picsofme-albums.webp",
            "picsofme-events.webp",
            "picsofme-moments.webp",
        ],
        headline: [
            { text: { en: "Getting people ", pt: "Entregar às pessoas " } },
            {
                text: {
                    en: "the photos they're in",
                    pt: "as fotos em que elas aparecem",
                },
                strong: true,
            },
            { text: { en: ", automatically", pt: ", automaticamente" } },
        ],
        facts: [
            {
                label: { en: "My Role", pt: "Meu papel" },
                values: [
                    { en: "Fullstack Development", pt: "Desenvolvimento fullstack" },
                ],
            },
            {
                label: { en: "Platform", pt: "Plataforma" },
                values: ["iOS", { en: "Android soon", pt: "Android em breve" }],
            },
            {
                label: { en: "Client", pt: "Cliente" },
                values: ["Flutter, Dart"],
            },
            {
                label: { en: "Services", pt: "Serviços" },
                values: ["Go, Python"],
            },
        ],
        overview: [
            {
                en:
                    "Every group trip, party or festival ends the same way: the photos of you " +
                    "are on someone else's phone, and getting them means asking, waiting and " +
                    "asking again. PicsOfMe removes that step entirely.",
                pt:
                    "Toda viagem em grupo, festa ou festival termina igual: as fotos suas estão " +
                    "no celular de outra pessoa, e conseguir cada uma significa pedir, esperar " +
                    "e pedir de novo. O PicsOfMe elimina esse passo por completo.",
            },
            {
                en:
                    "You join a private group with friends and family, or an event where the " +
                    "photographers upload directly. From then on, the pictures you appear in " +
                    "arrive on their own — automatically, privately, and in full resolution.",
                pt:
                    "Você entra num grupo privado com amigos e família, ou num evento em que os " +
                    "fotógrafos publicam direto. Dali em diante, as fotos em que você aparece " +
                    "chegam sozinhas — automaticamente, com privacidade e em alta resolução.",
            },
        ],
        highlights: [
            {
                title: { en: "Photos that find you", pt: "As fotos encontram você" },
                description: {
                    en: "Receive the pictures you're in from the private groups and events you join, without asking anyone.",
                    pt: "Receba as fotos em que você aparece nos grupos privados e eventos de que participa, sem precisar pedir a ninguém.",
                },
            },
            {
                title: { en: "Private by design", pt: "Privado por concepção" },
                description: {
                    en: "Face recognition runs on your device, and you stay in control of your data.",
                    pt: "O reconhecimento facial roda no seu aparelho, e o controle dos seus dados continua sendo seu.",
                },
            },
            {
                title: { en: "Groups and events", pt: "Grupos e eventos" },
                description: {
                    en: "Create a private group with the people close to you, or join a larger event where photographers upload for everyone.",
                    pt: "Crie um grupo privado com quem é próximo, ou entre num evento maior em que os fotógrafos publicam para todos.",
                },
            },
            {
                title: { en: "Yours to leave", pt: "Sair é decisão sua" },
                description: {
                    en: "Leave groups, leave events or remove photos at any time.",
                    pt: "Saia de grupos, saia de eventos ou remova fotos quando quiser.",
                },
            },
        ],
        contribution: [
            {
                en:
                    "I work on PicsOfMe as a fullstack developer at Ambanga, across the mobile " +
                    "client and the services behind it.",
                pt:
                    "Trabalho no PicsOfMe como desenvolvedor fullstack na Ambanga, tanto no " +
                    "cliente mobile quanto nos serviços por trás dele.",
            },
            {
                en:
                    "On the app side that means the Flutter client — the gallery, event and " +
                    "group flows, photo sync and the on-device recognition pipeline. On the " +
                    "backend, the services are written in Go, with the photo processing " +
                    "worker in Python.",
                pt:
                    "No app, isso significa o cliente Flutter — a galeria, os fluxos de evento " +
                    "e grupo, a sincronização de fotos e o pipeline de reconhecimento no " +
                    "aparelho. No backend, os serviços são escritos em Go, com o worker de " +
                    "processamento de imagens em Python.",
            },
        ],
    },
    {
        slug: "welth",
        title: "Welth",
        tagline: {
            en: "Numbers that never lie.",
            pt: "Números que nunca mentem.",
        },
        summary: {
            en: "A personal finance app built on a strict rule: every number is either realized, projected with its assumptions stated, or unavailable — never invented.",
            pt: "Um app de finanças pessoais construído sobre uma regra rígida: todo número é realizado, projetado com as premissas declaradas, ou indisponível — nunca inventado.",
        },
        status: { en: "In development", pt: "Em desenvolvimento" },
        categories: [
            { en: "Fintech", pt: "Fintech" },
            { en: "Personal Finance", pt: "Finanças pessoais" },
            { en: "Mobile", pt: "Mobile" },
            { en: "Side Project", pt: "Projeto pessoal" },
        ],
        role: { en: "Product & Engineering", pt: "Produto e engenharia" },
        technologies: ["Flutter", "NestJS", "PostgreSQL", "Drizzle", "Zod"],
        context: { en: "personal project", pt: "projeto pessoal" },
        display: "browser",
        // A arte já preenche o quadro; um respiro a deixa mais contida.
        zoom: "out",
        images: ["welth-mockup.webp"],
        headline: [
            { text: { en: "A finance app that ", pt: "Um app de finanças que " } },
            {
                text: {
                    en: "never invents a number",
                    pt: "nunca inventa um número",
                },
                strong: true,
            },
        ],
        facts: [
            {
                label: { en: "My Role", pt: "Meu papel" },
                values: [{ en: "Product & Engineering", pt: "Produto e engenharia" }],
            },
            {
                label: { en: "Original idea", pt: "Ideia original" },
                values: ["Vitor Bernardino"],
            },
            {
                label: { en: "Client", pt: "Cliente" },
                values: ["Flutter, Dart"],
            },
            {
                label: { en: "Backend", pt: "Backend" },
                values: ["NestJS, PostgreSQL"],
            },
        ],
        overview: [
            {
                en:
                    "Welth is a Brazilian personal finance app for organizing and planning " +
                    "money. The original idea came from my friend Vitor Bernardino; I took " +
                    "it from concept to product and build it end to end. It's still in " +
                    "development.",
                pt:
                    "O Welth é um app brasileiro de organização e planejamento financeiro " +
                    "pessoal. A ideia original é do meu amigo Vitor Bernardino; eu levei do " +
                    "conceito ao produto e construo o app de ponta a ponta. Ainda está em " +
                    "desenvolvimento.",
            },
            {
                en:
                    "Most finance apps blur the line between what happened and what might " +
                    "happen: a projection is drawn like a fact, and an estimate quietly " +
                    "becomes a balance. Welth is built around refusing that. The system has " +
                    "to tell the truth about money — every figure on screen is either " +
                    "realized, projected with its assumptions spelled out, or explicitly " +
                    "unavailable. An external failure or an AI suggestion never invents a " +
                    "balance, a return or an insight.",
                pt:
                    "A maioria dos apps de finanças embaralha o que aconteceu com o que pode " +
                    "acontecer: uma projeção é desenhada como se fosse fato, e uma estimativa " +
                    "vira saldo sem avisar. O Welth se recusa a fazer isso. O sistema tem que " +
                    "dizer a verdade sobre dinheiro — todo valor na tela é realizado, " +
                    "projetado com as premissas explicadas, ou explicitamente indisponível. " +
                    "Falha externa e IA nunca inventam saldo, rendimento ou insight.",
            },
        ],
        highlights: [
            {
                title: {
                    en: "Realized, projected, or unavailable",
                    pt: "Realizado, projetado ou indisponível",
                },
                description: {
                    en: "Those are the only three states a number can have, and realized and projected never share a representation.",
                    pt: "São os três únicos estados que um número pode ter, e realizado e projetado nunca dividem a mesma representação.",
                },
            },
            {
                title: {
                    en: "Money as integer cents",
                    pt: "Dinheiro em centavos inteiros",
                },
                description: {
                    en: "No floating point anywhere in the domain; rates and percentages always carry an explicit unit.",
                    pt: "Nada de ponto flutuante no domínio; taxas e percentuais sempre carregam a unidade explícita.",
                },
            },
            {
                title: { en: "Contract-first", pt: "Contrato primeiro" },
                description: {
                    en: "Zod schemas define the HTTP boundary, generate a versioned OpenAPI 3.1 snapshot, and from it the typed Dart client — so the app and API can't drift apart silently.",
                    pt: "Schemas Zod definem a fronteira HTTP, geram um snapshot OpenAPI 3.1 versionado e, a partir dele, o cliente Dart tipado — assim app e API não se desencontram em silêncio.",
                },
            },
            {
                title: {
                    en: "AI that can't make things up",
                    pt: "IA que não pode inventar",
                },
                description: {
                    en: "AI assists with organization and reading, but is structurally barred from creating financial facts.",
                    pt: "A IA ajuda a organizar e a ler, mas está estruturalmente impedida de criar fatos financeiros.",
                },
            },
        ],
        flow: [
            {
                title: {
                    en: "Start from what you can actually spend",
                    pt: "Comece pelo que dá para gastar de verdade",
                },
                description: {
                    en: "The home screen answers one question before any other: how much is really available today. The balance on top is realized money, and the credit card invoice is called out separately precisely because it isn't in that number yet. Below it, “Precisa de você” collects what the app can't decide on its own — entries without a category, a bill closing in three days, a recurring amount that changed.",
                    pt: "A tela inicial responde uma pergunta antes de qualquer outra: quanto está realmente disponível hoje. O saldo do topo é dinheiro realizado, e a fatura do cartão aparece separada justamente porque ainda não está nesse número. Abaixo, “Precisa de você” reúne o que o app não pode decidir sozinho — lançamentos sem categoria, uma fatura fechando em três dias, uma recorrência que mudou de valor.",
                },
                images: ["welth-home-light.webp", "welth-home-dark.webp"],
            },
            {
                title: {
                    en: "Logging money takes a few taps",
                    pt: "Registrar leva poucos toques",
                },
                description: {
                    en: "Income, expense, transfer and contribution are four modes of the same keypad. Category, account and date arrive pre-filled with the most likely guess, so the common case is fast and the unusual one is still one tap away under “Mais opções”.",
                    pt: "Receita, despesa, transferência e aporte são quatro modos do mesmo teclado. Categoria, conta e data já vêm preenchidas com o palpite mais provável, então o caso comum é rápido e o incomum fica a um toque em “Mais opções”.",
                },
                images: ["welth-new-entry.webp"],
            },
            {
                title: {
                    en: "Every entry, grouped by day",
                    pt: "Todos os lançamentos, agrupados por dia",
                },
                description: {
                    en: "The ledger totals each day on the right and filters by type. A swipe categorizes or deletes without leaving the list. Anything still in the future carries the “projetado” label — projected entries are never allowed to blend into what already happened.",
                    pt: "O extrato soma cada dia à direita e filtra por tipo. Um swipe categoriza ou exclui sem sair da lista. O que ainda está no futuro leva o rótulo “projetado” — lançamentos projetados nunca se misturam ao que já aconteceu.",
                },
                images: ["welth-movements.webp"],
            },
            {
                title: {
                    en: "One entry, fully accounted for",
                    pt: "Um lançamento, inteiramente descrito",
                },
                description: {
                    en: "Category, source account and nature of the entry, plus whether it repeats monthly. That recurrence toggle is the hinge of the whole app: it's what turns a one-off record into something the projection can rely on.",
                    pt: "Categoria, conta de origem e natureza do lançamento, além de repetir ou não mensalmente. Esse botão de recorrência é a dobradiça do app inteiro: é o que transforma um registro pontual em base para a projeção.",
                },
                images: ["welth-movement-detail.webp"],
            },
            {
                title: {
                    en: "The month ahead, with its assumptions stated",
                    pt: "O mês à frente, com as premissas declaradas",
                },
                description: {
                    en: "Planning projects the month from the recurrences already registered. The predicted balance says it is projected and says what it was derived from — seven recurrences, here — because a projection that hides its assumptions is indistinguishable from a fact.",
                    pt: "O planejamento projeta o mês a partir das recorrências já registradas. O saldo previsto diz que é previsto e diz de onde veio — sete recorrências, aqui — porque uma projeção que esconde as premissas é indistinguível de um fato.",
                },
                images: ["welth-planning.webp"],
            },
        ],
        contribution: [
            {
                en:
                    "The concept started with my friend Vitor Bernardino. I own the " +
                    "product decisions from there and build the whole thing — backend " +
                    "and app.",
                pt:
                    "O conceito começou com meu amigo Vitor Bernardino. Dali em diante as " +
                    "decisões de produto são minhas, e eu construo tudo — backend e app.",
            },
            {
                en:
                    "The backend is a modular NestJS API over PostgreSQL with Drizzle, with the " +
                    "domain kept as a separate pure package. The client is a Flutter app " +
                    "that adapts to each platform, using native iOS chrome and Material on " +
                    "Android.",
                pt:
                    "O backend é uma API NestJS modular sobre PostgreSQL com Drizzle, com o " +
                    "domínio isolado num package puro. O cliente é um app Flutter que se " +
                    "adapta a cada plataforma, com chrome nativo no iOS e Material no Android.",
            },
        ],
    },
];

const RESOLVED = PROJECTS.map((project) => ({
    ...project,
    images: resolveProjectImages(project.images),
    gallery: resolveProjectImages(project.gallery),
    cover: resolveProjectImages(project.cover ? [project.cover] : [])[0] ?? null,
    flow: project.flow?.map((step) => ({
        ...step,
        images: resolveProjectImages(step.images),
    })),
}));

export default RESOLVED;

/** @returns {Project|null} */
export const getProjectBySlug = (slug) =>
    RESOLVED.find((project) => project.slug === slug) ?? null;
