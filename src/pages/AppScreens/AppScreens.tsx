import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { MoodFab } from "../../components/MoodFab/MoodFab";
import { Redirect, Route } from "react-router";
import { Calendar } from "../Calendar/Calendar";
import { Timeline } from "../Timeline/Timeline";
import { Report } from "../Report/Report";
import { Settings } from "../Settings/Settings";
import { Record } from "../Record/Record";

import calendarIcon from "../../pics/tabs/calendar.svg";
import chart from "../../pics/tabs/chart.svg";
import settings from "../../pics/tabs/settings.svg";
import timeline from "../../pics/tabs/timeline.svg";

import styles from "./AppScreens.module.css";

export const AppScreens = () => {
  return (
    <>
      <MoodFab />
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/timeline">
            <Timeline />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/emotion">
            <Record />
          </Route>
          <Route exact path="/">
            <Redirect to="/calendar" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/calendar">
            <IonIcon aria-hidden="true" icon={calendarIcon} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/timeline">
            <IonIcon aria-hidden="true" icon={timeline} />
          </IonTabButton>
          <IonTabButton className={styles.fabTab} />
          <IonTabButton tab="tab3" href="/report">
            <IonIcon aria-hidden="true" icon={chart} />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/settings">
            <IonIcon aria-hidden="true" icon={settings} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};
