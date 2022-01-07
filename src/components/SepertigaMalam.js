import React, { useState, useEffect } from 'react';

const Sepertigamalam = (props) => {

  const jadwal = props.jadwal;

  const [result, setResult] = useState();

  const calc = (maghrib, subuh) => {

    maghrib = maghrib.split(":");
    subuh = subuh.split(":");

    let maghribDate = new Date(0, 0, 0, maghrib[0], maghrib[1], 0);
    let subuhDate = new Date(0, 0, 1, subuh[0], subuh[1], 0);
    let diff = subuhDate.getTime() - maghribDate.getTime();

    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);
    minutes = (hours * 60) + minutes;
    let sepertiga = Math.floor(minutes / 3)
    let startSepertiga = new Date(subuhDate.getTime() - sepertiga * 60000);

    let result = (startSepertiga.getHours() < 9 ? "0" : "") + startSepertiga.getHours() + ":" + (startSepertiga.getMinutes() < 9 ? "0" : "") + startSepertiga.getMinutes()

    setResult(result);
  }

  useEffect(() => {
    jadwal &&
      calc(jadwal.jadwal.maghrib, jadwal.jadwal.subuh)
  }, [jadwal])

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <div>
        <label htmlFor="result" style={{ marginRight: '10px' }}>Sepertiga malam akhir dimulai pukul : </label>
        <p id="result">{result}</p>
      </div>
    </div>
  )
}

export default Sepertigamalam;