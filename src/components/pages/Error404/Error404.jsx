import React from 'react';
import './_style.scss';
import '../../../css/app.scss';
import { HOME_URL } from '../../../utils/constants';

const Error404 = () => (
    <div>
        <div className="Error404">
            <div className="textSection">
                <h1>404</h1>
                <div className="text">
                    <h2>Lo sentimos.</h2>
                    <p>
                        Por favor, vuelva a la pagina anterior o al inicio.
                        <br />
                    </p>
                    <a href={HOME_URL}> > Ir al inicio</a>
                </div>
            </div>
            <div className="errorImage">
                <img src="img/error404.png" alt="error404" />
            </div>
        </div>
    </div>
);

export default Error404;
