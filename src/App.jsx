import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { getAccess } from "./actions/auth";
import Dashboard from "./component/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import PropTypes from "prop-types";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ getAccess, auth }) => {
  useEffect(() => {
    getAccess();
    //alert(auth.code);
    if (auth.code === 200) {
      localStorage.setItem("token", auth.results.token);
      localStorage.setItem("company_id", auth.results.company_id);
    }
  }, []);
  return (
    <>
      <Router>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

App.propTypes = {
  getAccess: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getAccess })(App);

