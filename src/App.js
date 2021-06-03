import './App.scss';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main/Main"
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
      <FeedbackSection />
      <Footer />
    </div>
  );
}

export default App;
