import { useEffect, useRef } from "react";
import HandOfClock from "./HandOfClock";
import { useTimeStore } from "../store/useTimeStore";

function AnalogClock() {
  const hourHandRef = useRef<HTMLDivElement>(null);
  const minuteHandRef = useRef<HTMLDivElement>(null);
  const secondHandRef = useRef<HTMLDivElement>(null);

  const { date, time, degree, setDate, setTime, setDegree } = useTimeStore();

  useEffect(() => {
    const currentDate = setInterval(setDate, 1000);
    setTime();
    return () => clearInterval(currentDate);
  }, [date, setDate, setTime]);

  useEffect(() => {
    setDegree();
  }, [time, setDegree]);

  useEffect(() => {
    if (hourHandRef.current) {
      hourHandRef.current.style.transform = `rotate(${degree.hours}deg)`;
    }
  }, [degree.hours]);
  useEffect(() => {
    if (minuteHandRef.current) {
      minuteHandRef.current.style.transform = `rotate(${degree.minutes}deg)`;
    }
  }, [degree.minutes]);
  useEffect(() => {
    if (secondHandRef.current) {
      secondHandRef.current.style.transform = `rotate(${degree.seconds}deg)`;
    }
  }, [degree.seconds]);

  return (
    <div className="w-60 h-60 bg-black rounded-[50%] flex items-center justify-center">
      <div className="w-56 h-56 bg-white rounded-[50%] relative after:content-[''] after:w-[14px] after:h-[14px] after:rounded-[50%] after:absolute after:top-[50%] after:right-[50%] after:translate-x-[50%] after:translate-y-[-50%] after:bg-black">
        <HandOfClock ref={secondHandRef} kind="second" />
        <HandOfClock ref={minuteHandRef} kind="minute" />
        <HandOfClock ref={hourHandRef} kind="hour" />
      </div>
    </div>
  );
}

export default AnalogClock;
