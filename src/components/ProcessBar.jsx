import React from "react";
import {
  UserPlus,
  CreditCard,
  BarChart3,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { MdPeopleAlt } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoBriefcaseSharp } from "react-icons/io5";
import { BiSolidCylinder } from "react-icons/bi";

export default function ProcessBar({ onOpenCreateModal }) {
  return (
    <section
      id="how-it-works"
      className="relative mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Outer Floating Pill Bar */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 items-center">
          {/* Step 1: CREATE OR JOIN */}
          <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-black/5 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#1A4E3D]/15 flex items-center justify-center text-[#1A4E3D] shrink-0">
              <MdPeopleAlt className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xs font-black tracking-wider uppercase text-[#0B5D4B]">
                CREATE OR JOIN
              </h4>
              <p className="text-[12px] leading-tight text-[#8C9686] mt-1">
                Start your Àjọ with your circle or join one by invitation.
              </p>
            </div>
          </div>

          {/* Step 2: CONTRIBUTE */}
          <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-black/5 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#1A4E3D]/15 flex items-center justify-center text-[#1A4E3D] shrink-0">
              <BiSolidCylinder className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black tracking-wider uppercase text-[#0B5D4B]">
                CONTRIBUTE
              </h4>
              <p className="text-[12px] leading-tight text-[#8C9686] mt-1">
                Pay your contribution securely through PallyPot.
              </p>
            </div>
          </div>

          {/* Center Call To Action Pill Button */}
          <div className="flex justify-center my-2 lg:my-0 sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => onOpenCreateModal?.("create")}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0B5D4B] hover:bg-[#0B382B] text-[#F7F4EB] text-sm font-bold tracking-wide rounded-full shadow-lg shadow-emerald-950/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.03] border border-[#236850]"
            >
              <span>Create your Àjọ</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Step 3: STAY ON TRACK */}
          <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-black/5 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#1A4E3D]/15 flex items-center justify-center text-[#1A4E3D] shrink-0">
              <BsFillBarChartFill className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black tracking-wider uppercase text-[#0B5D4B]">
                STAY ON TRACK
              </h4>
              <p className="text-[11px] leading-tight text-[#8C9686] mt-1">
                See contributions, deadlines and group progress.
              </p>
            </div>
          </div>

          {/* Step 4: GET YOUR TURN */}
          <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-black/5 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#1A4E3D]/15 flex items-center justify-center text-[#1A4E3D] shrink-0">
              <IoBriefcaseSharp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black tracking-wider uppercase text-[#0B5D4B]">
                GET YOUR TURN
              </h4>
              <p className="text-[11px] leading-tight text-[#8C9686] mt-1">
                Know your payout date and receive your share when it's due.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Below Bar */}
      <div className="text-center mt-5 px-2">
        <span className="text-[11px] uppercase font-bold tracking-[0.25em] sm:tracking-[0.5em] text-[#8C9686]">
          COMMUNITY SAVING MADE EASY
        </span>
      </div>
    </section>
  );
}
