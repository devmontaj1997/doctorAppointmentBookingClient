import { assets } from "../../assets/assets";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Container from "../Container/Container";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="heroSection  mt-3 sm:flex-row text-white bg-primary rounded-xl  flex flex-col lg:items-center xxsm:px-8 lg:px-16">
          <div className="heroSectionLeft flex flex-col ">
            <div className="LeftTop lg:mt-0 mt-10 ">
              <h2 className=" xl:text-[43px] lg:text-3xl sm:text-2xl xxsm:text-xl xsm:text-2xl font-[600] font-outfit xl:leading-[3.6rem]  lg:leading-[2.5rem] leading-[1.5rem]  ">
                Book Appointment <br />
                With Trusted Doctors
              </h2>
            </div>
            <div className="LeftMiddle relative flex flex-col  lg:flex-row   gap-2 my-4">
              <img
                className="2xl:w-36 xl:w-28 lg:w-24 xxsm:w-20 "
                src={assets.group_profiles}
                alt=""
              />
              <p className=" lg:w-96 sm:w-64  ">
                Simply browse through our extensive list of trusted
                doctors,schedule your appointment hassle-free.
              </p>
            </div>
            <div className="LeftEnd pb-5">
              <ButtonComponent
                btnBgColor="bg-white"
                btnColor="text-text-color "
                btnWidth=" w-48  lg:w-48"
              >
                <div className="buttonContent  flex gap-2 ">
                  <p className=" text-sm ">Book appointment</p>
                  <img className="w-[14px]" src={assets.arrow_icon} alt="" />
                </div>
              </ButtonComponent>
            </div>
          </div>
          <div className="heroSectionRight relative xl:mt-32 lg:mt-24 self-end mt-10">
            <img
              className="lg:w-[638px] sm:w-[468px]"
              src={assets.header_img}
              alt=""
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
