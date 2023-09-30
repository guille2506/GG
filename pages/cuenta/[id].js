// pages/cuenta/[id].js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Reemplaza con la URL de tu servidor WebSocket

function CuentaDetail({ cuenta }) {
  const router = useRouter();
  const { id } = router.query;
  const [monto, setMonto] = useState('');
  const [cuentaDestino, setCuentaDestino] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleTransferencia = async () => {
    const montoTransferencia = parseFloat(monto);

    if (isNaN(montoTransferencia) || montoTransferencia <= 0) {
      setMensaje('Ingrese un monto válido.');
      return;
    }

    if (id === cuentaDestino) {
      setMensaje('No puedes transferir dinero a la misma cuenta.');
      return;
    }

    if (cuenta.saldo - montoTransferencia < 0) {
      setMensaje('Saldo insuficiente en la cuenta.');
      return;
    }

    // Realiza la transferencia y actualiza el saldo
    cuenta.saldo -= montoTransferencia;

    // Emite eventos WebSocket para notificar la transferencia
    socket.emit('transferencia', { cuentaOrigen: id, cuentaDestino, montoTransferencia });

    setMensaje(`Transferencia exitosa de $${montoTransferencia}`);
  };

  useEffect(() => {
    // Escucha eventos WebSocket para recibir actualizaciones de saldo
    socket.on('actualizarSaldo', (datosActualizados) => {
      // Actualiza el saldo en la página según los datos recibidos
      // 'datosActualizados' debería contener los saldos actualizados de todas las cuentas
      const saldoActualizado = datosActualizados[id];
      setCuenta({ ...cuenta, saldo: saldoActualizado });
    });

    return () => {
      socket.off('actualizarSaldo'); // Limpia el evento cuando la página se desmonta
    };
  }, []);

  return (
    <div>
      <h2>Detalles de la Cuenta Bancaria</h2>
      <p>Mostrando detalles para la cuenta con ID: {id}</p>
      <p>Nombre: {cuenta.nombre}</p>
      <p>Saldo Actual: ${cuenta.saldo}</p>

      <div>
        <h3>Realizar Transferencia</h3>
        <div>
          <label>Cuenta de Destino:</label>
          <input
            type="text"
            placeholder="ID de la cuenta de destino"
            value={cuentaDestino}
            onChange={(e) => setCuentaDestino(e.target.value)}
          />
        </div>
        <div>
          <label>Monto a Transferir:</label>
          <input
            type="number"
            placeholder="Monto a transferir"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <button onClick={handleTransferencia}>Transferir</button>
        <p>{mensaje}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  // Simula la carga de datos de cuentas desde tu fuente de datos (base de datos, API, etc.)
  // Luego, selecciona la cuenta específica según el ID de la ruta.
  const cuentas = {
    '1': { id: '1', nombre: 'Cuenta A', saldo: 5000 },
    '2': { id: '2', nombre: 'Cuenta B', saldo: 3000 },
    // Agrega más cuentas aquí
  };
  const cuenta = cuentas[id];

  if (!cuenta) {
    return {
      notFound: true, // Devuelve una página 404 si la cuenta no se encuentra
    };
  }

  return {
    props: {
      cuenta,
    },
  };
}

export default CuentaDetail;
