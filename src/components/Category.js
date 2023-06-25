import Image from "next/image";
import { styled, css } from "twin.macro";
import cloth from "../assets/images/cloth.png";
import arrow from "../assets/images/arrow.png";
import chair from "../assets/images/chair.png";
import device from "../assets/images/device.png";
import sawblade from "../assets/images/saw-blade.png";
import footwear from "../assets/images/footwear.png";
import grocery from "../assets/images/grocery.png";

const CATEGORY_ARRAY = [
  {
    id: 1,
    categoryName: "Clothing",
    price: "[20]",
    img: cloth,
    subCategories: ["women", "Baby", "Men"],
  },
  {
    id: 2,
    categoryName: "Furniture",
    price: "[15]",
    img: chair,
    subCategories: ["Chair", "Table", "Wardrobe"],
  },
  {
    id: 3,
    categoryName: "Devices",
    price: "[90]",
    img: device,
    subCategories: ["Computer", "Mobile Phone", "Bluetooth"],
  },
  {
    id: 4,
    categoryName: "Capentry",
    price: "[20]",
    img: sawblade,
    subCategories: ["women", "Baby", "Men"],
  },
  {
    id: 5,
    categoryName: "Cobler",
    price: "[15]",
    img: footwear,
    subCategories: ["Chair", "Table", "Wardrobe"],
  },
  {
    id: 6,
    categoryName: "Grocery",
    price: "[90]",
    img: grocery,
    subCategories: ["Foodstuffs", "Fruits", "Beverages"],
  },
  {
    id: 7,
    categoryName: "Hire a pro",
    price: "[15]",
    img: footwear,
    subCategories: ["Barber", "Laundry Man", "Developer"],
  },
];

const Category = () => {
  return (
    <div tw="p-5">
      <h2 tw="text-center text-[#271C0C] font-semibold text-5xl mb-3 font-playfair">
        Top Category
      </h2>
      <CardListContainer>
        {CATEGORY_ARRAY.map((category) => (
          <div
            key={category.id}
            tw="hover:shadow-lg cursor-pointer border-2 rounded-2xl bg-[#F9F9F9]"
          >
            <div tw="flex items-center justify-around px-2 rounded-t-xl space-x-14 h-32 bg-[#EDDFC8]">
              <div tw="space-y-2">
                <h1 tw="text-[#C6974F] font-medium text-4xl">
                  {category.categoryName}
                </h1>
                <p tw="text-2xl">{category.price}</p>
              </div>
              <Image
                src={category.img}
                alt=""
                width={95}
                height={95}
                tw="bg-white p-2 rounded-lg"
              />
            </div>
            <div tw="py-2">
              {category.subCategories.map((subcategory, index) => (
                <div key={index} tw="flex space-x-3 p-3">
                  <Image src={arrow} alt="" width={10} />
                  <p>{subcategory}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardListContainer>
    </div>
  );
};

export default Category;

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  margin-block: 2rem;
`;
