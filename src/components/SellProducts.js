import Image from "next/image";
import click from "../assets/images/click.png";
import upload from "../assets/images/upload.png";
import sell from "../assets/images/sell.png";
import tw, {styled} from "twin.macro";

const SELLPRODUCTS_ARRAY = [
  {
    id: 1,
    name: "click",
    img: click,
  },
  {
    id: 2,
    name: "Upload",
    img: upload,
  },
  {
    id: 3,
    name: "Sell",
    img: sell,
  },
];

const SellProducts = () => {
  return (
    <div>
      <div tw="text-center">
        <span tw="text-[#271C0C] font-semibold text-3xl">
          Sell your product/skills with{" "}
        </span>
        <span tw="text-[#C6974F] font-semibold text-4xl">Muslim Space</span>
      </div>
      <div tw="flex  py-4 flex-wrap gap-8 justify-center">
        {SELLPRODUCTS_ARRAY.map((product) => (
          <div
            key={product.id}
            tw="flex flex-col justify-center items-center rounded-md space-y-16 hover:shadow-lg cursor-pointer bg-[#F9F9F9] w-64 h-72 border-2"
          >
            <Image src={product.img} alt="" width={90} />
            <div tw="flex items-center gap-3">
              <div tw="w-12 h-12 rounded-full text-lg flex items-center justify-center text-white bg-[#C6974F]">
                {product.id}
              </div>
              <p tw="font-medium text-2xl">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellProducts;

// const StyledInput = styled.input`
//   color: black;
//   ${({ hasBorder }) => hasBorder && tw`border-purple-500`}
// `