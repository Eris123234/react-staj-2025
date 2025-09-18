import { useDrag } from "@use-gesture/react";
import { useState } from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  style: React.CSSProperties;
  question: number;
};

const Card = (props: Props) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [removed, setRemoved] = useState(false);

  const bind = useDrag(
    ({ down, movement: [mx, my], velocity: [vx, vy], direction: [dx, dy] }) => {
      // Başlangıçta hareket ediyorsa className gibi state ile kontrol edebilirsin
      if (down) {
        const xMulti = mx * 0.03;
        const yMulti = my / 80;
        const rotate = xMulti * yMulti;

        setStyle({
          transform: `translate(${mx}px, ${my}px) rotate(${rotate}deg)`,
        });
      } else {
        // bırakma anı (panend)
        const moveOutWidth = window.innerWidth;
        const keep = Math.abs(mx) < 80 || Math.abs(vx) < 0.5;

        if (keep) {
          // eski yerine dönsün
          setStyle({ transform: "" });
        } else {
          // ekran dışına fırlat
          const endX = Math.max(Math.abs(vx) * moveOutWidth, moveOutWidth);
          const toX = mx > 0 ? endX : -endX;
          const endY = Math.abs(vy) * moveOutWidth;
          const toY = my > 0 ? endY : -endY;

          const xMulti = mx * 0.03;
          const yMulti = my / 80;
          const rotate = xMulti * yMulti;

          setStyle({
            transform: `translate(${toX}px, ${
              toY + my
            }px) rotate(${rotate}deg)`,
          });

          setRemoved(true); // removed class eklenebilir
        }
      }
    }
  );

  if (removed) return null; // kart silinsin istiyorsan

  return (
    <div
      {...bind()}
      style={{ ...props.style, ...style }}
      className={`absolute flex flex-1 h-3/4 mt-16 select-none  bg-white rounded-3xl border-1 border-slate-400/20 shadow-2xl shadow-black/10 ${
        removed && "removed"
      }`}
    >
      <div className="flex flex-col justify-between gap-4 px-8 py-12 ">
        <div className="">
          {/* Tags */}
          <div className="flex gap-2">
            <span className="font-base text-blue-500">#ui</span>
            <span className="font-base text-blue-500">#ux</span>
            <span className="font-base text-blue-500">#interaction</span>
          </div>

          {/* Question */}
          <span className="text-slate-700 font-semibold text-2xl ">
            Why do people clear the screen multiple times when using a
            calculator?
          </span>

          {/* Answers & Viewed */}
          <div className="flex gap-8 text-slate-500">
            <span>10 answers</span>
            <span>12k views</span>
          </div>
        </div>

        {/* Question Creator */}
        <div className="flex gap-4">
          <img
            className="rounded-full w-12 h-12 bg-blue-500"
            src="https://api.dicebear.com/9.x/notionists/svg?seed=George"
            alt="avatar"
          />
          <div className="grid">
            <span className="text-slate-900 text-base font-semibold">
              Donat Twerski
            </span>
            <span className="text-slate-500 text-sm ">UX designer @uigate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
