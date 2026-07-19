"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

import Button from "../common/Button";
import DashboardPreview from "./DashboardPreview";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <HeroBackground />

      <div className="container relative z-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}

            <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2">

              <Sparkles size={16} className="text-violet-400" />

              <span className="text-sm text-slate-300">
                AI Powered Career Operating System
              </span>

            </div>

            {/* Heading */}

            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-white lg:text-7xl">

              Build Your

              <span className="gradient-text block">
                Dream Career
              </span>

              Faster with AI

            </h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              Create ATS-friendly resumes, prepare for interviews,
              build professional portfolios and track your placement
              journey — all from one powerful AI platform.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
              >
                Get Started
              </Button>

              <Button
                variant="ghost"
                size="lg"
                leftIcon={<PlayCircle size={20} />}
              >
                Watch Demo
              </Button>

            </div>

            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-10">

              <div>
                <h2 className="text-3xl font-bold text-white">
                  5000+
                </h2>

                <p className="mt-2 text-slate-400">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  95%
                </h2>

                <p className="mt-2 text-slate-400">
                  ATS Success
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  300+
                </h2>

                <p className="mt-2 text-slate-400">
                  Companies
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <DashboardPreview />
          </motion.div>

        </div>

      </div>
    </section>
  );
}