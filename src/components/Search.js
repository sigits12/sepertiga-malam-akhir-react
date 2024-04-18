import React from 'react';
import useFetch from "../utils/useFetch";

const Search = (props) => {

  const url = `https://api.myquran.com/v2/sholat/kota/semua`;

  const { error, isPending, data: lokasi } = useFetch(url);

  function handleChange(event) {

    const value = event.target.value;
    const opt = [].find.call(event.target.list.options, o => o.value === value);

    if (opt) {
      props.setSearchValue(value);
      event.target.value = opt.textContent;
    }
  }

  return (
    <div>
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      { lokasi &&

        <label className="relative block">
          <span className="sr-only block text-sm font-medium text-gray-700">Search</span>
          <input className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Cari Kota..." type="text" name="search" list="kota" id="inputLokasi" onChange={handleChange} />
          <datalist id="kota">
            {lokasi.data.map((loc, key) => {
              return <option key={key} value={loc.id}>{loc.lokasi}</option>
            })}
          </datalist>
        </label>
      }
    </div>
  )
}

export default Search;