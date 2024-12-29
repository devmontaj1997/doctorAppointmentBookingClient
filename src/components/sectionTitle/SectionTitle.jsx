/* eslint-disable react/prop-types */
import Container from "../Container/Container";

const SectionTitle = ({ sectionHeading, sectionSubHeading }) => {
  return (
    <>
      <Container>
        <section className="max-w-[573px] m-auto  mt-8 text-center">
          <div className="sectionHeading text-text-color font-outfit font-[500] text-3xl md:text-4xl">
            <h2> {sectionHeading} </h2>
          </div>
          <div className="sectionSubHeading">
            <p className="font-outfit text-ptag-color pt-4 font-[400] text-lg">
             {sectionSubHeading}
            </p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default SectionTitle;
