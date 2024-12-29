/* eslint-disable react/prop-types */
import { GoDotFill } from "react-icons/go";

const DoctorsCard = ({doctors}) => {
  return (
    <>
    {doctors?.length > 0 ? (
  doctors.map((doc) => (
    <div
      key={doc._id}
      className="cardBody w-[98%] sm:w-72 flex-shrink-0 rounded-[12px] border-[1px] border-[#C9D8FF]"
    >
      <div className="img rounded-t-[12px] bg-[#EAEFFF]">
        <img className="w-full" src={doc.image} alt={doc.name} />
      </div>

      <div className="cardContent p-3 text-center sm:text-left">
        <div className="status flex gap-1 items-center sm:justify-start justify-center text-sm text-[#0FBF00] font-outfit font-[400]">
          <GoDotFill />
          <p>{doc.status}</p>
        </div>
        <div className="docName">
          <h2 className="text-text-color font-[500] font-outfit text-2xl">
            {doc.name}
          </h2>
        </div>
        <div className="docPosition">
          <p className="text-ptag-color font-outfit">
            {doc.speciality}
          </p>
        </div>
      </div>
    </div>
  ))
) : (
  <p>No doctors found</p>
)}

    </>
  );
};

export default DoctorsCard;
