import React, { useState, useEffect } from "react";

const NextSholat = (props) => {

  const jadwal = props.jadwal;

  const [sholat, setSholat] = useState('');
  const [timer, setTimer] = useState('');

  const getSholat = () => {

    const tanggal = jadwal.jadwal.date.split("-");
    const times = [];

    const prays = ['ashar', 'dzuhur', 'isya', 'maghrib', 'subuh'];
    const prayerTimes = Object.fromEntries(Object.entries(jadwal.jadwal).filter(([key]) => prays.includes(key)));

    Object.entries(prayerTimes).map(([key, value]) => times.push(value));
    // prayerTimes.map(([sholat, value]) => {
    //   console.log(sholat);
    // })

    // const date1 = new Date(tanggal[0], tanggal[1]-1, tanggal[2],  );
    // const now = new Date(2000, 0, 1)

    const currentTime = new Date();
    const timeDiff = [];

    times.filter(time => {
      // const _meridianPosition = time.indexOf('AM') > -1 ? 'AM' : 'PM';

      let _time = parseInt(time);
      let _time1 = parseInt('19:40');
      // }
      // console.log(currentTime.getHours() - _time)
      const k = Math.abs(currentTime.getHours() - _time);
      timeDiff.push({ hour: time, diff: k });
    });

    timeDiff.sort((a, b) => {
      return a.diff - b.diff;
    });

    console.log(timeDiff[0].hour);


  }

  const refreshTime = () => {

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const formattedString = `${hour} : ${minute} : ${second}`;
    setTimer(formattedString)
  }

  setInterval(refreshTime, 1000);

  useEffect(() => {
    getSholat();
  }, []);

  return (
    <p>Sholat selanjutnya :  {sholat} dalam {timer} </p>
  )
}

export default NextSholat;