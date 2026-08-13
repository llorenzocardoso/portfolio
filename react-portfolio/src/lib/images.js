// Mapa de todas as imagens de projeto, resolvido em tempo de build.
// Permite citar imagens por nome de arquivo nos dados, sem um `import`
// manual por imagem, e sem abrir mão do hashing/otimização do Vite.
// Só bitmaps: os SVGs e o MP4 da splash seguem guardados na pasta, mas o
// glob é `eager` — listá-los aqui os empurraria para o bundle sem uso.
const projectImages = import.meta.glob("../assets/projects/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
});

const byFilename = Object.fromEntries(
    Object.entries(projectImages).map(([path, url]) => [
        path.split("/").pop(),
        url,
    ])
);

/**
 * Traduz nomes de arquivo em URLs finais, avisando no console se algum
 * nome não existir na pasta — erro fácil de cometer ao adicionar projeto.
 *
 * @param {string[]} [filenames]
 * @returns {string[]}
 */
export function resolveProjectImages(filenames) {
    if (!filenames?.length) return [];

    return filenames.reduce((urls, filename) => {
        const url = byFilename[filename];

        if (!url) {
            console.warn(
                `[projects] imagem "${filename}" não encontrada em src/assets/projects/`
            );
            return urls;
        }

        return [...urls, url];
    }, []);
}
