import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Container from "../Container/Container";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useContext, useEffect, useRef } from "react";
import { TrueFalseManageContext } from "../../context/trueFalseManage/TrueFalseManageContext";
import Modal from "../modal/Modal";

const menuLink = [
  {
    id: "1",
    name: "HOME",
    path: "/",
  },
  {
    id: "2",
    name: "All DOCTORS",
    path: "/all-doctors",
  },
  {
    id: "3",
    name: "ABOUT",
    path: "/about",
  },
  {
    id: "4",
    name: "CONTACT",
    path: "/contact",
  },
];
const logedUserMenu = [
  {
    id: "jjhj",
    name: "My Appointment",
    path: "/my_appointment",
  },
  {
    id: "kji",
    name: "My Profile",
    path: "/my-profile",
  },
];

const Header = () => {
  const navigate = useNavigate();

  // check loged user or not
  const {
    token,
    showModal,
    handleTokenFalse,
    handleShowModal,
    handleHideModal,
    showLogedUserMenu,
    handleshowLogedUserMenu,
    handleHideLogedUserMenu,
  } = useContext(TrueFalseManageContext);
  // handle navigate for mobile
  const handleNavigate = ( ) =>{
    navigate("/create-account")
    handleHideModal()
  
  }
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleHideLogedUserMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleHideLogedUserMenu]);

  return (
    <>
      {/* mobile menu Area start */}
      <Modal showModal={showModal} handleHideModal={handleHideModal}>
        <ul className=" flex flex-col gap-2 p-3">
          {menuLink?.length > 0
            ? menuLink.map((menuItem) => {
                return (
                  <li key={menuItem.id}>
                    <NavLink
                      onClick={handleHideModal}
                      to={menuItem.path}
                      className={`text-text-color transition-all duration-500 text-[16px] font-[500] font-poppins`}
                    >
                      {menuItem.name}
                      <hr className="bg-primary hidden w-full h-[2px] " />
                    </NavLink>
                  </li>
                );
              })
            : " no menu found "}
        </ul>

        {/* account buton Area */}

        <div className="headerEnd  md:hidden p-3 ">
          {token ? (
            <div
              ref={dropdownRef}
              className="logedUser relative cursor-pointer    "
            >
              <div
                onClick={handleshowLogedUserMenu}
                className="userImg flex gap-1  cursor-pointer"
              >
                <img
                  className="max-w-[45px] rounded-full border-primary border-[2px]"
                  src={assets.profile_pic}
                  alt=""
                />
                <img
                  className="max-w-[20px]"
                  src={assets.dropdown_icon}
                  alt=""
                />
              </div>

              <div
                style={{
                  top: `${showLogedUserMenu ? "130%" : " "}`,
                  opacity: ` ${showLogedUserMenu ? "1" : "0"}`,
                  visibility: ` ${showLogedUserMenu ? "visible" : "hidden"}`,
                }}
                className={` bg-white   userPages border-[2px] rounded-md w-52 absolute transition-all duration-300 top-0 sm:right-0 left-0 `}
              >
                <ul className="p-2">
                  {logedUserMenu?.length > 0
                    ? logedUserMenu.map((logedUserMenuItem) => {
                        return (
                          <>
                            <li
                              className={`py-1 font-outfit font-[500] text-text-color hover:text-gray-400 transition-all duration-300 `}
                              key={logedUserMenuItem.id}
                            >
                              <NavLink to={logedUserMenuItem.path}>
                                {logedUserMenuItem.name}
                                <hr className="bg-primary hidden w-full h-[2px] " />
                              </NavLink>
                            </li>
                          </>
                        );
                      })
                    : "no data found"}
                  <li
                    onClick={handleTokenFalse}
                    className={`py-1 font-outfit font-[500] text-text-color hover:text-gray-400 transition-all duration-300`}
                  >
                    Log out
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div
              className="logOutUser "
              onClick={ handleNavigate}
            >
              <ButtonComponent
                btnBgColor="bg-primary"
                btnWidth="w-full"
                btnColor="text-white"
              >
                <p>Create Account</p>
              </ButtonComponent>
            </div>
          )}
        </div>
      </Modal>
      {/* mobile menu Area end */}

      <Container>
        <header className="py-3 flex justify-between  items-center border-b  ">
          <div className="headerLeft">
            <NavLink to="/">
              <img
                className="lg:w-[217px] xsm:w-[180px] xxsm:w-[150px] lg:h-[46px]"
                src={assets.logo}
                alt=""
              />
            </NavLink>
          </div>
          <div className="headerMiddle">
            <div className="forMobileMenu lg:hidden ">
              <img
                className=" w-[30px]"
                onClick={handleShowModal}
                src={assets.menu_icon}
                alt=""
              />
            </div>

            <div className="forDestopMenu hidden lg:block">
              <ul className=" flex gap-10 items-center">
                {menuLink?.length > 0
                  ? menuLink.map((menuItem) => {
                      return (
                        <li key={menuItem.id}>
                          <NavLink
                            to={menuItem.path}
                            className="text-text-color text-[16px] font-[500] font-poppins"
                          >
                            {menuItem.name}
                            <hr className="bg-primary w-full hidden h-[2px] " />
                          </NavLink>
                        </li>
                      );
                    })
                  : " no menu found "}
              </ul>
            </div>
          </div>
          <div className="headerEnd hidden z-10 md:block ">
            {token ? (
              <div
                ref={dropdownRef}
                className="logedUser relative cursor-pointer    "
              >
                <div
                  onClick={handleshowLogedUserMenu}
                  className="userImg flex gap-1  cursor-pointer "
                >
                  <img
                    className="max-w-[45px] rounded-full border-primary border-[2px]"
                    src={assets.profile_pic}
                    alt=""
                  />
                  <img
                    className="max-w-[20px]"
                    src={assets.dropdown_icon}
                    alt=""
                  />
                </div>

                <div
                  style={{
                    top: `${showLogedUserMenu ? "130%" : " "}`,
                    opacity: ` ${showLogedUserMenu ? "1" : "0"}`,
                    visibility: ` ${showLogedUserMenu ? "visible" : "hidden"}`,
                  }}
                  className={` bg-white  userPages border-[2px] rounded-md w-52 absolute transition-all duration-300 top-0 right-0  `}
                >
                  <ul className="p-2">
                    {logedUserMenu?.length > 0
                      ? logedUserMenu.map((logedUserMenuItem) => {
                          return (
                            <>
                              <li
                                className={`py-1 font-outfit font-[500] text-text-color hover:text-gray-400 transition-all duration-300 `}
                                key={logedUserMenuItem.id}
                              >
                                <NavLink to={logedUserMenuItem.path}>
                                  {logedUserMenuItem.name}
                                  <hr className="bg-primary hidden w-full h-[2px] " />
                                </NavLink>
                              </li>
                            </>
                          );
                        })
                      : "no data found"}
                    <li
                      onClick={handleTokenFalse}
                      className={`py-1 font-outfit font-[500] text-text-color hover:text-gray-400 transition-all duration-300`}
                    >
                      Log out
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className="logOutUser "
                onClick={() => navigate("/create-account")}
              >
                <ButtonComponent
                  btnBgColor="bg-primary"
                  btnWidth="w-full"
                  btnColor="text-white"
                >
                  <p className=" ">Create Account</p>
                </ButtonComponent>
              </div>
            )}
          </div>
        </header>
      </Container>
    </>
  );
};

export default Header;
