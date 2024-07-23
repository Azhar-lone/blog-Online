// importing dependencies
import React, { useEffect } from "react";

// importing Shadcn Components
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { Skeleton } from "@/components/ui/skeleton";

//My components
import { ModeToggle } from "@/components/myUi/mode-toggle";
import ProfileButton from "./Profile/ProfileButton";
import Hint from "@/components/myUi/Hint";
import Slider from "@/components/myUi/Slider";

// types
import User from "@/types/user";

interface navItemsType {
  href: string;
  Text: string;
}

const navItems: navItemsType[] = [
  {
    href: "/",
    Text: "Home",
  },
  {
    href: "/aboutus",
    Text: "AboutUs",
  },
  {
    href: "/blogs",
    Text: "Blogs",
  },
];

const Nav: React.FC = () => {

  return (
    <>
      <TopBar>
        <div className="flex justify-around items-center gap-2  sm:h-[100%] ">
          <ul className=" lg:flex hidden justify-around gap-5">
            {navItems.map((element, index) => (
              <Link
                className="flex gap-2 items-center    hover:pb-2 "
                key={index}
                href={element.href}
              >
                {element.Text}
              </Link>
            ))}
          </ul>
          {isLogin ? (
            <div className="flex gap-2">
              <div className="  sm:flex  gap-2 ">
                <Hint label={"Change Theme"}>
                  <ModeToggle />
                </Hint>
              </div>
              <ProfileButton />
            </div>
          ) : (
            <div className="flex gap-2 ">
              <ModeToggle />

              <Button variant={"ghost"} className="flex gap-1">
                <Link href={"/login"}>Login</Link>
              </Button>
              <Button
                // variant={"ghost"}
                className="flex gap-1"
              >
                <Link href={"/signup"}>Signup</Link>
              </Button>
            </div>
          )}

          <Slider side="right">
            <div className="flex items-center flex-col gap-5">
              {navItems.map((element, index) => (
                <Link
                  className="flex gap-2 items-center    hover:pb-2 "
                  key={index}
                  href={element.href}
                >
                  {element.Text}
                </Link>
              ))}
            </div>
          </Slider>
        </div>
      </TopBar>

      <SideBar>
        <ul className=" flex  flex-col justify-start gap-5  p-8">
          {navItems.map((element, index) => (
            <Hint label={element.Text} key={index}>
              <Link
                className="flex flex-col gap-2 items-center   hover:border-b-4 border-primary hover:pt-2  "
                href={element.href}
              >
                {element.Text}
              </Link>
            </Hint>
          ))}
        </ul>
      </SideBar>
    </>
  );
};

export default Nav;

interface propsType {
  children: React.ReactNode;
  className?: string;
}

export function SideBar(props: propsType) {
  return (
    <div
      className={` fixed   hidden sm:flex lg:hidden w-[8%] 
            h-[88vh] shadow-lg bg-background shadow-foreground  left-0 top-[10vh]  gap-4  
         justify-center backdrop-blur-sm items-start
         ${props.className}
         `}
    >
      {props.children}
    </div>
  );
}

export function TopBar(props: propsType) {
  return (
    <div
      className={` bg-background w-full h-[10vh] shadow-foreground
         flex gap-2 flex-col shadow-2xl  top-0 fixed sm:justify-start justify-around pt-2 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
