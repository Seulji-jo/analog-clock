import { useEffect, useRef, useState } from "react";
import HandOfClock from "./HandOfClock";
import { useTimeStore } from "../store/useTimeStore";

function AnalogClock() {
  const hourHandRef = useRef<HTMLDivElement>(null);
  const minuteHandRef = useRef<HTMLDivElement>(null);
  const secondHandRef = useRef<HTMLDivElement>(null);

  const { date, time, setDate, setTime } = useTimeStore();
  const [degree, setDegree] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const currentDate = setInterval(setDate, 1000);
    setTime();
    return () => clearInterval(currentDate);
  }, [date, setDate, setTime]);

  useEffect(() => {
    const { hours, minutes, seconds } = time;
    setDegree({
      hours: (hours / 12) * 360 + (minutes / 60) * 30,
      minutes: (minutes / 60) * 360 + (seconds / 60) * 6,
      seconds: (seconds / 60) * 360,
    });
  }, [time]);

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
