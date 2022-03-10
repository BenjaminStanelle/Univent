import React, { useEffect, useState } from "react";
import "./forms.css";

var list = [
  {
    id: "1",
    title: "Apply for Organization",
    expiredAt: "0000-00-00",
    link: "",
  },
  { id: "2", title: "Volunteer", expiredAt: "0000-00-00", link: "" },
  { id: "3", title: "Donate for Cause", expiredAt: "0000-00-00", link: "" },
  { id: "4", title: "Be a speaker", expiredAt: "0000-00-00", link: "" },
];

export default function Forms() {
  const [formList, setFormList] = useState(list);

  // app.get("/forms", (req, res) => {
  //   //ask database to give list of forms
  //   // Form.find()
  //   // list

  //   res.json(list)
  // })

  // var fetchForms = async() => {
  //   const res = await axios.get("http://localhost:5000/forms")

  //   setFormList(list)
  // }

  // useEffect(() => {
  //   fetchForms();
  // }, [])

  return (
    <div className="center-align">
      {formList.map((item, index) => {
        return (
          <div
            className="card"
            style={{ marginLeft: "20%", marginRight: "20%" }}
          >
            <div style={{ textAlign: "left" }}>
              <h3>{item.title}</h3>
              <div>{item.expiredAt}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <button
                className="btn waves-effect waves-light"
                onClick={() => {
                  console.log("doone");
                }}
              >
                Fill Form<i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
