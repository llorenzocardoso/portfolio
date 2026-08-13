import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Accordion = ({ id, title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = `${id}-panel`;

    return (
        <div className="border-b border-line py-4">
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-fg sm:text-lg"
            >
                {title}
                <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-xl font-light text-muted"
                >
                    +
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-4 pt-4 text-base leading-relaxed text-body">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
