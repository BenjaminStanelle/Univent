import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Input from '../shared/components/FormElements/Input';
import Button from '../shared/components/FormElements/Button';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from '../shared/context/auth-context';
import './EventForm.css';


const NewEvent = () => {
  const clubIDVal = String(useParams().clubId);
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
    eventname: {
        value: '',
        isValid: false
      },
      year: {
        value: '',
        isValid: false
      },
      month: {
        value: '',
        isValid: false
      },
      day: {
        value: '',
        isValid: false
      },
      hour: {
        value: '',
        isValid: false
      },
      location: {
        value: '',
        isValid: false
      },
      image: {
        value: '',
        isValid: false
      }

      
    },
    false
  );

  const history = useHistory();

  async function postData() {

    const createThisEvent = {
        clubId: clubIDVal,
        eventname: formState.inputs.eventname.value,
        year: formState.inputs.year.value,
        month: formState.inputs.month.value,
        day: formState.inputs.day.value,
        hour: formState.inputs.hour.value,
        location: formState.inputs.location.value,
        image: formState.inputs.image.value,
    };


    const response = await fetch("http://localhost:5000/api/events/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(createThisEvent),
    });
    history.push('/events');

    return response.json();
  
  }
  /*clubId: formState.inputs.clubId.value,
        eventname: formState.inputs.eventname.value,
        year: formState.inputs.year.value,
        month: formState.inputs.month.value,
        day: formState.inputs.day.value,
        hour: formState.inputs.hour.value,
        location: formState.inputs.location.value,
        image: formState.inputs.image.value,*/
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="event-form" onSubmit={postData}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="eventname"
          element="input"
          type="text"
          label="Event Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a event name."
          onInput={inputHandler}
        />
        <Input
          id="year"
          element="input"
          type="text"
          label="Year The Event Takes Place (E.g. 2022)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid year."
          onInput={inputHandler}
        />
        <Input
          id="month"
          element="input"
          type="text"
          label="Month The Event Takes Place (E.g. 01)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid month."
          onInput={inputHandler}
        />
        <Input
          id="day"
          element="input"
          type="text"
          label="Day The Event Takes Place (E.g. 09)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid day."
          onInput={inputHandler}
        />
        <Input
          id="hour"
          element="input"
          type="text"
          label="Hour The Event Takes Place (E.g. 0-24)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid hour."
          onInput={inputHandler}
        />
        <Input
          id="location"
          element="input"
          type="text"
          label="Location The Event Takes Place"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid campus location."
          onInput={inputHandler}
        />
        <Input
          id="image"
          element="input"
          type="text"
          label="Event Image"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid hyper link image."
          onInput={inputHandler}
        />
        
        <Button type="submit" disabled={!formState.isValid}>
          CREATE EVENT
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewEvent;
