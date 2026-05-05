import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="wrapper pt-28 mb-10 md:mb-16">
      <div className="library-hero-card">
        <div className="library-hero-content">
          {/* Left Section */}
          <div className="library-hero-text">
            <h1 className="library-hero-title text-4xl font-bold font-serif">
              Your Library
            </h1>
            <p className="library-hero-description">
              Convert your books into interactive AI conversations.{" "}
              <b className="hidden md:block" /> Listen, learn, and discuss your
              favorite reads.
            </p>
            <Link href="/books/new">
              <button className="library-cta-primary mt-4 flex items-center justify-center cursor-pointer">
                <span className=" text-3xl font-light mb-1 mr-2">+</span>
                <span className=" text-[#212a3b]">Add new book</span>
              </button>
            </Link>
          </div>

          {/* Center Part - Desktop */}
          <div className="library-hero-illustration-desktop">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and a globe"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Center Part - Mobile (Hidden on Desktop) */}
          <div className="library-hero-illustration">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and a globe"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Right Section - Steps Card */}
          <div className="library-steps-card min-w-[260px] max-w-[280px] z-10 shadow-soft-md">
            <ul className="space-y-6">
              {/* Step 1 */}
              <li className="library-step-item">
                <div className=" w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">
                  1
                </div>
                <div className=" flex flex-col">
                  <h3 className="libraray-step-title text-lg font-bold">
                    Upload PDF
                  </h3>
                  <p className="library-step-description text-gray-500">
                    Add your book file
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="library-step-item">
                <div className=" w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">
                  2
                </div>
                <div className=" flex flex-col">
                  <h3 className="libraray-step-title text-lg font-bold">
                    AI Processing
                  </h3>
                  <p className="library-step-description text-gray-500">
                    We analyze the content
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="library-step-item">
                <div className=" w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">
                  3
                </div>
                <div className=" flex flex-col">
                  <h3 className="libraray-step-title text-lg font-bold">
                    Voice Chat
                  </h3>
                  <p className="library-step-description text-gray-500">
                    Discuss with AI
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
