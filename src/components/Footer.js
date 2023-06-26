import React from "react";
import "twin.macro";
import Image from "next/image";
import badge from "src/assets/images/badge.png";
import facebook from "src/assets/images/facebook3.svg";
import instagram from "src/assets/images/instagram3.svg";
import linkedin from "src/assets/images/linkedin3.svg";
import twitter from "src/assets/images/twitter3.svg";
import youtube from "src/assets/images/youtube3.svg";
import appStore from "src/assets/images/appStore.svg";
import googlePlay from "src/assets/images/googlePlay.svg";

const Footer = () => {
 return (
  <div>
   <div tw="bg-[#271C0C] flex flex-col items-center justify-center p-2">
    <p tw="[color: #b48948] pt-4 text-lg ">Subscribe on our newsletter</p>
    <p tw="text-sm text-white">
     Get daily news on upcoming offers from many suppliers all over the world
    </p>
    <div tw="flex flex-row items-center justify-center p-2 pt-5 pb-10">
     <div tw="">
      <input
       type="email"
       placeholder="Email"
       tw="placeholder:pl-4 py-1.5 rounded placeholder:text-sm outline-none"
      />
     </div>
     <p tw="text-sm text-white border-2 border-transparent rounded [background-color: #b48948] p-2 ml-2">
      Subscibe
     </p>
    </div>

    <div tw="grid grid-cols-6 text-white mt-5 mx-28 text-sm mb-14">
     <div>
      <Image src={badge} alt="" tw="h-10" />
      <p tw="py-5">
       Best information about the company goes here but now lorem ipsum is
      </p>
      <div tw="flex flex-row items-center justify-center">
       <Image src={facebook} alt="" />
       <Image src={twitter} alt="" />
       <Image src={instagram} alt="" />
       <Image src={linkedin} alt="" />
       <Image src={youtube} alt="" />
      </div>
     </div>

     <div tw="all-child:py-0.5 ml-14">
      <p tw="[color: #b48948] py-2">About</p>
      <p>About Us</p>
      <p>Find Store</p>
      <p>Categories</p>
     </div>
     <div tw="all-child:py-0.5">
      <p tw="[color: #b48948] py-2">Resources</p>
      <p>Learn About Islam</p>
      <p>Non-Muslims</p>
      <p>Muslims</p>
      <p>Business Tips</p>
     </div>
     <div tw="all-child:py-0.5">
      <p tw="[color: #b48948] py-2">Information</p>
      <p>Help Center</p>
      <p>Money Refund</p>
      <p>Contact Us</p>
      <p>Privacy Policy</p>
     </div>
     <div tw="all-child:py-0.5">
      <p tw="[color: #b48948] py-2">For Users</p>
      <p>Login</p>
      <p>Register</p>
      <p>Settings</p>
      <p>My Orders</p>
     </div>
     <div tw="all-child:py-0.5 px-0">
      <p tw="[color: #b48948] py-2">Get App</p>
      <div>
       <Image src={appStore} alt="" tw="h-10 w-fit" />
      </div>
      <div>
       <Image src={googlePlay} alt="" tw="h-10 w-fit mt-0.5" />
      </div>
     </div>
    </div>
   </div>
   <div tw="flex flex-row items-center justify-between p-2 text-sm px-28 bg-[#C89850] text-white">
    <p>&copy;2022 Muslim Space. </p>
    <p>English</p>
   </div>
  </div>
 );
};

export default Footer;

// const Data = [
//  {
//   title: "About",
//   data: ["About Us", "Find Store", "Categories"],
//  },
//  {
//   title: "Resources",
//   data: ["Learn About Islam", "Non-Muslims", "Muslims", "Business Tips"],
//  },
//  {
//   title: "Information",
//   data: ["Help Center", "Money Refund", "Contact us"],
//  },
//  {
//   title: "For Users",
//   data: ["Login", "Register", "Settings", "My Orders"],
//  },
//  {
//   title: "Get App",
//   data: [],
//  },
// ];
