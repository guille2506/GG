// // db.js
// const accounts = [
//     { id: '1', name: 'Cuenta A', balance: 5000 },
//     { id: '2', name: 'Cuenta B', balance: 3000 },
//     // Agrega más cuentas si es necesario
//   ];
  
//   export function fetchAccountsFromDatabase() {
//     // Simulación de una consulta a la base de datos
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(accounts);
//       }, 500);
//     });
//   }
  
//   export function fetchAccountDetailsFromDatabase(id) {
//     // Simulación de una consulta a la base de datos por ID
//     return new Promise((resolve, reject) => {
//       const account = accounts.find((acc) => acc.id === id);
//       if (account) {
//         setTimeout(() => {
//           resolve(account);
//         }, 500);
//       } else {
//         reject(new Error('Cuenta no encontrada'));
//       }
//     });
//   }
  