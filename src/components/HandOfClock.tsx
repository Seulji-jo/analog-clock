import { Ref, forwardRef } from "react";

interface HandOfClockProps {
  kind: "second" | "minute" | "hour";
}

function HandOfClock({ kind }: HandOfClockProps, ref: Ref<HTMLDivElement>) {
  const styles = {
    second:
      "w-[2px] h-[100px] bg-red-500 top-[calc(50%-100px)] left-[calc(50%-1px)]",
    minute:
      "w-[6px] h-[80px] bg-gray-600 top-[calc(50%-80px)] left-[calc(50%-3px)]",
    hour: "w-[6px] h-[60px] bg-black top-[calc(50%-60px)] left-[calc(50%-3px)]",
  };
  return (
    <div ref={ref} className={`absolute origin-bottom ${styles[kind]}`}></div>
  );
}

export default forwardRef(HandOfClock);
