// eslint-disable-next-line react/prop-types
const ButtonComponent = ({ children, btnBgColor,btnColor,btnWidth }) => {
  return (
    <>
      <div
        className={`buttonArea border border-boder cursor-pointer rounded-[47px] sm:text-[18px] font-[400] font-outfit   py-3 px-4 lg:px-6 ${btnColor} ${btnWidth} hover:bg-[#000b6d] hover:text-white transition-all duration-500  ${btnBgColor}`}
       
      >
        {children}
      </div>
    </>
  );
};

export default ButtonComponent;
