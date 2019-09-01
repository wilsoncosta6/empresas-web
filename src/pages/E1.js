import React from 'react';

import icE1 from '../assets/img-e-1-lista.png';

import './E1.css';

const E1 = () => {
    return (
        <div>
            <div className="BCG">
                <div className="BASE">
                    <div>
                        <img src={icE1} alt="enterprise" id="company" />
                    </div>
                    <div>
                        <p className="LOREME1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default E1