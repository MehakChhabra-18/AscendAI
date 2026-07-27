"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Logo from "../common/Logo";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-background">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT */}

        <div className="flex items-center justify-center px-6 py-12">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="w-full max-w-md"
          >

            <Logo />

            <h1 className="mt-10 text-4xl font-bold text-white">

              {title}

            </h1>

            <p className="mt-3 text-zinc-400 leading-7">

              {subtitle}

            </p>

            <div className="mt-10">

              {children}

            </div>

          </motion.div>

        </div>

        {/* RIGHT */}

        <div className="relative hidden overflow-hidden border-l border-white/5 lg:flex items-center justify-center">

          {/* Glow */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />

          <div className="relative">

            <div className="rounded-[40px] border border-white/5 bg-[#111113] p-10">

              <h2 className="text-3xl font-bold text-white">

                Build your dream career.

              </h2>

              <p className="mt-5 max-w-md leading-8 text-zinc-400">

                Resume Builder,
                Portfolio Studio,
                AI Interviews,
                Job Tracker,
                Analytics and much more —
                all in one workspace.

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}