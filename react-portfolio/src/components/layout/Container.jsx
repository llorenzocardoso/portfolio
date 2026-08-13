/**
 * Gutter horizontal padrão do site. A largura máxima é do frame, no App —
 * aqui só mora o respiro lateral, que encolhe no mobile porque o `px-8`
 * fixo do layout antigo comia espaço demais em telas de 320–375px.
 */
const Container = ({ as: Tag = "div", className = "", children }) => (
    <Tag className={`w-full px-5 sm:px-8 ${className}`}>{children}</Tag>
);

export default Container;
