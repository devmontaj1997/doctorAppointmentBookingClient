import { useContext, useEffect } from "react";
import FormInput from "../../../components/formInput/FormInput";
import FormInputSelect from "../../../components/formInput/FormInputSelect";
import { TrueFalseManageContext } from "../../../context/trueFalseManage/TrueFalseManageContext";
import UseFormHandleHook from "../../../hook/formHook/UseFormHandleHook";
import { useDispatch, useSelector } from "react-redux";
import {
  setMessageEmty,
  userSelector,
} from "../../../reduxToolKit/features/user/userSlice";
import createTost from "../../../utiles/reactTostify";
import {
  userLoginApiSlice,
  userRegisterApiSlice,
} from "../../../reduxToolKit/features/user/userApiSlice";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { loading, message, error } = useSelector(userSelector);
  // usedispatch
  const dispatch = useDispatch();

  // check login or register
  const { login, handleTrueLogin } = useContext(TrueFalseManageContext);

  // user registation
  const { input, handleInputChange, handleFormReset } = UseFormHandleHook({
    name: " ",
    email: "",
    userRole: "",
    password: "",
  });
  // user login
  const {
    input: loginInput,
    handleInputChange: handleloginInputChange,
    handleFormReset: loghandleFormReset,
  } = UseFormHandleHook({
    email: "",
    password: "",
  });

  // for userRegister submit
  const userRegisterSubmit = (e) => {
    e.preventDefault();

    dispatch(userRegisterApiSlice(input));
  };
  // for userLogin submit
  const userLoginSubmit = (e) => {
    e.preventDefault();

    dispatch(userLoginApiSlice(loginInput));
  };
  useEffect(() => {
    if (message) {
      createTost(message, "success");
      dispatch(setMessageEmty());
      handleFormReset();
      loghandleFormReset();

      // If registration is successful, set login state to true
      if (message.includes("Registration successful")) {
        handleTrueLogin(true); // Trigger login state
      }
      // If registration is successful, set login state to true
      if (message.includes(" Login  successfully")) {
        navigate("/");
      }
    }
    if (error) {
      createTost(error);
      dispatch(setMessageEmty());
    }
  }, [
    message,
    error,
    dispatch,
    navigate,
    handleFormReset,
    handleTrueLogin,
    loghandleFormReset,
  ]);
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
                    <FormInput
                      onchangeEvent={handleloginInputChange}
                      value={loginInput.email}
                      name="email"
                      type={"email"}
                      lable="Email "
                    />
                    <FormInput
                      onchangeEvent={handleloginInputChange}
                      value={loginInput.password}
                      name="password"
                      type={"password"}
                      lable="Password "
                    />
                  </>
                ) : (
                  <>
                    <FormInput
                      onchangeEvent={handleInputChange}
                      value={input.name}
                      name="name"
                      type={"text"}
                      lable="Full Name "
                    />
                    <FormInput
                      onchangeEvent={handleInputChange}
                      value={input.email}
                      name="email"
                      type={"email"}
                      lable="Email "
                    />
                    <FormInputSelect
                      onchangeEvent={handleInputChange}
                      lable="Are You Doctor"
                      name="userRole"
                      value={input.userRole}
                      options={[
                        { label: "No", value: "user" },
                        { label: "yes", value: "doctor" },
                      ]}
                    />
                    <FormInput
                      onchangeEvent={handleInputChange}
                      value={input.password}
                      name="password"
                      type={"password"}
                      lable="Password "
                    />
                  </>
                )}

                <div
                  onClick={login ? userLoginSubmit : userRegisterSubmit}
                  className="submitButton w-full bg-primary rounded-lg hover:bg-[#000b6d] transition-all duration-500 p-2 text-center mt-2 mb-5"
                >
                  <button className="font-outfit font-[500] text-lg text-white">
                    {/* Show button text based on two conditions */}
                    {loading
                      ? login
                        ? "Logging in..."
                        : "Creating Account..."
                      : login
                      ? "Login"
                      : "Create Account"}
                  </button>
                </div>
              </form>
              <div className="haveAccountArea">
                <p className="font-outfit  font-[400] text-lg text-[#5E5E5E] ">
                  {login
                    ? "If you have not Account"
                    : "Already have an account?"}

                  <span
                    onClick={handleTrueLogin}
                    className="text-primary cursor-pointer ml-2 hover:text-[#000b6d] transition-all duration-500"
                  >
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
