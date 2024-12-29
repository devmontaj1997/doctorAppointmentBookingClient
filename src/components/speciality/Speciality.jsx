import { Link } from "react-router-dom";
import { specialityData } from "../../assets/assets";
import Container from "../../components/Container/Container";
const Speciality = () => {
  return (
    <>
      <Container>
        <div className="speciality w-[95%] py-16 lg:w-[70%] m-auto gap-3 lg:gap-0  flex  overflow-scroll  ">
          {specialityData.length > 0
            ? specialityData.map((data) => {
                return (
                  <div key={data.speciality} className="specialityContent hover:-translate-y-10 transition-all duration-500 lg:w-40 w-32  flex flex-shrink-0">
                    <Link to={`/all-doctors/${data.speciality}`}>
                      <img className="w-36" src={data.image} alt="" />

                      <p className=" text- text-center text-text-color font-outfit text-base xl:text-lg mt-2">
                        {data.speciality}
                      </p>
                    </Link>
                  </div>
                );
              })
            : " no data found"}
        </div>
      </Container>
    </>
  );
};

export default Speciality;
