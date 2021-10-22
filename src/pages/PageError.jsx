import React from 'react';
import {Link} from "react-router-dom";

const PageError = () => {
  return (
    <div>
      <h2>Pagina 404</h2>
      <Link to={'/'} > Hola </Link>
    </div>
  );
};

export default PageError;