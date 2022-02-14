import "./App.css";
import ClaimSpot from "./components/ClaimSpot";
import Header from "./components/Header";
import Features from "./components/Features";
import MainContent from "./components/MainContent";
import Setup from "./components/Setup";

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <ClaimSpot />
      <Features />
      <Setup />
    </>
  );
};

export default App;
