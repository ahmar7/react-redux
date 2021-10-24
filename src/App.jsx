import React from "react";
import { connect } from "react-redux";
import set_Data from "./store/action";
class App extends React.Component {
  render() {
    console.log("redux data=>>", this.props);
    return (
      <div>
        <h1>ahmar</h1>
        <button onClick={() => this.props.setdata("ajajaj")}>Set Data</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app.appname,
  email: state.auth.email,
  auth: state.auth.name,
});

const mapDispatchToProps = (dispatch) => ({
  setdata: (data) => dispatch(set_Data(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
