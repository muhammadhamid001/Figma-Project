import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className="container flex justify-center w-[1320px] m-auto sm:mt-0 min-[400px]">
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
        <IoIosArrowDown  className="absolute top-[20%] left-[50%] translate-x-6 "/>
          About
         </Link>
         <Link className="mt-[20px] navbar__link relative" href={"#"}>
          Shop
         </Link>
        <Link className="mt-[20px] navbar__link relative" href={"#"}>
          Contact
         </Link>
      </div>
    </div>
  )
}

export default Navbar