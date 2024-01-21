import AnalogClock from "../components/AnalogClock";

function ClockPage() {
  return (
    <main className="w-screen h-screen flex">
      <div className="inline-flex flex-col gap-20 items-center">
        <h1 className="text-6xl text-center font-bold">Analog Clock</h1>
        <AnalogClock />
      </div>
    </main>
  );
}

export default ClockPage;
