import React, { useState, useEffect } from 'react';
import apiCalls from '../../../services/api-calls/all';

const { getOperators } = apiCalls;
const Operators = () => {
  const [operators, setOperators] = useState([]);
  const bringOperators = async () => {
    const ops = await getOperators();
    setOperators(ops);
  };
  useEffect(() => {
    bringOperators();
  }, []);

  // setInterval(bringOperators(),5000);
  return <div>SOY OPERATORS</div>;
};

export default Operators;
