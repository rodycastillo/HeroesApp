import React,{ useReducer, useEffect} from 'react'
import { AuthContext } from './auth/AuthContext.js'
import { authReducer } from './auth/authReduces.js'
import {AppRouter} from './routers/AppRouter.js'

export const HeroesApp = () => {
   const init = ()=>{
       return JSON.parse(localStorage.getItem('user')) || {logged: false };
   }
    const [user, dispatch]= useReducer(authReducer, {}, init )

   useEffect(() => {
       localStorage.setItem('user', JSON.stringify(user));
   }, [user]);
    
    return (
    <AuthContext.Provider value={{user, dispatch}} >
         <AppRouter/>
    </AuthContext.Provider>
    )
}
