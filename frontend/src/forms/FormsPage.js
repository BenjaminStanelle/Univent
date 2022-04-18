import React from "react";
import Entry from "../forms/Entry";

function FormsPage() {
  return (
    <div>
      <Entry id={1} title={"Apply for Organization"}/>
      <Entry id={2} title={"Volunteer"}/>
      <Entry id={3} title={"Donate for Cause"}/>
      <Entry id={4} title={"Be a Speaker"}/>
    </div>
  );
}

export default FormsPage;