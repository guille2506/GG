import React from 'react';
import { useRouter } from 'next/router';

// Página de detalles de una tarjeta de crédito
function CreditCardDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>Detalles de la Tarjeta de Crédito</h2>
      <p>Mostrando detalles para la tarjeta con ID: {id}</p>
      {/* Agrega aquí los detalles reales de la tarjeta */}
    </div>
  );
}

export default CreditCardDetail;
