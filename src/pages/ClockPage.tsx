import AnalogClock from "../components/AnalogClock";
import Tooltip from "../components/ToolTip";

function ClockPage() {
  return (
    <main className="w-screen h-screen flex justify-center">
      <div className="pt-[60px] inline-flex flex-col gap-20 items-center">
        <h1 className="text-6xl text-center font-bold">Analog Clock</h1>
        <Tooltip>
          <AnalogClock />
        </Tooltip>
      </div>
    </main>
  );
}

export default ClockPage;
