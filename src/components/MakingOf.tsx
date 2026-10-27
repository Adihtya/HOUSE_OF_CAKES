"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { MAKING_STEPS } from "@/data/content";

export function MakingOf() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = MAKING_STEPS[activeStepIndex];

  return (
    <section
      id="craft"
      className="py-24 sm:py-32 bg-[#FFF4E5] text-[#351C20] relative overflow-hidden"
      aria-label="The Art of Making"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8F1235] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8F1235]" />
              <span>The Atelier Choreography</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#8F1235] leading-tight">
              THE ART <br />
              <span className="italic font-normal text-[#F13D70]">of</span>{" "}
              MAKING.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#351C20]/80 leading-relaxed">
            Six disciplined stages of French baking science and tropical culinary
            sensibility, orchestrated every dawn in our open Parisian laboratory.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {MAKING_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#8F1235] text-white border-[#8F1235] shadow-lg scale-102"
                    : "bg-[#FFFBF5] text-[#351C20] border-[#FFA5BC]/30 hover:border-[#F13D70]"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold ${
                    isActive ? "text-[#FFD968]" : "text-[#F13D70]"
                  }`}
                >
                  STAGE {step.stepNumber}
                </span>
                <span className="font-serif text-sm font-bold mt-1 line-clamp-1">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Step Showcase */}
        <div className="bg-[#FFFBF5] rounded-3xl p-6 sm:p-10 shadow-xl border border-[#FFA5BC]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden shadow-inner bg-[#FFF0F4]">
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#351C20]/60 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#8F1235] text-white shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD968]" />
              <span>Choreography Phase {activeStep.stepNumber} / 06</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FFD968] block">
                Technical Protocol
              </span>
              <p className="text-sm font-medium mt-0.5">{activeStep.detail}</p>
            </div>
          </div>

          {/* Step Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F13D70]">
                Stage {activeStep.stepNumber} of 06
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#8F1235] leading-tight mt-1 mb-2">
                {activeStep.title}
              </h3>
              <p className="text-sm font-semibold text-[#F13D70] mb-4">
                {activeStep.subtitle}
              </p>
              <p className="text-sm sm:text-base text-[#351C20]/80 leading-relaxed mb-6 font-normal">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-xl bg-[#FFF4E5] border border-[#FFA5BC]/30 text-xs text-[#351C20]/80 space-y-1.5">
                <div className="font-bold text-[#8F1235] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#456B4A]" />
                  <span>Quality Protocol & Master Artisan Oversight</span>
                </div>
                <p>
                  Each batch undergoes texture testing and sugar refraction
                  calibration to maintain precise balance between tartness and creaminess.
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="pt-6 border-t border-[#FFA5BC]/20 flex items-center justify-between mt-6">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="text-xs font-bold uppercase tracking-wider text-[#351C20]/70 hover:text-[#8F1235] disabled:opacity-30 disabled:pointer-events-none"
              >
                &larr; Previous Stage
              </button>

              <button
                disabled={activeStepIndex === MAKING_STEPS.length - 1}
                onClick={() =>
                  setActiveStepIndex((prev) =>
                    Math.min(MAKING_STEPS.length - 1, prev + 1)
                  )
                }
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#8F1235] hover:text-[#F13D70] disabled:opacity-30 disabled:pointer-events-none"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
