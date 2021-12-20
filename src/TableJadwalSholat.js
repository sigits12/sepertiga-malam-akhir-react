import React, { useContext } from 'react';
import { JadwalContext } from './JadwalContext';

const TableJadwalSholat = () => {
  const { error, isPending, jadwal } = useContext(JadwalContext);

  return (
    <div className="home">
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      { jadwal &&
        <div>
          <div>
            <p>{jadwal.date+' - '+jadwal.region}</p>
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
                  {jadwal.data.map((x, key) => (
                    <td key={key}>{x.time}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  )

}

export default TableJadwalSholat;
