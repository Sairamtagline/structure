import React from "react";
import MainContent from "./MainContent";
import MainContentForm from "./MainContentForm";
import Banner from "../../shared/Banner"

const Index = () => {
  return (
    <>
      <MainContent />
      <MainContentForm />
      <Banner />
    </>
  )
};

export default React.memo(Index);
