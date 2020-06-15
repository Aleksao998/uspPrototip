import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import NavBar from "components/Navbars/ExamplesNavbar";
import LandingPage from "views/LandingPage/LandingPage";
import SubscribePage from "views/SubscribePage/SubscribePage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import Nutricionizam from "views/Nutricionsta/Nutricionisti";
import Tehnicka from "views/TehnickaPodrska/Tehnicka";
import Lekovi from "views/Lekovi/Lekovi";
import Ishrana from "views/Ishrana/Ishrana";
const AppRoutes = (props) => {
  return (
    <div>
      <NavBar {...props} />

      <Switch>
        <Route
          path="/"
          render={(props) => <LandingPage {...props} />}
          exact={true}
        />

        <Route
          path="/kupi"
          render={(props) => <SubscribePage {...props} />}
          exact={true}
        />

        <Route
          path="/Profile"
          render={(props) => <ProfilePage {...props} />}
          exact={true}
        />

        <Route
          path="/nutricionizam"
          render={(props) => <Nutricionizam {...props} />}
          exact={true}
        />

        <Route
          path="/tehnicka"
          render={(props) => <Tehnicka {...props} />}
          exact={true}
        />

        <Route
          path="/lekovi"
          render={(props) => <Lekovi {...props} />}
          exact={true}
        />

        <Route
          path="/ishrana"
          render={(props) => <Ishrana {...props} />}
          exact={true}
        />
      </Switch>
    </div>
  );
};

export default AppRoutes;
