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
          <table className="border-separate border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300">SUBUH</th>
                <th className="border border-gray-300">DZUHUR</th>
                <th className="border border-gray-300">ASHAR</th>
                <th className="border border-gray-300">MAGHRIB</th>
                <th className="border border-gray-300">ISYA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300">{jadwal.jadwal.subuh}</td>
                <td className="border border-gray-300">{jadwal.jadwal.dzuhur}</td>
                <td className="border border-gray-300">{jadwal.jadwal.ashar}</td>
                <td className="border border-gray-300">{jadwal.jadwal.maghrib}</td>
                <td className="border border-gray-300">{jadwal.jadwal.isya}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}

export default TableJadwalSholat;
