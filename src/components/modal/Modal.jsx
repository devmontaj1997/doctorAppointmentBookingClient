import { assets } from "../../assets/assets";


// eslint-disable-next-line react/prop-types
const Modal = ({ children,showModal,handleHideModal  }) => {
 
  
  const handleStopProgation = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <div
        onClick={handleHideModal}
        className="fullModalArea  fixed duration-500 top-0 left-0 bg-[#00000086] w-full h-full "
        style={{
          opacity: `${showModal ? "1" : "0"}`,
          visibility: `${showModal ? "visible" : "hidden"}`,
        }}
      >
        <div
          onClick={handleStopProgation}
          className="modalChild bg-white w-[80%] duration-1000   h-full absolute "
          style={{ left: `${showModal ? "0%" : "-100%"}` }}
        >
          <div className="modalTop border-b-[2px]  ">
            <div className="topContent flex items-center justify-between p-3">
              <div className="left">
                <img className="w-[150px]" src={assets.logo} alt="" />
              </div>
              <div className="right">
                <img
                  onClick={handleHideModal}
                  className="w-[50px]"
                  src={assets.cross_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="modalBody">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
