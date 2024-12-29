import Container from "../../../components/Container/Container";
import { assets } from "../../../assets/assets";
import PageTitle from "../../../components/pageTitle/PageTitle";
const Contact = () => {
  return (
    <>
      <Container>
        <PageTitle PageTitle="CONTACT" />

        <div className="contactContent flex flex-col md:flex-row gap-10 mb-20 ">
          <div className="contactContentLeft lg:basis-[40%] basis-[100%]">
            <img className=" lg:w-[560px] w-full  " src={assets.contact_image} alt="" />
          </div>
          <div className="contactContentRight  lg:basis-[60%] basis-[100%] lg:my-6 my-0 flex flex-col lg:gap-5 gap-2">
            <h3 className="font-outfit text-ptag-color uppercase font-[600] xl:text-2xl lg:text-xl">
              Our OFFICE
            </h3>
            <p className="font-outfit text-ptag-color  font-[400] xl:text-lg md:text-base">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <div className="font-outfit text-ptag-color  font-[400]  xl:text-lg md:text-base">
              <p>Tel: (415) 555‑0132</p>
              <p>Email: greatstackdev@gmail.com</p>
            </div>

            <h2 className="xl:text-2xl lg:text-xl text-ptag-color uppercase  font-[600] ">Careers at PRESCRIPTO</h2>
            <p className="font-outfit lg:w-[463px]  text-ptag-color  font-[400]  xl:text-lg md:text-base">Learn more about our teams and job openings.</p>
            <div>
            <button className=" border text-text-color border-text-color xl:w-44 xl:h-14 md:w-36 md:h-12 w-32 h-10 font-[400] text-base"> Explore Jobs </button>
            </div>
           
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
