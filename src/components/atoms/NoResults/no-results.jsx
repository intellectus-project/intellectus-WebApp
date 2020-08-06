import React from 'react';
import './_style.scss';

const NoResults = () => (
  <div className="NoResultsContainer">
    <div>
      <img src="img/NoResults.png" alt="img" />
    </div>
    <div className="Text">
      <h3>Oh oh! No se encontraron resultados!</h3>
      <p>Por favor, intente de nuevo.</p>
    </div>
  </div>
);

export default NoResults;