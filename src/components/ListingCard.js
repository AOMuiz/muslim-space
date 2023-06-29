import tw from "twin.macro";
import Image from "next/image";
import profilePic from "../../public/jameel.png";
import like from "../../public/vector.png";
import Bstar from "../../public/Bstar.png";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

const ListingCard = () => {
  return (
    <div tw="bg-white px-4 py-16">
      <div tw="bg-white mx-auto inline-block rounded-lg overflow-hidden border-2 border-gray-200">
        <Link
          href="/product/1"
          tw="p-3 inline-block bg-white border-b border-gray-200"
        >
          <Image
            src={profilePic}
            width={200}
            height={200}
            alt="Picture of jameel"
          />
        </Link>
        <div tw="p-2.5">
          <div tw="flex justify-between">
            <div>
              <p tw="text-sm text-gray-400 ">Clothing</p>
              <span tw="flex ">
                <Image src={Bstar} width={12} height={12} alt="Bstar symbol" />
                <Image src={Bstar} width={12} height={12} alt="Bstar symbol" />
                <Image src={Bstar} width={12} height={12} alt="Bstar symbol" />
                <Image src={Bstar} width={12} height={12} alt="Bstar symbol" />
                <Image src={Bstar} width={12} height={12} alt="Bstar symbol" />
              </span>
            </div>
            <div tw="mx-1.5">
              <div tw="p-2 border-2 border-gray-100 rounded cursor-pointer hover:bg-blue-900">
                <Image src={like} width={15} height={15} alt="likes symbol" />
              </div>
            </div>
          </div>
          <div>
            <h3 tw="text-xl py-2">High quality....</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
