import React from 'react'
export const ListScreen = () => {
    const token=localStorage.getItem('token');
    console.log('TOKEN->',token);
    return (       
        <>
            <span className="login100-form-title p-b-49">
                List Screen Session Token:
            </span>
        </>
    )
}