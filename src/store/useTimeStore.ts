import { produce } from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface TimeState {
  date: Date;
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  setDate: () => void;
  setTime: () => void;
}

export const useTimeStore = create<TimeState>()(
  immer((set) => ({
    date: new Date(),
    time: {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    },
    setDate: () => {
      set(
        produce((state) => {
          state.date = new Date();
        })
      );
    },
    setTime: () => {
      set(
        produce((state) => {
          state.time = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
          };
        })
      );
    },
  }))
);
