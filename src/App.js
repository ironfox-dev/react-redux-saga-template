import React from 'react';
import './App.css';
import {
  HomePage,
  ChatPage,
  CalendarPage,
  NotificationPage,
  SettingPage,
  UserDetailPage,
} from './pages';
import {
  Switch,
  Route,
} from "react-router-dom";
import { routers } from './config/router';

function App() {
  return (
      <div className="super-container">
        <div className="page-main-container">
          <Switch>
            <Route path={routers.HOMEPAGE} exact component={HomePage} />
            <Route path={routers.CHATPAGE} component={ChatPage} />
            <Route path={routers.CALENDAR_PAGE} component={CalendarPage} />
            <Route path={routers.NOTIFICATION} component={NotificationPage} />
            <Route path={routers.SETTINGS} component={SettingPage} />
            <Route path={routers.DETAIL_PAGE} component={UserDetailPage} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
