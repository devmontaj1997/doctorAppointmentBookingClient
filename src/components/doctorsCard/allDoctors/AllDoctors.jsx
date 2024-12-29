import { Link } from "react-router-dom";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import Container from "../../Container/Container";
import SectionTitle from "../../sectionTitle/SectionTitle";
import DoctorsCard from "../DoctorsCard";
import { doctors } from "../../../assets/assets";

const AllDoctors = () => {
  return (
    <>
      <Container>
        <SectionTitle
          sectionHeading="Top Doctors to Book"
          sectionSubHeading="Simply browse through our extensive list of trusted doctors."
        />
        <div className="doctorsCard my-7 w-full flex gap-5 justify-center flex-wrap ">
          <DoctorsCard doctors={doctors.slice(0, 10)} />

          
        </div>
        <div className="moreBtn  w-60 m-auto">
        <ButtonComponent  btnBgColor="bg-[#EAEFFF]"  > 
            <Link to="/all-doctors" className=" block text-center" > More </Link>
          </ButtonComponent>
        </div>
      </Container>
    </>
  );
};

export default AllDoctors;
