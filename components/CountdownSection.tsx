"use client";
import Countdown from "react-countdown";

const date = new Date("2027-03-13T00:00:00");

export default function CountdownSection() {
  return (
    <div className="text-center my-16">
      <Countdown
        date={date}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex justify-center gap-6 text-2xl font-light">
            <div>{days}d</div>
            <div>{hours}h</div>
            <div>{minutes}m</div>
            <div>{seconds}s</div>
          </div>
        )}
      />
    </div>
  );
}
