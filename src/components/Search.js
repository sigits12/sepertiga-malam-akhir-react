import React, { useContext } from 'react';
import useFetch from "../useFetch";
import { JadwalContext } from '../JadwalContext';

const Search = () => {

  const url = `https://api.myquran.com/v1/sholat/kota/semua`;

  const { error, isPending, data: lokasi } = useFetch(url);

  const { setIdLokasi } = useContext(JadwalContext);

  function handleChange(event) {

    const value = event.target.value;
    const opt = [].find.call(event.target.list.options, o => o.value === value);

    if (opt) {
      setIdLokasi(value);
      event.target.value = opt.textContent;
    }
  }

  return (
    <>
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      { lokasi &&
        <div>
          <label>Pilih Kota/Kabupaten</label>
          <input list="kota" type="text" id="inputLokasi" onChange={handleChange} />
          <datalist id="kota">
            {lokasi.map((loc, key) => {
              return <option key={key} value={loc.id}>{loc.lokasi}</option>
            })}
          </datalist>
          <div id="resultID"></div>
        </div>
      }
    </>
  )
}

export default Search;