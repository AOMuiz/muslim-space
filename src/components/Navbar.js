import "twin.macro";
import { IoLocationSharp } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
 return (
  <>
   <div tw="bg-gray-200 p-3 flex flex-row items-center justify-between">
    <div tw="flex flex-row items-center justify-center bg-white p-4 ml-6 [border: 1px solid #C89850] rounded-lg">
     <IoLocationSharp tw="w-6 h-7" />
     <p>Nigeria</p>
    </div>

    <div tw="flex flex-row items-center">
     <div tw="bg-white border-2  [border-color: #C89850] rounded-bl-lg rounded-tl-lg">
      <input type="text" placeholder="Search" tw="outline-none pl-2 w-64" />

      <select
       name="categories"
       id="item-select"
       tw="bg-white outline-none  border-l-2 h-10"
      >
       <option value="all-categories">All categories</option>
       <option value="shoe">Shoe</option>
       <option value="bag">Bag</option>
       <option value="cloth">Cloth</option>
       <option value="cap">Cap</option>
      </select>
     </div>
     <div tw="px-6 py-2 [background-color: #C89850] [border: 1px solid #C89850] text-white rounded-tr-lg rounded-br-lg">
      <p>Search</p>
     </div>
    </div>

    <div tw="flex flex-row items-center justify-between p-4 mr-6">
     <BsPerson tw="w-12 h-14 mr-14" />
     <MdAddShoppingCart tw="w-12 h-14 mr-14" />
     <BsBell tw="w-12 h-14" />
    </div>
   </div>

   <div tw="grid grid-cols-6 text-center p-4 items-center justify-between text-lg">
    <div>
     <p tw="text-3xl">Muslim Space</p>
    </div>
    <div>
     <select name="" id="" tw="bg-white outline-none">
      <option value="products">Products</option>
      <option value="services">Services</option>
      <option value="commercial">Commercial</option>
     </select>
    </div>
    <div>
     <select name="" id="" tw="bg-white outline-none">
      <option value="services&handwork">Services & Handwork</option>
      <option value="services&handwork">Services & Handwork</option>
      <option value="services&handwork">Services & Handwork</option>
     </select>
    </div>
    <div>
     <p>Sign up</p>
    </div>
    <div>
     <p>Sign in</p>
    </div>
    <div tw="[background-color: #C89850] text-white rounded-lg text-center w-2/5 justify-self-end p-2 mr-6">
     <p>Sell</p>
    </div>
   </div>
  </>
 );
};

export default Navbar;
