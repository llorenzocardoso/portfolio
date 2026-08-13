import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * O react-router preserva a posição de scroll ao trocar de rota, então sem
 * isto abrir um projeto a partir do meio da home cai no meio da página nova.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
