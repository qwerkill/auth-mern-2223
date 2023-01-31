import React from 'react';

const UserAuthInputs = ({handleChange}) => {
    return ( 
        <>
        <div>
                <input 
                type="email" 
                name="email"
                onChange={handleChange}
                
                />
            </div>
            <div>
                <input 
                type="password"
                name="password"
                onChange={handleChange}

                />
            </div>
        </>
     );
}
 
export default UserAuthInputs;