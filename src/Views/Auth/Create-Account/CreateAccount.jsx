import React from "react";
import "./CreateAccount.css"
import MenuSecond from "./../../../Components/MenuSecond/MenuSecond"
import InputForm from "./../../../Components/InputForm/InputForm"
import InputPic from "./../../../Components/InputPic/InputPic"

export default function createAccount(props) {


    return(
        <>
        <MenuSecond/>
        <h1 className="title">Create an account</h1>
        <form className="form" action="">
            <InputPic/>
            <InputForm label="Email*" type="mail" id="mail" name="mail" placeholder="Email" isRequired={true}/>
            <InputForm label="Password*" type="password" id="password" name="password" placeholder="Enter your password" isRequired={true}/>
        </form>
        </>
    )
}