import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react';
import Link from 'next/link';

// Componente para mostrar una lista de tarjetas de crédito
function CreditCardList({ creditCards }) {
  return (
    <ul>
      {creditCards.map((card) => (
        <li key={card.id}>
          <Link href={`/credit-cards/${card.id}`}>
            {card.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Página principal que muestra la lista de tarjetas de crédito
function HomePage({ creditCards }) {
  return (
    <div>
      <h1>Tarjetas de Crédito</h1>
      <CreditCardList creditCards={creditCards} />
    </div>
  );
}

// Esta función se ejecuta en tiempo de compilación para obtener datos estáticos
export async function getStaticProps() {
  // Simulación de obtención de tarjetas de crédito desde una API o base de datos
  const creditCards = [
    { id: '1', name: 'Tarjeta A' },
    { id: '2', name: 'Tarjeta B' },
    // Agrega más tarjetas aquí
  ];

  return {
    props: { creditCards },
  };
}

export default HomePage;

