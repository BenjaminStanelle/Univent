import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Dashboard from "./user/pages/Dashboard";
import Auth from "./user/pages/Auth";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

// TOOD: Rename all to ..Page
import FormsPage from "./forms/FormsPage";
import Events from "./events/Events";
import Clubs from "./Clubs/Clubs";
import ClubInfo from "./Clubs/ClubInfo";
import NewClub from "./Clubs/NewClub";
import EventInfo from "./events/EventInfo";
import NewEvent from "./events/NewEvent";
import Profile from "./Profile/Profile";
// import Dashboard from "./dashboard/pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  /*<Route path="/"> given a specific path in the url, components or pages between closing braces of 
  route will be rendered when that url starts with that specific path name
  Add exact key word <Route path="/" exact> for only that exact url to render components in that route
   
  Redirect component redirects to a url or page when the user enters a url that is not in the routes.
  */
  //switch route: when one route is true the rest of the routes will not be evaluated
  //Triggered when user logged in, they are able to see all pages except log in
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/clubs" exact>
          <Clubs />
        </Route>

        {/* <Route path="/:userId/places" exact></Route>
        <Route path="/groups/:groupUserId/" exact></Route> */}
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/events/newEvent/:cludId">
          <NewEvent />
        </Route>
        {
          <Route path="/events/:eventId">
            <EventInfo />
          </Route>
        }
        <Route path="/forms">
          <FormsPage />
        </Route>
        <Route path="/account/:userId">
          <Profile />
        </Route>
        <Route path="/clubs" exact>
          <NewClub />
        </Route>
        <Route path="/clubs/newClub">
          <NewClub />
        </Route>
        <Route path="/clubs/:clubId">
          <ClubInfo />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
    //when user not logged in they are only able to see few pages
    // <Route path="/:userId/places" exact> the : means it is dynamic and you don't know the exact value yet.
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  //everything we wrap <AuthContext.Provide value(we want to manage)> in gets access to it
  //when logged in will display logout button, when not logged in shows login button
  //all the components listening to the context(not wrapped) will re-render it
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />

        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
