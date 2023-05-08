import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@rhookform/resolvers/yup";
import * as yup from "yup";
import tw from "twin.macro";

const SignUp = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(25).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.rec("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const OnSubmit = (data) => {
    console.log(data);
  };

  return (
    <form tw=" space-y-4 flex flex-col p-24" onSubmit={handleSubmit(OnSubmit)}>
      <fieldset tw="text-center">
        <h1 tw="text-[#271C0C] font-bold text-4xl">CREATE A SELLER ACCOUNT</h1>
        <p tw="font-medium text-lg">Start selling on Muslim Space today!</p>
      </fieldset>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        tw="border-2 p-4 rounded-md"
        {...register("fullName")}
        placeholder="Full name (First and Last name)"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        tw="border-2 p-4 rounded-md"
        {...register("email")}
        placeholder="example@gmail.com"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        tw="border-2 p-4 rounded-md"
        {...register("password")}
        placeholder="min of 8 characters"
      />
      <label htmlFor="confirmPassword">Confirm Password </label>
      <input
        id="confirmPassword"
        type="password"
        tw="border-2 p-4 rounded-md"
        {...register("confirmPassword")}
        placeholder="min of 8 characters"
      />
      <fieldset tw="space-x-2">
        <input
          id="isAccept"
          type="checkbox"
          name="isAccept"
          tw="cursor-pointer"
        />
        <label htmlFor="isAccept" tw="font-normal text-lg cursor-pointer">
          I accept the terms and privacy policy
        </label>
      </fieldset>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Sign up
      </button>
    </form>
  );
};

export default SignUp;
