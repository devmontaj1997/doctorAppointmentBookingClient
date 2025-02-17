import { useState } from "react";
import { TrueFalseManageContext } from "../../context/trueFalseManage/TrueFalseManageContext";

// eslint-disable-next-line react/prop-types
const TrueFalseManageContextProvider = ({ children }) => {
  
  const [showLogedUserMenu, setShowLogedUserMenu] = useState(false);

  // handle showLogedUserMenu
  const handleshowLogedUserMenu = () => setShowLogedUserMenu(!showLogedUserMenu);
  const handleHideLogedUserMenu = () => setShowLogedUserMenu(false);
    // handle modal
    const [showModal, setShowModal] = useState(false);
      // handle showModal
      const handleShowModal = () => setShowModal(true);
      const handleHideModal = () => setShowModal(false);
    const [showFilterModal, setshowFilterModal] = useState(false);
      // handle doctor filter
      const handleshowFilterModal = () => setshowFilterModal(true);
      const handleHideFilterModal = () => setshowFilterModal(false);
      // handle login register form  
        //for login
  const [login, setLogin] = useState(false);
      const handleTrueLogin = () => setLogin(!login);
     






  const value = {
    login,
    handleTrueLogin,

   showModal,
    setShowModal,
    handleShowModal,
    handleHideModal,
  
    showLogedUserMenu,
    showFilterModal,
    handleshowLogedUserMenu,
    handleshowFilterModal,
    setshowFilterModal,
    handleHideFilterModal,
    handleHideLogedUserMenu
  };

  return (
    <TrueFalseManageContext.Provider value={value}>
      {children}
    </TrueFalseManageContext.Provider>
  );
};

export default TrueFalseManageContextProvider;
