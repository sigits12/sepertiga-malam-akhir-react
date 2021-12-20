import React, { createContext } from 'react';
import useFetch from "./useFetch";

export const JadwalContext = createContext();

const JadwalContextProvider = (props) => {

  const dateNow = (new Date()).toISOString().split('T')[0];

  const { error, isPending, data: jadwal } = useFetch(`https://jadwal-shalat-api.herokuapp.com/daily?date=${dateNow}&cityId=214`)

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
