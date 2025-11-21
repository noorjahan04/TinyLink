import React from "react";
import { Link } from "react-router-dom";

const HERO =
  "https://shortenworld.com/shared-resource/media/2023/12/What-is-tinyurl.png";

export default function Landing() {
  return (
    <div className="relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50 pointer-events-none"></div>

      {/* Floating radial glows */}
      <div className="absolute -top-24 -left-24 w-64 h-64 md:w-80 md:h-80 bg-pink-300 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-80 md:h-80 bg-indigo-300 opacity-30 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-5 sm:px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-5">
            Shorten Links <br />
            <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Track Clicks.
            </span>
            <br /> Share Smarter.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mx-auto lg:mx-0 max-w-md">
            TinyLink helps you create beautiful, trackable short links with
            instant analytics. Fast, simple, and made for creators.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="/add"
              className="px-8 py-3 rounded-xl shadow-lg bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold text-lg transform hover:scale-105 transition-all duration-200 text-center"
            >
              Get Started
            </Link>

            <Link
              to="/dashboard"
              className="px-8 py-3 rounded-xl border border-gray-300 bg-white/60 backdrop-blur-md shadow hover:shadow-lg text-gray-700 font-semibold text-lg transition-all duration-200 text-center"
            >
              Dashboard
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {[["Total Links", "0"], ["Total Clicks", "0"], ["Avg Clicks", "0"]].map(([label, value], i) => (
              <div
                key={i}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-md shadow-xl text-center border border-gray-100 hover:shadow-2xl transition-all duration-200"
              >
                <p className="text-xs sm:text-sm text-gray-500">{label}</p>
                <p className="text-2xl sm:text-3xl font-bold mt-1 text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT HERO IMAGE */}
        <div className="flex justify-center lg:justify-end relative">
          <img
            src={HERO}
            alt="Hero"
            className="w-64 sm:w-72 md:w-96 lg:w-[420px] drop-shadow-xl animate-float"
          />
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
}
