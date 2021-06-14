import "./Hamburger.scss";
import { SidebarContext } from "../../App";
import { useContext } from "react";

const handleClick = (displaySidebar, setDisplaySidebar) => {
    if (displaySidebar) {
        setDisplaySidebar(false);
    } else {
        setDisplaySidebar(true);
    }
}

const toggleIcon = (displaySidebar) => {
    if (displaySidebar) {
        return "hamburger-change";
    } else {
        return "";
    }
}

const Hamburger = ({ className }) => {
    const { displaySidebar, setDisplaySidebar } = useContext(SidebarContext);
    return (
        <div
            className={`hamburger ${className} ${toggleIcon(displaySidebar)}`}
            onClick={() => handleClick(displaySidebar, setDisplaySidebar)}
        >
            <div className="hamburger__bar-1"></div>
            <div className="hamburger__bar-2"></div>
            <div className="hamburger__bar-3"></div>
        </div>
    );
};

export default Hamburger;
