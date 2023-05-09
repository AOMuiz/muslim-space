import Image from "next/image";
import tw from "twin.macro";
import cloth from "../assets/images/cloth.png";
import arrow from "../assets/images/arrow.png";

const Category = () => {
  return (
    <div tw="p-4">
      <h2 tw="text-center">Top Category</h2>

      <div tw="border-2 rounded-2xl w-96 h-72">
        <div tw="flex items-center justify-around space-x-12 h-32 bg-[#EDDFC8]">
          <div>
            <h1 tw="text-[#C6974F] font-medium text-4xl">Clothing</h1>
            <p tw="text-2xl">[20]</p>
          </div>
          <Image src={cloth} alt="" width={95} />
        </div>
        <div>
          <div tw="flex space-x-3 p-3">
            <Image src={arrow} alt="" width={10} />
            <p>Women</p>
          </div>
          <div tw="flex space-x-3 p-3">
            <Image src={arrow} alt="" width={10} />
            <p>Baby</p>
          </div>
          <div tw="flex space-x-3 p-3">
            <Image src={arrow} alt="" width={10} />
            <p>Men</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

const CATEGORY_ARRAY = [{ category: "Clothing", price: "[20]", img: "" }];
