import React from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import flag from "../assets/icons/flag.svg";
import review from "../assets/icons/review.svg";
import zayyan from "../assets/images/zayyan.png";
import language from "../assets/icons/language.svg";
import fav_button from "../assets/icons/fav_button.svg";
import just_decor from "../assets/images/just_decor.png";
import decor from "../assets/images/decor.png";
import verified_user from "../assets/icons/verified_user.svg";

const ProductDetailsPage = () => {
  return (
    <div tw="grid grid-cols-4 gap-10 ">
      <div tw=" border-solid mx-auto my-auto space-y-2">
        <Image src={zayyan} alt="" width={130} />
        <Image src={decor} alt="" width={130} />
        <Image src={decor} alt="" width={130} />
        <Image src={zayyan} alt="" width={130} />
        <Image src={zayyan} alt="" width={130} />
      </div>

      <div tw="col-span-2 mx-auto my-auto">
        <Image src={just_decor} alt="" width={600} />
      </div>

      <div tw="bg-gray-100 rounded-lg p-3">
        <div tw="flex justify-between items-center bg-white m-4 p-4 ">
          <h1 tw="text-lg font-roboto font-bold">£200,000</h1>
          <Image src={fav_button} alt="" />
        </div>
        <div tw="m-4 space-y-4 bg-white p-4">
          <div tw="flex gap-2">
            <div tw="bg-[#C6F3F1] p-3 rounded-sm">R</div>
            <div tw="font-roboto">
              <p>Posted by:</p>
              <p>Ridwan, Abu Mujaahid</p>
            </div>
          </div>
          <div tw="py-4 space-y-4">
            <div tw="flex gap-4 items-center">
              <Image src={flag} width={20} height={20} alt="" />
              <p tw="text-slate-600">Nigeria, Ilorin</p>
            </div>

            <div tw="flex gap-4 items-center">
              <Image src={verified_user} width={20} height={20} alt="" />
              <p tw="text-slate-600">Verified Seller</p>
            </div>

            <div tw="flex gap-4 items-center">
              <Image src={language} width={20} height={20} alt="" />
              <p tw="text-slate-600">Worldwide shipping</p>
            </div>
          </div>
          <div tw="flex flex-col gap-2 py-2">
            <button tw="bg-[#C89850] text-white p-2 rounded-lg">
              Show Contact
            </button>
            <button tw="bg-white text-[#C89850] border-2 border-[#C89850] p-2 rounded-lg">
              Sellers Profile
            </button>
          </div>
        </div>
        <div tw="flex justify-between items-center bg-white m-4 p-4 ">
          <p>Reviews</p>
          <Image src={review} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
