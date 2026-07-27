"use client";

import Link from "next/link";
import { User, Mail } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "./AuthLayout";
import PasswordField from "./PasswordField";
import SocialLogin from "./SocialLogin";

import Divider from "../ui/Divider";
import Input from "../ui/Input";
import Button from "../common/Button";

import {
  registerSchema,
  RegisterSchema,
} from "@/lib/validations/auth";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterSchema) {
    console.log(data);

    // Firebase Registration Later
  }

  return (
    <AuthLayout
      title="Create your account 🚀"
      subtitle="Start your placement journey with AscendAI."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          leftIcon={<User size={18} />}
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          leftIcon={<Mail size={18} />}
          error={errors.email?.message}
          {...register("email")}
        />

        <PasswordField
          label="Password"
          placeholder="Create a password"
          error={errors.password?.message}
          {...register("password")}
        />

        <PasswordField
          label="Confirm Password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          loading={isSubmitting}
        >
          Create Account
        </Button>

        <Divider />

        <SocialLogin />

        <p className="text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}