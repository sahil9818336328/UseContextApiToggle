import React, { useContext } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { globalContext } from "./context"; //context we want to use.
const Home = () => {
  const getContext = useContext(globalContext); //returns an object with values passed to the Provider.
  console.log(getContext);
  const { openModal, openSidebar } = getContext;

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <VscThreeBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
