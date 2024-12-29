import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import Container from "../Container/Container";
const FooterMenu = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },

  {
    id: "2",
    name: "About us",
    path: "/about",
  },
  {
    id: "3",
    name: "Contact us",
    path: "/contact",
  },
  {
    id: "4",
    name: "Privacy policy",
    path: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <Container>
      <footer className=" border-b flex flex-col  gap-6 lg:flex-row justify-between  py-3">
        <div className="footerLeft">
          <img className="lg:w-[217px] xxsm:w-[150px] h-[46px]" src={assets.logo} alt="" />
          <p className="max-w-[464px] text-text-color font-[400] text-[16px] font-outfit mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footerMiddle ">
          <b className="mb-3 inline-block">COMPANY</b>
          {
            <ul className="lg:mt-6 flex flex-col gap-2">
              {FooterMenu?.length > 0
                ? FooterMenu.map((footerItem) => {
                    return (
                      <li key={footerItem.id}>
                        <NavLink
                          to={footerItem.path}
                          className=" font-outfit font-[400] text-[18px] "
                        >
                          {footerItem.name}
                        </NavLink>
                      </li>
                    );
                  })
                : "no menu found"}
            </ul>
          }
        </div>
        <div className="footerRight">
          <b className="mb-3 inline-block">GET IN TOUCH</b>
          <ul className="lg:mt-6">
            <li>+1-212-456-7890</li>
            <li>sekhmontajulali1997@gmail.com</li>
          </ul>
        </div>
      </footer>
      <div className="footerBottom text-center my-5">
        <p className="font-outfit font-[400] lg:text-[18px]">
          Copyright © 2024 devMontaj inspired by GreatStack - All Right
          Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
