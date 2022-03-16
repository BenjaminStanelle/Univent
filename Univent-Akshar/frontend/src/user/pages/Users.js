import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { Card } from 'react-bootstrap';
import App from '../../App';




const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  const [keyword, setkeyword] = useState(null);
  const [events, setEvents] = useState([])
  const [orgs, setOrgs] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users'
        );

        setLoadedUsers(responseData.users);
      } catch (err) { }
    };
    fetchUsers();
  }, [sendRequest]);

  const fetchSearchResult = (key) => {

    fetch("http://localhost:5000/api/search/" + key)
      .then((response) => {
        setEvents(response.body.events)
        setOrgs(response.body.orgs)

        // {events: [], orgs: [], forms: []}

        //response.body
        //[{title: "", link:"", image:""},{title: "", link:"", image:""}, {title: "", link:"", image:""}]
      }).catch((error) => {
        console.log(error)
      })
  }


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <p>{keyword}</p>
      <div className='d-flex justify-content-lg-center'>
        <form class=" d-flex col-6">
          <input onChange={(e) => {
            setkeyword(e.target.value)
          }} class="form-control mr-5" type="search" placeholder="Search" aria-label="Search" style={{ marginRight: "10px" }} />
          {/* <button class="btn btn-outline-danger mt-3" type="submit" style={{height:"40px"}}>Search</button> */}
        </form>


      </div>

      <div className='col-6' style={{ margin: "0px auto" }}>
        {<>
          {events.length == 0 ? <> </> : 
         (<div>
           <p>Events</p>
           {events.map((item, index) => {
           return <div>
             {item.title}
            </div>
           })}
       </div>)
         }

         {orgs.length == 0 ? <> </> : 
         (<div>
           <p>Orgs</p>
           {orgs.map((item, index) => {
           return <div>
             {item.title}
            </div>
           })}
       </div>)
         }
          
          </>
        }</div>





      {/* {!isLoading && loadedUsers && <UsersList items={loadedUsers} />} */}
    </React.Fragment>
  );
};

export default Users;
