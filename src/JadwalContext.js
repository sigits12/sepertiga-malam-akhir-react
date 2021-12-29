import React, { createContext } from 'react';
import useFetch from "./useFetch";

export const JadwalContext = createContext();

const JadwalContextProvider = (props) => {

  const dateNow = new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate();

  const url = `https://api.myquran.com/v1/sholat/jadwal/1421/${dateNow}`;

  const { error, isPending, data: jadwal } = useFetch(url)

  return (
    <JadwalContext.Provider
      value={{
        error, 
        isPending,
        jadwal
      }}
    >
      {props.children}
    </JadwalContext.Provider>
  );
};

export default JadwalContextProvider;
