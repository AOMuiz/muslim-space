import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import tw from "twin.macro";
import Image from "next/image";
import google from "../../public/google.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
// /** @jsxImportSource @emotion/react */

const SignUp = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("fullname is required"),
    email: yup.string().email().required("email is required"),
    password: yup.string().min(5).max(25).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required(),
    isAccept: yup.bool().oneOf([true], "Checkbox selection is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form tw="space-y-4 flex flex-col p-20" onSubmit={handleSubmit(onSubmit)}>
        <fieldset tw="text-center">
          <h1 tw="text-[#271C0C] font-bold text-4xl">
            CREATE A SELLER ACCOUNT
          </h1>
          <p tw="font-medium text-lg">Start selling on Muslim Space today!</p>
        </fieldset>
        <label htmlFor="name" tw="font-normal text-3xl">
          Name
        </label>
        <input
          id="name"
          type="text"
          tw="border-2 p-4 rounded-md"
          {...register("fullName")}
          placeholder="Full name (First and Last name)"
        />
        {errors.fullName && <p tw="text-red-400">{errors.fullName?.message}</p>}
        <label htmlFor="email" tw="font-normal text-3xl">
          Email
        </label>
        <input
          id="email"
          type="text"
          tw="border-2 p-4 rounded-md"
          {...register("email")}
          placeholder="example@gmail.com"
        />
        {errors.email && <p tw="text-red-400">{errors.email?.message}</p>}
        <label htmlFor="password" tw="font-normal text-3xl">
          Password
        </label>
        <input
          id="password"
          type="password"
          tw="border-2 p-4 rounded-md"
          {...register("password")}
          placeholder="min of 8 characters"
        />
        {errors.password && <p tw="text-red-400">{errors.password?.message}</p>}
        <label htmlFor="confirmPassword" tw="font-normal text-3xl">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          tw="border-2 p-4 rounded-md"
          {...register("confirmPassword")}
          placeholder="min of 8 characters"
        />
        {errors.confirmPassword && (
          <p tw="text-red-400">{errors.confirmPassword?.message}</p>
        )}
        <fieldset tw="space-x-2">
          <input
            id="isAccept"
            type="checkbox"
            {...register("isAccept")}
            tw="cursor-pointer"
          />
          <label htmlFor="isAccept" tw="font-normal text-lg cursor-pointer">
            I accept the terms and privacy policy
          </label>
          {errors.isAccept && (
            <p tw="text-red-400">{errors.isAccept?.message}</p>
          )}
        </fieldset>
        <button tw="bg-[#C89850] text-white rounded-md p-4 mx-10 hover:bg-blue-600">
          Create account
        </button>
      </form>
      <div tw="text-center">
        <div>
          <span tw="text-[#81818F]">
            By Registering, you agree to Muslim Space
          </span>
          <span tw="text-[#C89850]">User Agreement</span>
          <span tw="text-[#81818F]">and</span>
          <span tw="text-[#C89850]"> Cookies & Internet Advertising.</span>
        </div>
        <div tw="py-10">
          <span>----------------</span>
          <span>or</span>
          <span>----------------</span>
        </div>
        <div tw="flex justify-center space-x-4 ">
          <div tw="bg-[#F6F7F9] w-56 h-28 flex justify-center items-center cursor-pointer">
            <Image src={google} alt="" width={50} />
          </div>
          <div tw="bg-[#F6F7F9] w-56 h-28 flex justify-center items-center cursor-pointer">
            <Image src={facebook} alt="" width={50} />
          </div>
          <div tw="bg-[#F6F7F9] w-56 h-28 flex justify-center items-center cursor-pointer">
            <Image src={twitter} alt="" width={50} />
          </div>
        </div>
        <div tw="p-10">
          <span tw="font-normal	text-6xl	">Already have an account? </span>
          <span tw="font-extrabold text-6xl	underline	"> Log in</span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
