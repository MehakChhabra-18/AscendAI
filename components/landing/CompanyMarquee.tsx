"use client";

import Marquee from "react-fast-marquee";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "NVIDIA",
  "Atlassian",
  "Goldman Sachs",
  "JP Morgan",
  "Flipkart",
  "Walmart",
  "Infosys",
  "TCS",
];

export default function CompanyMarquee() {
  return (
    <section className="py-16">

      <div className="container">

        <p className="mb-10 text-center text-sm uppercase tracking-[0.3em] text-slate-500">
          Trusted by students targeting
        </p>

        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
        >
          {companies.map((company) => (
            <div
              key={company}
              className="mx-8 rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-md"
            >
              <span className="text-lg font-semibold text-slate-300">
                {company}
              </span>
            </div>
          ))}
        </Marquee>

      </div>

    </section>
  );
}