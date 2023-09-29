import React from 'react';
import { useRouter } from 'next/router';

// Página para editar una tarjeta de crédito existente
function EditCreditCard() {
  const router = useRouter();
  const { id } = router.query;

  // Lógica para editar la tarjeta de crédito con el ID proporcionado
  return (
    <div>
      <h2>Editar Tarjeta de Crédito</h2>
      <p>Editando la tarjeta de crédito con ID: {id}</p>
      {/* Agrega aquí un formulario para editar la tarjeta */}
    </div>
  );
}

export default EditCreditCard;
