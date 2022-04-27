import React from "react";
import { useHistory } from "react-router-dom";

import Input from "../shared/components/FormElements/Input";
import Button from "../shared/components/FormElements/Button";
import ErrorModal from "../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validators";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
// import { AuthContext } from "../shared/context/auth-context";
import "./ClubForm.css";

const NewClub = () => {
  // const auth = useContext(AuthContext);
  const { isLoading, error, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      clubname: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      image: {
        value: "",
        isValid: false,
      },
      clubCat: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  async function postData() {
    const createThisClub = {
      clubname: formState.inputs.clubname.value,
      description: formState.inputs.description.value,
      image: formState.inputs.image.value,
      club_cat: formState.inputs.clubCat.value,
    };

    const response = await fetch("http://localhost:5000/api/clubs/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(createThisClub),
    });
    history.push("/clubs");

    return response.json();
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="club-form" onSubmit={postData}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="clubname"
          element="input"
          type="text"
          label="Club Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a club name."
          onInput={inputHandler}
        />
        <Input
          element="textarea"
          id="description"
          type="text"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="image"
          type="text"
          label="Image Link"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid image hyper link."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="clubCat"
          type="text"
          label="Club Category"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid club category."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          CREATE CLUB
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewClub;
