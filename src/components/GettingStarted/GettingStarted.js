import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getSection } from "../../services/section";

const GettingStarted = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        let mounted = true;
        getSection(1).then((data) => {
            if (mounted) {
                setContent(data);
            }
        });
        return () => (mounted = false);
    }, []);

    if (content) {
        return <ReactMarkdown children={content.body} />;
    } else {
        return "";
    }
};

export default GettingStarted;
