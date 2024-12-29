import { useContext,  } from "react";
import FormInput from "../../../components/formInput/FormInput";
import FormInputSelect from "../../../components/formInput/FormInputSelect";
import { TrueFalseManageContext } from "../../../context/trueFalseManage/TrueFalseManageContext";

const CreateAccount = () => {
// login register

const {login,handleTrueLogin,} = useContext(TrueFalseManageContext)
  return (
    <>
      <div className="createAccountArea my-10 bg-white flex justify-center items-center ">
        <div className="accountCardArea  w-[90%] sm:w-[70%] lg:w-[476px]  bg-white p-8  border  border-border shadow-lg rounded-lg">
          <div className="formArea">
            <div className="formHeading">
              <h2 className="font-outfit font-[600] text-2xl text-ptag-color">
                {login ? "Login" : " Create Account"}
              </h2>
            </div>
            <div className="formSubHeading mt-1">
              <p className="font-outfit font-[400] text-lg text-ptag-color">
                Please {login ? "login " : "sign up"} to book appointment
              </p>
            </div>

            <div className="startForm mt-5">
              <form action="">
                {login ? (
                  <>
                    <FormInput type={"email"} lable="Email " />
                    <FormInput type={"password"} lable="Password " />
                  </>
                ) : (
                  <>
                    {" "}
                    <FormInput type={"text"} lable="Full Name " />
                    <FormInput type={"email"} lable="Email " />
                    <FormInputSelect
                      lable="Are You Doctor"
                      options={[
                        { label: "No", value: "no" },
                        { label: "yes", value: "yes" },
                      ]}
                    />
                    <FormInput type={"password"} lable="Password " />
                  </>
                )}

                <div className="submitButton w-full bg-primary rounded-lg hover:bg-[#000b6d] transition-all duration-500 p-2 text-center mt-2 mb-5">
                  <button className=" font-outfit  font-[500] text-lg  text-white">
                    {login ? "Login " : " Create Account"}
                  </button>
                </div>
              </form>
              <div className="haveAccountArea">
                <p className="font-outfit  font-[400] text-lg text-[#5E5E5E] ">
                  {login
                    ? "If you have not Account"
                    : "Already have an account?"}

                  <span onClick={handleTrueLogin} className="text-primary cursor-pointer ml-2 hover:text-[#000b6d] transition-all duration-500">
                    {login ? " Register" : "Login here"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
