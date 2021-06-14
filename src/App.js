import { useState, createContext } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import Footer from "./components/Footer/Footer";

export const SidebarContext =  createContext({});

function App() {
    const [displaySidebar, setDisplaySidebar] = useState();

    return (
        <SidebarContext.Provider value={{displaySidebar, setDisplaySidebar}} >
            <div className="container">
                <Header />
                <Router>
                    <Sidebar />
                    <Main />
                </Router>
                <FeedbackSection />
                <Footer />
            </div>
        </SidebarContext.Provider>
    );
}

export default App;
