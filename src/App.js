import { lazy, Suspense } from "react";
import "./App.css";

import Header from "./components/Header";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback="loading">
        <Home />
      </Suspense>
    </>
  );
};

export default App;
