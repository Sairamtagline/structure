import { lazy, Suspense } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback="loading">
        <Home />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
