import { useContext } from "react";
import { Link } from "react-router-dom";
import NameBox from "../NameBox/NameBox";
import "./Sidebar.scss";
import { SidebarContext } from "../../App"

const getStyles = (isDisplayed) => {
    if (isDisplayed === undefined) {
        return {};
    }
    if (isDisplayed) {
        return {
            display: "initial",
            zIndex: 100,
            gridRow: "1 / -1",
        };
    }
};

const Sidebar = () => {
    const { displaySidebar } = useContext(SidebarContext);
    return (
        <div className="sidebar" style={getStyles(displaySidebar)}>
            {!displaySidebar && <NameBox className="logobox" />}

            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <Link to="/getting-started" className="link">
                        <li className="sidebar__list-item">Getting Started</li>
                    </Link>
                    <Link to="/installation" className="link">
                        <li className="sidebar__list-item">Installation</li>
                    </Link>
                    <Link to="/basic-usage" className="link">
                        <li className="sidebar__list-item">Basic Usage</li>
                    </Link>
                    <Link to="/advance-topics" className="link">
                        <li className="sidebar__list-item">Advance Topics</li>
                    </Link>
                    <Link to="/faq" className="link">
                        <li className="sidebar__list-item">FAQ</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
