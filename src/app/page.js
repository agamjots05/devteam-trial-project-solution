"use client"

import Header from '@/components/Header';
import { useState, useEffect } from 'react';

export default function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setInfo(data));
      console.log(info)
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#f5f8f1]">
      <Header />
      <div className='returnValues'>
        <ul>
          {info.map((country, index) => (
            <li  key={index}>
              <h2>COUNTRY NAME: {country.name.common} CAPITOL: {country.capital} REGION: {country.region} </h2>
              {country.flags && (
                <img
                  src={country.flags.png}
                  width={50}
                  height={60}
                />
              )}
            </li>

          ))}
        </ul>
      </div>
    </main>
  );
}
