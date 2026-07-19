"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  CheckCircle2,
  FileText,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto max-w-xl"
    >
      {/* Glow */}
      <div className="absolute -inset-5 -z-10 rounded-[40px] bg-violet-600/20 blur-3xl" />

      {/* Dashboard */}
      <div className="glass rounded-3xl border border-white/10 p-6 shadow-2xl">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h3 className="text-xl font-semibold text-white">
              AI Career Dashboard
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Your placement progress
            </p>

          </div>

          <div className="rounded-xl bg-emerald-500/15 px-3 py-2 text-sm font-medium text-emerald-400">
            Live
          </div>

        </div>

        {/* Top Cards */}

        <div className="grid grid-cols-2 gap-4">

          <Card
            icon={<FileText size={18} />}
            title="ATS Score"
            value="92%"
            color="text-sky-400"
          />

          <Card
            icon={<Brain size={18} />}
            title="AI Interview"
            value="88%"
            color="text-violet-400"
          />

          <Card
            icon={<Briefcase size={18} />}
            title="Portfolio"
            value="Ready"
            color="text-emerald-400"
          />

          <Card
            icon={<TrendingUp size={18} />}
            title="Placement"
            value="+24%"
            color="text-orange-400"
          />

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm text-slate-400">
              Weekly Progress
            </span>

            <span className="text-sm font-medium text-white">
              78%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 1.5 }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-500"
            />

          </div>

        </div>

        {/* Activity */}

        <div className="mt-8 space-y-4">

          <Activity
            title="Resume optimized"
            time="2 mins ago"
          />

          <Activity
            title="Mock interview completed"
            time="10 mins ago"
          />

          <Activity
            title="Portfolio published"
            time="Today"
          />

        </div>

      </div>
    </motion.div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}

function Card({
  icon,
  title,
  value,
  color,
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
    >
      <div className={`${color} mb-4`}>
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-bold text-white">
        {value}
      </h3>
    </motion.div>
  );
}

function Activity({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">

      <div className="flex items-center gap-3">

        <div className="rounded-full bg-emerald-500/20 p-2">
          <CheckCircle2
            size={16}
            className="text-emerald-400"
          />
        </div>

        <div>

          <p className="text-sm font-medium text-white">
            {title}
          </p>

          <p className="text-xs text-slate-400">
            {time}
          </p>

        </div>

      </div>

      <ArrowUpRight
        size={18}
        className="text-slate-500"
      />

    </div>
  );
}