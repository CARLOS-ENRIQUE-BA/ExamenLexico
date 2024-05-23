import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ResponsableTable.css';

function ResponseTable({ response }) {
  if (!response) {
    return null;
  }

  return (
    <table className='response-table'>
      <thead>
        <tr>
          <th>Nombre del Producto</th>
          <th>Precio</th>
          <th>IVA</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {response.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.precio.toFixed(2)}</td>
            <td>{item.iva.toFixed(2)}</td>
            <td>{item.total.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ResponseTable.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      iva: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};

export default ResponseTable;
