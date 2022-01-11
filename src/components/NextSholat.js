import React, { useState, useEffect } from "react";

const NextSholat = (props) => {

  const jadwal = props.jadwal;

  const prays = ['ashar', 'dzuhur', 'isya', 'maghrib', 'subuh'];

  const prayerTimes = Object.fromEntries(Object.entries(jadwal.jadwal).filter(([key]) => prays.includes(key)));

  const calculateTimeLeft = () => {
    let timeLeft = [];

    for (const property in prayerTimes) {
      const t = prayerTimes[property].split(':')
      let diff = new Date().setHours(t[0], t[1], 0) - new Date();

      timeLeft.push({
        jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
        menit: Math.floor((diff / 1000 / 60) % 60),
        sholat: property
      });
    }

    timeLeft.sort((a, b) => {
      if (a.jam < 0) return 1;
      else if (b.jam < 0) return -1;
      else return a.jam - b.jam;
    });
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft[0]).forEach((interval, key) => {
    if (interval !== 'sholat') {
      if (!timeLeft[0][interval]) {
        return;
      }
      timerComponents.push(
        <span key={key}>
          {timeLeft[0][interval]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <div>
      <div>Sholat selanjutnya :  < p className="capitalize">{timeLeft[0].sholat}</p> dalam </div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  )
}

export default NextSholat;