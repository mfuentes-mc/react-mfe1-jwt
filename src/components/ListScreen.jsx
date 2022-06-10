import React from 'react'
import clientAxios from '../services/config/axios';
export const ListScreen = async () => {
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