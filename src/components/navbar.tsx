import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    /* Logo  */
    <div className="wrapper h-[87px] mt-[45px] border-[1px] border-white ">
      <div className="flex justify-center ">
        <div className="helvetica ">
          <p className="font-bold text-[24px] text-white">
            <span className="font-bold text-[24px] text-[#FF9F0D]">Food</span>
            tuck
          </p>
        </div>
      </div>
      {/* Navbar  */}
      <div className="flex justify-start items-center gap-[32px] text-white inter text-[16px] font-weight-[400]">
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          HOME
        </Link>
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          Menu
        </Link>
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          Blog
        </Link>
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          Pages
        </Link>
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          About
        </Link>
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          Shop
        </Link>
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          Contact
        </Link>
        {/* search bar */}
        <div className="flex relative px-[500px]">
          <input
            className="border border-[#FF9F0D] p-2 px-4 rounded-lg"
            type="text"
            placeholder="Search..."
          />
          <BsSearch
            className="absolute left-[710px] mr-4 mt-3 text-gray-400 "
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
