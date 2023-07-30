import React from "react";
import Image from "next/image";
import tw from "twin.macro";
import flag from "../../public/icons/flag.svg";
import review from "../../public/icons/review.svg";
import zayyan from "../../public/images/zayyan.png";
import language from "../../public/icons/language.svg";
import fav_button from "../../public/icons/fav_button.svg";
import just_decor from "../../public/images/just_decorBig.jpg";
import decor from "../../public/images/decor.png";
import verified_user from "../../public/icons/verified_user.svg";

const ProductDetails = () => {
  return (
    <div tw="py-5 px-8">
      <h2 tw="font-playfair text-2xl font-bold text-primary mb-6">
        Apple IPhone 7 Plus (32 GB) Hot Price (Used)
      </h2>
      <div tw="grid grid-cols-3 gap-10">
        <div tw="flex gap-4 col-span-2">
          <div tw="w-fit my-auto space-y-2">
            <Image src={zayyan} alt="" width={130} />
            <Image src={decor} alt="" width={130} />
            <Image src={decor} alt="" width={130} />
            <Image src={zayyan} alt="" width={130} />
            <Image src={zayyan} alt="" width={130} />
          </div>

          <div tw="">
            <Image src={just_decor} alt="" />
          </div>
        </div>

        <div tw="bg-gray-100 rounded-lg p-3 ">
          <div tw="flex justify-between items-center bg-white m-4 p-4 ">
            <h1 tw="text-lg font-roboto font-bold">#200,000</h1>
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
              <button tw="bg-primary text-white p-2 rounded-lg">
                Show Contact
              </button>
              <button tw="bg-white text-primary border-2 border-primary p-2 rounded-lg">
                Sellers Profile
              </button>
            </div>
          </div>
          <div tw="flex justify-between items-center bg-white m-4 p-4 ">
            <p tw="font-bold text-[#7A5D31]">Reviews</p>
            <Image src={review} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
