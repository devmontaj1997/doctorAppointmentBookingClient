import Container from "../../../components/Container/Container";
import { assets } from "../../../assets/assets";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import { useState } from "react";
const MyProfile = () => {
  // Handle edit Profile

  const [profileEdit, setProfileEdit] = useState(false);
  const handleEditTrue = () => setProfileEdit(!profileEdit);

  return (
    <Container>
      <div className="myProfileArea mt-10 lg:w-[50%]">
        <div className="profileImgArea w-40 rounded-lg mb-8">
          <img
            className="w-full rounded-t-lg"
            src={assets.profile_pic}
            alt="Profile"
          />
          <label
            htmlFor="profilePicInput"
            className="border block border-boder p-2 rounded-b-lg cursor-pointer text-center"
          >
            Change Profile 
          </label>
          <input
            type="file"
            id="profilePicInput"
            className="hidden"
            accept="image/*"
          />
        </div>

        <div className="profileName">
          {profileEdit ? (
            <input
              className="border p-1 rounded-lg bg-slate-200 text-text-color border-boder outline-none"
              type="text"
              placeholder=" Enter Name"
            />
          ) : (
            <h1 className=" font-outfit font-[500] text-text-color text-3xl">
              Edward Vincent
            </h1>
          )}

          <hr className=" bg-boder h-[2px] mt-2" />
        </div>

        <form>
          <div className="contactInformation  mt-6">
            <h4 className=" underline text-ptag-color font-outfit font-[400] text-base">
              CONTACT INFORMATION
            </h4>

            <ul className=" mt-2 flex flex-col gap-2">
              <li className="text-text-color font-outfit font-[400] text-lg flex gap-10">
                Email id:
                <p className="font-[300] text-primary"> Mon@gmail.com </p>
              </li>
              <li className=" flex gap-14 text-text-color font-outfit font-[400] text-lg">
                Phone:{" "}
                {profileEdit ? (
                  <>
                    {" "}
                    <input
                      type="text"
                      className="border p-1 rounded-lg bg-slate-200 text-text-color border-boder outline-none"
                      placeholder="Phone"
                    />{" "}
                  </>
                ) : (
                  <p className="font-[300] text-primary"> 8881803761 </p>
                )}
              </li>

              <li className="flex gap-10 text-text-color font-outfit font-[400] text-lg">
                Address:
                {profileEdit ? (
                  <>
                    <textarea
                      name=""
                      className="border p-1 rounded-lg bg-slate-200 text-text-color border-boder outline-none"
                      id=""
                    ></textarea>{" "}
                  </>
                ) : (
                  <p className="font-[300] ">
                    57th Cross, Richmond <br />
                    Circle, Church Road, London
                  </p>
                )}
              </li>
            </ul>
          </div>
          <div className="basicInformation mt-10">
            <h4 className=" underline text-ptag-color font-outfit font-[400] text-base">
              BASIC INFORMATION
            </h4>
            <ul className=" mt-2 flex flex-col gap-2">
              <li
                className={`text-text-color font-outfit font-[400] text-lg flex ${
                  profileEdit ? "gap-2" : "gap-12"
                } `}
              >
                Gender:
                {profileEdit ? (
                  <>
                    <input type="radio" name="gender" value="male" />{" "}
                    <label> Male</label>
                    <input type="radio" name="gender" value="female" />{" "}
                    <label> Female</label>
                    <input type="radio" name="gender" value="other" />{" "}
                    <label> Other</label>
                  </>
                ) : (
                  <p className="font-[300]"> Male </p>
                )}
              </li>
              <li className="text-text-color font-outfit font-[400] text-lg flex gap-10">
                Birthday:
                {profileEdit ? (
                  <input
                    type="date"
                    className="border p-1 rounded-lg bg-slate-200 text-text-color border-boder outline-none"
                  />
                ) : (
                  <p className="font-[300]"> 20 July, 2024 </p>
                )}
              </li>
            </ul>
          </div>
          <div className="buttonArea my-14">
            <div className="editBtn " onClick={handleEditTrue}>
              <ButtonComponent btnWidth="w-fit">
                <p> {profileEdit ? "  Save information " : " Edit "} </p>
              </ButtonComponent>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default MyProfile;
