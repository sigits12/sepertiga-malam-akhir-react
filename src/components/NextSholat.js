import React, { useState, useEffect } from "react";

const NextSholat = (props) => {

  const jadwal = props.jadwal;

  const [sholat, setSholat] = useState([]);
  const [timer, setTimer] = useState('');

  const getSholat = () => {

    const prays = ['ashar', 'dzuhur', 'isya', 'maghrib', 'subuh'];
    const prayerTimes = Object.fromEntries(Object.entries(jadwal.jadwal).filter(([key]) => prays.includes(key)));

    const sortedTimes = [];
    Object.entries(prayerTimes).map(([key, value]) => {
      const t = value.split(':')
      let diff = new Date().setHours(t[0], t[1], 0) - new Date();
      let hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      let minutes = Math.floor(diff / 1000 / 60);
      sortedTimes.push({ sholat: key, hours: hours, minutes: minutes, diff: diff });
      return 0;
    })

    sortedTimes.sort((a, b) => {
      if (a.hours < 0) return 1;
      else if (b.hours < 0) return -1;
      else return a.hours - b.hours;
    });

    setSholat(sortedTimes[0]);
    refreshTime(sortedTimes[0]);
  }

  const refreshTime = (jadwal) => {

    let result = jadwal.hours+ ":" + jadwal.minutes

    setTimer(result)
  }

  setInterval(getSholat, 60000);

  useEffect(() => {
    getSholat();
  }, []);

  return (
    <div>Sholat selanjutnya :  < p className="capitalize">{sholat.sholat}</p> {timer} </div>
  )
}

export default NextSholat;