import { Ref, forwardRef } from "react";

interface HandOfClockProps {
  kind: "second" | "minute" | "hour";
}

function HandOfClock({ kind }: HandOfClockProps, ref: Ref<HTMLDivElement>) {
  const styles = {
    second: "w-[4px] h-[100px] bg-red-500",
    minute: "w-[6px] h-[80px] bg-gray-700",
    hour: "w-[6px] h-[50px] bg-black",
  };
  return (
    <div
      ref={ref}
      className={`absolute bottom-[50%] left-[50%] origin-bottom translate-x-[-50%] ${styles[kind]}`}
    ></div>
  );
}

export default forwardRef(HandOfClock);
