"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "./AuthLayout";
import PasswordField from "./PasswordField";
import SocialLogin from "./SocialLogin";

import Divider from "../ui/Divider";
import Input from "../ui/Input";
import Button from "../common/Button";

import {
  loginSchema,
  LoginSchema,
} from "@/lib/validations/auth";

export default function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    console.log(data);

    // Backend later
  }

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Continue your placement journey with AscendAI."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <Input
  label="Email"
  placeholder="Enter your email"
  leftIcon={<Mail size={18} />}
  error={errors.email?.message}
  {...register("email")}
/>

        <PasswordField
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex justify-end">

          <Link
            href="/forgot-password"
            className="text-sm text-zinc-400 hover:text-white"
          >
            Forgot Password?
          </Link>

        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          loading={isSubmitting}
        >
          Login
        </Button>

        <Divider />

        <SocialLogin />

        <p className="text-center text-sm text-zinc-500">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-medium text-white hover:underline"
          >
            Create Account
          </Link>

        </p>

      </form>
    </AuthLayout>
  );
}