import React, { createContext, useState } from "react";

const globalContext = createContext("NO PROVIDER FOUND"); //Creating global context //returns an oject with two properties as Provider and Consumer //default value if Provider not found.

// Creating Global Context
const AppProvider = ({ children }) => {
  //children === <App/>
  //   console.log({ children });
  const Provider = globalContext.Provider;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {/*passing an object as a prop with values*/}
      {children}
    </Provider>
  );
};

export { AppProvider, globalContext };
