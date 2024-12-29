import { assets } from "../../../assets/assets";
import Container from "../../../components/Container/Container";
import PageTitle from "../../../components/pageTitle/PageTitle";
const About = () => {
  const BottomCardContent = [
    {
      id: "1",
      title: "Efficiency:",
      content:
        "Streamlined appointment scheduling that fits into your busy lifestyle.",
    },
    {
      id: "2",
      title: "Convenience:",
      content:
        "Access to a network of trusted healthcare professionals in your area.",
    },
    {
      id: "3",
      title: "Personalization:",
      content:
        "Tailored recommendations and reminders to help you stay on top of your health.",
    },
  ];
  return (
    <Container>
      <PageTitle PageTitle="ABOUT" />

      <div className="aboutContent flex lg:flex-row flex-col gap-5 ">
        <div className="aboutLeft basis-[35%] relative">
          <img
            className=" lg:w-[438px]  w-full "
            src={assets.about_image}
            alt=""
          />
        </div>
        <div className="aboutRight xl:basis-[50%] lg:basis-[60%] flex flex-col gap-4   xl:gap-5 lg:gap-1">
          <p className="font-outfit  xl:text-xl lg:text-base text-text-color">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="font-outfit  text-text-color xl:text-lg lg:text-base">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you are booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="font-outfit text-lg text-text-color font-[700]">
            Our Vision
          </b>
          <p className="font-outfit xl:text-lg lg:text-base text-text-color">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="whyChooseSection ">
        <div className="whyChooseSectionTop my-10 text-2xl text-ptag-color font-outfit font-[400]">
          <p>
            Why
            <strong className=" font-outfit font-[600]  text-[#171717] ">
              {" "}
              Choose Us
            </strong>
          </p>
        </div>

        <div className="whyChooseSectionBottom flex w-full  flex-col xl:flex-row mb-20">
          {BottomCardContent?.length > 0
            ? BottomCardContent.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="whyChooseSectionBottomCard hover:bg-primary group  transition-all duration-500 sm:p-10 p-5 w-full  border"
                  >
                    <h3 className="font-outfit group-hover:text-white sm:text-lg text-base font-[600] text-text-color uppercase">
                      {data.title}
                    </h3>
                    <p className=" sm:w-80  group-hover:text-white my-5 font-outfit sm:text-lg text-base text-ptag-color">
                      {data.content}
                    </p>
                  </div>
                );
              })
            : "no content found"}
        </div>
      </div>
    </Container>
  );
};

export default About;
