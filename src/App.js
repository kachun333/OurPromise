import React, { useState, Suspense } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import Generator from './components/pages/Generator';
import Login from './components/pages/auth/Login';
import Verify from './components/pages/auth/Verify';
import Create from './components/pages/auth/Create';
import Reset from './components/pages/auth/Reset';
import PageNotFound from './components/pages/PageNotFound';
import Graduates from './components/pages/Graduates';
import GraduateDetails from './components/pages/GraduateDetails';
import Committee from './components/pages/Committee';
import CommitteeRegister from './components/pages/CommitteeRegister';
import Footer from "./components/Footer";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App(props) {

  const [theme] = useState({
    palette: {
      type: "light",
      primary: { main: "#673ab7" },
      secondary: { main: "#f50057" }
    },
    typography: {
      fontFamily: [
        "Poppins", "Times New Roman", "FangSong", "仿宋", "STFangSong", "华文仿宋", "serif"
      ].join(','),
      h1: {
        fontSize: "4.5rem"
      },
      h3: {
        fontSize: "2.5rem"
      },
      h4: {
        fontSize: "1.6rem"
      },
      h6: {
        fontSize: "1.3rem"
      },
      subtitle1: {
        fontSize: "1.2rem"
      },
      subtitle2: {
        fontSize: "1.1rem"
      },
      body1: {
        fontSize: "1.1rem"
      },
      overline: {
        fontSize: "0.8rem"
      }
    },
  });

  const muiTheme = createMuiTheme(theme);

  return (
    <Router>
      <MuiThemeProvider theme={muiTheme}>
        <Suspense fallback={null}>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar color="inherit">
              <Hidden smDown><NavbarDesktop /></Hidden>
              <Hidden mdUp><NavbarMobile /></Hidden>
            </AppBar>
          </HideOnScroll>
          {/* blank space under appbar & above banner */}
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/verify" exact component={Verify} />
            <Route path="/auth/create" exact component={Create} />
            <Route path="/auth/reset" exact component={Reset} />
            <Route path="/generator" exact component={Generator} />
            <Route path="/graduates" exact component={Graduates} />
            <Route path="/graduates/:id" exact component={GraduateDetails} />
            <Route path="/committee" exact component={Committee} />
            <Route path="/committee/register/:dept" exact component={CommitteeRegister} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
