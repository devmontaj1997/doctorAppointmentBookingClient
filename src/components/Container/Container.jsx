// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <>
      <div className=" container md:w-[90%] w-full m-auto  ">{children}</div>
    </>
  );
};

export default Container;
