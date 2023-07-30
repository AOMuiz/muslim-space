import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "twin.macro";

const LogIn = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().min(5).max(25).required(),
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
          <p tw="font-medium text-lg"> WELCOME BACK!</p>
        </fieldset>
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

        <button tw="bg-primary text-white rounded-md p-4 mx-10 hover:bg-blue-600">
          Log In
        </button>
      </form>
    </>
  );
};

export default LogIn;
