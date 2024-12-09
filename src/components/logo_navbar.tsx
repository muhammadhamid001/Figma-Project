import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Logo_navbar = () => {
  return (
    // Logo
    <div className="wrapper w-[1320px] h-[87px] mt-[45px] ">
      <div className="flex justify-center m-auto ">
        <div className="helvetica ">
          <p className="font-bold text-[24px] text-white">
            <span className="font-bold text-[24px] text-[#FF9F0D]">Food</span>
            tuck
          </p>
        </div>
      </div>
      {/* Navbar  */}
      <header className="inter text-[#FFFFFF] text-[16px] font-weight-[400] body-font">
        <div className="wrapper w-[1320px] mx-auto flex justify-between">
          <nav className="flex justify-center gap-[32px] md:mr-auto  ">
            <Link className="navbar__link relative" href={"#"}>
              HOME
            </Link>
            <Link className="navbar__link relative" href={"#"}>
              Menu
            </Link>
            <Link className="navbar__link relative" href={"#"}>
              Blog
            </Link>
            <Link className="navbar__link relative" href={"#"}>
              Pages
            </Link>
            <Link className="navbar__link relative" href={"#"}>
              <IoIosArrowDown className="absolute top-[11%] left-[50%] translate-x-6 " />
              About
            </Link>
            <Link className="navbar__link relative" href={"#"}>
              Shop
            </Link>
            <Link className="navbar__link relative" href={"#"}>
              Contact
            </Link>
          </nav>

          <div className="inline-flex items-center mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search...."
              className="inter text-white text-[16px] border border-[#FF9F0D] w-[310px] h-[54px] outline-none bg-transparent p-2 px-4 rounded-full"
            />
            <BsSearch className="relative left-[-40px] top-0 text-[#FFFFFF] w-[24px] h-[24px]" />
          </div>

          <div className="inline-flex items-center mt-4 md:mt-0">
            <HiOutlineShoppingBag className="relative left-[-10px] top-0 text-[#FFFFFF] w-[24px] h-[24px]" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Logo_navbar;
