import { useParams } from "react-router-dom";
import Container from "../../../components/Container/Container";
import DoctorsCard from "../../../components/doctorsCard/DoctorsCard";
import { doctors, specialityData } from "../../../assets/assets";
import { useContext, useEffect, useState } from "react";
import Modal from "../../../components/modal/Modal";
import { BsFilterSquare } from "react-icons/bs";
import { TrueFalseManageContext } from "../../../context/trueFalseManage/TrueFalseManageContext";

const AllDoctors = () => {
  const { handleshowFilterModal,showFilterModal,handleHideFilterModal } = useContext(TrueFalseManageContext);
  const params = useParams();
  const [filterData, setFilterData] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(
    params.speciality || "All"
  );

  // Function to handle filtering
  const handleFilter = (speciality) => {
    if (selectedSpeciality === speciality) {
      // If the same speciality is clicked, reset to "All"
      setSelectedSpeciality("All");
      setFilterData(doctors);
    } else {
      // Otherwise, filter based on the selected speciality
      setSelectedSpeciality(speciality);
      const filtered = doctors.filter((doc) => doc.speciality === speciality);
      setFilterData(filtered);
      handleHideFilterModal()

    }
  };

  useEffect(() => {
    // Load initial data based on URL params
    if (params.speciality) {
      handleFilter(params.speciality);
    } else {
      setFilterData(doctors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.speciality]);

  return (
    <Container>
      
        <Modal showModal={showFilterModal} handleHideModal={handleHideFilterModal}>
          <ul className=" flex flex-col gap-5 mt-5 p-5 ">
            {specialityData?.length > 0
              ? specialityData.map((docFilter) => (
                  <li
                    key={docFilter.speciality}
                    className={`border cursor-pointer border-boder p-2 rounded-lg ${
                      selectedSpeciality === docFilter.speciality
                        ? "bg-blue-200"
                        : ""
                    }`}
                    onClick={() => handleFilter(docFilter.speciality)}
                  >
                    {docFilter.speciality}
                  </li>
                ))
              : "No doctors found"}
          </ul>
        </Modal>
    

      <div className="allDoctors my-10">
        <div className="filtersHeading">
          <h3 className="mb-4 font-outfit text-xl font-[400] text-text-color">
            Browse through the doctors specialist.
          </h3>
        </div>
        <div className="filtersContent flex flex-col lg:flex-row">
          {/* Left Filters */}
          <div className="allDoctorsLeft basis-[25%]">
            <div className="filterArea my-5  block lg:hidden">
              <BsFilterSquare
                onClick={handleshowFilterModal}
                className=" text-primary text-lg p-2  border border-boder rounded-lg w-10 h-10  "
              />
            </div>
            <ul className="   lg:flex lg:flex-col  gap-3 mb-4 hidden ">
              {specialityData?.length > 0
                ? specialityData.map((docFilter) => (
                    <li
                      key={docFilter.speciality}
                      className={`border cursor-pointer border-boder p-2 rounded-lg ${
                        selectedSpeciality === docFilter.speciality
                          ? "bg-blue-200"
                          : ""
                      }`}
                      onClick={() => handleFilter(docFilter.speciality)}
                    >
                      {docFilter.speciality}
                    </li>
                  ))
                : "No doctors found"}
            </ul>
          </div>

          {/* Right Content */}
          <div className="allDoctorsRight basis-[75%]">
            <div className="doctorsCard w-full flex gap-5 justify-center flex-wrap">
              <DoctorsCard doctors={filterData} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllDoctors;
