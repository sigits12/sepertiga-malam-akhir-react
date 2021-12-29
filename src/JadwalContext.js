import React, { createContext } from 'react';
import useFetch from "./useFetch";

export const JadwalContext = createContext();

const JadwalContextProvider = (props) => {

  // const dateNow = (new Date()).toISOString().split('T')[0];

  const url = 'https://api.myquran.com/v1/sholat/jadwal/1421/2021/12/29';

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
