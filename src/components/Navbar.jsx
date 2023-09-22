import React, { useState } from 'react'

const Navbar = () => {


    const [activeMenu, setActiveMenu] = useState("");

    // const currentUrl = window.location.pathname.split("/");
    console.log(activeMenu)

    const menuItems = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Treatment",
        link: "/treatment",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
    ];
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="h-[90px] flex items-center justify-between px-[22px] lg:px-[90px]">
        <div className="flex gap-3">
          <p className="font-light text-[36px]">sitelogo</p>
        </div>

        <div className="flex items-center gap-10 justify-between">
          <ul className="ml-6 lg:ml-[86px] flex gap-10 justify-between">
            {menuItems.map((item, index) => (
              //   <Link key={index} to={item.link}>
              <li
                className={`${
                  activeMenu == item.name ? "opacity-100" : "opacity-30"
                }  cursor-pointer`}
                onClick={() => {
                  setActiveMenu(item.name);
                }}
              >
                <a href={`${item.link}`}>{item.name}</a>
              </li>
              //   </Link>
            ))}
          </ul>
          <button
            className="text-white bg-black hover:bg-white hover:text-black hover:outline transition w-fit px-4 py-2 rounded-[5px] hidden lg:block"
            // onClick={() => navigate("/dashboard/create-event")}
          >
            Book an Appointment
          </button>
          {/* {isAuthenticated() ? (
            <Link to="/dashboard">
              <button className="hidden lg:block">Dashboard</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="hidden lg:block">Log in</button>
            </Link>
          )} */}
          {/* {openMenu ? (
            <AiOutlineClose
              className=""
              size={45}
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              className=""
              size={45}
              onClick={() => setOpenMenu(true)}
            />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Navbar