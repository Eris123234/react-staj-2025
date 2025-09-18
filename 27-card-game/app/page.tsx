"use client";

import { useEffect, useState } from "react";
import BottomNav from "./_components/BottomNav";
import Card from "./_components/Card";
import Header from "./_components/Header";
import SwipeInfo from "./_components/SwipeInfo";

const page = () => {
  const [questions, setQuestions] = useState([1, 2, 3]);

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1F4EC5] via-[#CFC5F9] to-[#FBEFDF]">
      <div className="flex-1 p-8 pt-12 text-white flex flex-col gap-6">
        <Header />

        {/* Info and Card container */}
        <div className="flex flex-col flex-1 gap-4 relative">
          <SwipeInfo />

          {questions.map((x, i, questions) => (
            <Card
              question={x}
              key={i}
              style={{
                transform: `translateY(${24 * i}px) scale(${(20 - i) / 20})`,
                zIndex: questions.length - i,
                opacity: (10 - i) / 10,
              }}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default page;
