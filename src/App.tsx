import { IonApp, IonNav, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/index.css";

import { AppScreens } from "./pages/AppScreens/AppScreens";
import { useCalendarStore } from "./store";
import { memo, useLayoutEffect, useState } from "react";
import { Login } from "./pages/Login/Login";

setupIonicReact({
  hardwareBackButton: false,
});

const App: React.FC = () => {
  const loggedIn = useCalendarStore((store) => store.loggedIn);
  const [isAuthed, setAuthed] = useState();

  useLayoutEffect(() => {
    setAuthed(loggedIn);
  }, []);

  return (
    <IonApp>
      <Router isAuthed={isAuthed} />
    </IonApp>
  );
};

const Router = memo(({ isAuthed }: any) => (
  <IonReactRouter>
    <IonNav root={() => (isAuthed ? <AppScreens /> : <Login />)} />
  </IonReactRouter>
));

export default App;
