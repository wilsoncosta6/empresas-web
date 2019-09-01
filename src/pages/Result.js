import React from 'react';
import E1 from '../assets/img-e1.svg';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = () => {
    return (
        <div className="RESULTBASE" >
            <div>
                <Link to="/e1"><img className="IMGRESULT" src={E1} alt="enterprise" /> </Link>
            </div>
            <div className="RESULTBASEDATA">
                <Link to="/enterprise"><h1 >Empresa1</h1></Link>
                <h3>Negócio</h3>
                <h5>Brasil</h5>
            </div>
        </div>
    )
}

export default Result