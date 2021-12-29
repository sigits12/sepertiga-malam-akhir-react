import React from 'react';

const TableJadwalSholat = (props) => {

  const jadwal = props.jadwal
  return (
    <div className="home">
      <div>
        <div>
          <p>{jadwal.jadwal.tanggal + ' - ' + jadwal.lokasi}</p>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>SUBUH</th>
                <th>DZUHUR</th>
                <th>ASHAR</th>
                <th>MAGHRIB</th>
                <th>ISYA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{jadwal.jadwal.subuh}</td>
                <td>{jadwal.jadwal.dzuhur}</td>
                <td>{jadwal.jadwal.ashar}</td>
                <td>{jadwal.jadwal.maghrib}</td>
                <td>{jadwal.jadwal.isya}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}

export default TableJadwalSholat;
