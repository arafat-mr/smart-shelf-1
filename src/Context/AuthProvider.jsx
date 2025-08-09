import React, { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";

import app from "../Firebase/Firebase.config";
import axios from "axios";
export  const AuthContext=createContext()
const AuthProvider = ({ children }) => {
    const auth= getAuth(app)
    const [loading,setLoading]= useState(true)
    const [user,setUser]=useState(null)
    const [upvote,setUpvote]=useState(0)
 const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 const updateUser=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
 }
 useEffect(()=>{
 const unSubscribe=onAuthStateChanged(auth,currentUser=>{
   // setLoading(true)
 setUser(currentUser)
 setLoading(false)

 

 
 })
 return ()=> unSubscribe()
 },[auth])
 const logOut=()=>{
    return signOut(auth)
 }
 const googleLogin=()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
 }

    const authData={
   createUser,
   loading,
   setLoading,
   logIn,
   user,
   logOut,
   googleLogin,
   upvote,
   setUpvote,
   updateUser
    }
  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
