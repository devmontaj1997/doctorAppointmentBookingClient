import BookAppointment from "../../../components/bookAppointment/BookAppointment";
import AllDoctors from "../../../components/doctorsCard/allDoctors/AllDoctors";
import HeroSection from "../../../components/HeroSection/HeroSection";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Speciality from "../../../components/speciality/Speciality";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionTitle
        sectionHeading="Find by Speciality "
        sectionSubHeading=" Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
      />
      <Speciality />

      <AllDoctors />
      <BookAppointment />
    </>
  );
};

export default Home;
