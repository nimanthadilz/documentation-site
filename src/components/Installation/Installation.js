import { useState, useEffect } from "react";
import { getSection } from "../../services/section";
import ReactMarkdown from "react-markdown";
import { CopyBlock, dracula } from "react-code-blocks";

const Installation = () => {
    const [content, setContent] = useState();

    const components = {
        code({ children }) {
            return (
                <div className="code-block">
                    <CopyBlock
                        text={children}
                        language={"bash"}
                        theme={dracula}
                        showLineNumbers={true}
                    />
                </div>
            );
        },
    };

    useEffect(() => {
        let mounted = true;
        getSection(2).then((data) => {
            if (mounted) {
                setContent(data);
            }
        });
        return () => (mounted = false);
    }, []);

    if (content) {
        return (
            <ReactMarkdown children={content.body} components={components} />
        );
    } else {
        return "";
    }
};

export default Installation;
