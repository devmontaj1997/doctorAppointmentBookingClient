import { assets } from "../../assets/assets";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Container from "../Container/Container";

const BookAppointment = () => {
  return (
    <>
      <Container>
        <div className="fullArea my-32">
          <div className="bookAppointmentArea lg:py-20 py-14 md:m-auto md:flex md:items-center justify-between bg-primary rounded-[12px] md:w-[90%] w-full">
            {/* Left Section */}
            <div className="left md:pl-12 pl-4">
              <h1 className="text-white mb-6  font-outfit font-[700] leading-16 text-[24px] xl:text-[40px] lg:text-[32px]">
                Book Appointment <br /> With 100+ Trusted Doctors
              </h1>
              <ButtonComponent btnBgColor="bg-white" btnWidth="md:w-56 w-44">
                <p className="md:text-xl text-sm font-outfit font-[400] text-center">
                  CreateAccount
                </p>
              </ButtonComponent>
            </div>

            {/* Right Section */}
            <div className="right relative lg:w-[370px] hidden md:block  w-[270px]  ">
              <img
                src={assets.appointment_img}
                alt="Appointment"
                className=" w-full absolute bottom-0 xl:bottom-[-180px] lg:bottom-[-168px] md:bottom-[-132px] right-0 "
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BookAppointment;
