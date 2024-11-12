"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function Content() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  return (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-lg p-10 shadow-2xl max-w-md">
      <h1 className="text-4xl font-extrabold text-yellow-300 animate-pulse mb-4 text-center">
        🎉 Selamat! 🎉
      </h1>
      <p className="text-center text-lg leading-relaxed">
        Aku Instagram dengan username{" "}
        <span className="font-bold text-pink-300">@{username}</span> telah
        bertambah{" "}
        <span className="text-yellow-300 font-bold">500 followers!</span>
      </p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white font-roboto-flex overflow-hidden">
      {/* Confetti Effect */}

      {/* Suspense Boundary for Content */}
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-float delay-1000 opacity-60">
          <Image
            src="/star.svg"
            alt="star"
            width={80}
            height={80}
            className="absolute top-16 left-10 opacity-75"
          />
          <Image
            src="/star.svg"
            alt="star"
            width={60}
            height={60}
            className="absolute bottom-20 right-16 opacity-50"
          />
          <Image
            src="/star.svg"
            alt="star"
            width={100}
            height={100}
            className="absolute bottom-32 left-40 opacity-60"
          />
        </div>
      </div>
    </div>
  );
}
