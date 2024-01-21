import AnalogClock from "../components/AnalogClock";

function ClockPage() {
  return (
    <div className="inline-flex flex-col gap-10 items-center justify-center">
      <h1 className="text-6xl text-center font-bold">Analog Clock</h1>
      <AnalogClock />
    </div>
  );
}

export default ClockPage;
