import React, { useEffect, useState } from "react";
import "./forms.css";
import Drop from "./dropdown"
import { useLocation, useParams } from "react-router-dom";


var list = [
  {id: "1", title: "Form1", expiredAt: "12849149", link: "", inputType: "asjfnaksfn"},
  {id: "2", title: "Form2", expiredAt: "12849149", link: "", inputType: "checkbox"},
  {id: "3", title: "Form3", expiredAt: "12849149", link: "", inputType: "text"},
  {id: "4", title: "Form4", expiredAt: "12849149", link: "", inputType: "text"},
  
]





export default function FormDetail() {

var formDetail = () => {
   var formId = useLocation().state.id


   return list.find((item) => item.id ==  formId)
}

  return (
   <div className="center-align" >
     <a>{console.log(useLocation())}</a>

<div class="form-container">
      
      <h2>Apply to be part of an organization</h2>
  <form class="register-form">
    {/* Uncomment the next line to show the success message */}
    {/* <div class="success-message">Success! Thank you for registering</div> */}

    {formDetail().inputType == "text" ?  <input
      id="first-name"
      class="form-field"
      type="text"
      placeholder="First Name"
      name="firstName"
    /> : <a>This is not input type</a> }

    <input
      id="first-name"
      class="form-field"
      type="text"
      placeholder="First Name"
      name="firstName"
    />
    {/* Uncomment the next line to show the error message */}
    {/* <span id="first-name-error">Please enter a first name</span> */}
    <input
      id="last-name"
      class="form-field"
      type="text"
      placeholder="Last Name"
      name="lastName"
    />
    {/* Uncomment the next line to show the error message */}
    {/* <span id="last-name-error">Please enter a last name</span> */}
    <input
      id="email"
      class="form-field"
      type="text"
      placeholder="Email"
      name="mavmail"
    />
    <input
      id="Contact-Number"
      class="form-field"
      type="text"
      placeholder="Contact"
      name="Contact"
    />
    <input
      id="College Year"
      class="form-field"
      type="text"
      placeholder="College Year"
      name="College year"
    />

    <input
      id="Document"
      class="form-field"
      type="file"
      placeholder="attach file"
      name="files"
    />
    <div className="form-field">
      <Drop/>
    </div>
    
    
    {/* Uncomment the next line to show the error message */}
    {/* <span id="email-error">Please enter an email address</span> */}
    <button class="form-field" type="submit">
      Register
    </button>
  </form>
</div>
   </div>
  );
}