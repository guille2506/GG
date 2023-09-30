import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// pages/index.js
// pages/index.js
// pages/index.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import io from 'socket.io-client';
import cuentas from '../pages/cuenta/cuentas'; // Asegúrate de ajustar la ruta según la ubicación real de tu archivo cuentas.js

const socket = io('http://localhost:3001'); // Reemplaza con la URL de tu servidor WebSocket

function HomePage() {
  const [saldos, setSaldos] = useState({});

  useEffect(() => {
    // Escucha eventos WebSocket para recibir actualizaciones de saldo
    socket.on('actualizarSaldo', (datosActualizados) => {
      setSaldos(datosActualizados);
    });

    return () => {
      socket.off('actualizarSaldo'); // Limpia el evento cuando la página se desmonta
    };
  }, []);

  return (
    <div>
      <h1>Cuentas Bancarias</h1>
      <ul>
        {Object.values(cuentas).map((cuenta) => (
          <li key={cuenta.id}>
            <Link href={`/cuenta/${cuenta.id}`}>
              {cuenta.nombre} - Saldo: ${saldos[cuenta.id] || cuenta.saldo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
