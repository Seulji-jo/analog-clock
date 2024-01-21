import { stat } from "fs";
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
  degree: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  setDate: () => void;
  setTime: () => void;
  setDegree: () => void;
}

export const useTimeStore = create<TimeState>()(
  immer((set, get) => ({
    date: new Date(),
    time: {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    },
    degree: {
      hours: 0,
      minutes: 0,
      seconds: 0,
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
            hours: state.date.getHours(),
            minutes: state.date.getMinutes(),
            seconds: state.date.getSeconds(),
          };
        })
      );
    },
    setDegree: () => {
      set(
        produce((state) => {
          const { hours, minutes, seconds } = state.time;
          state.degree = {
            hours: (hours / 12) * 360 + (minutes / 60) * 30 + 90,
            minutes: (minutes / 60) * 360 + (seconds / 60) * 6 + 90,
            seconds: (seconds / 60) * 360 + 90,
          };
        })
      );
    },
  }))
);
