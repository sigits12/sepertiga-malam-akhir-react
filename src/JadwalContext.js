import React, { createContext, useState, useEffect } from 'react';
import useFetch from "./useFetch";

export const JadwalContext = createContext();

const JadwalContextProvider = (props) => {

  const [idLokasi, setIdLokasi] = useState('1301');

  const dateNow = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate();

  const url = `https://api.myquran.com/v1/sholat/jadwal/${idLokasi}/${dateNow}`;
  const { error, isPending, data: jadwal } = useFetch(url);


  useEffect(() => {
    setIdLokasi(idLokasi);
  }, [idLokasi]);

  return (
    <JadwalContext.Provider
      value={{
        setIdLokasi,
        error,
        isPending,
        jadwal,
      }}
    >
      {props.children}
    </JadwalContext.Provider>
  );
};

export default JadwalContextProvider;
