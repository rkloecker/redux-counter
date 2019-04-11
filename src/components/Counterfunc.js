import React from "react";
import { connect } from "react-redux";
import { inc, dec, reset, asyncInc } from "../actions/counterActions";
import PropTypes from "prop-types";

const Counterfunc = ({ counter: { count }, inc, dec, reset, asyncInc }) => {
  // console.log(props);
  return (
    <div className="container">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={inc} type="button" className="btn btn-primary mr-2">
        Inc
      </button>
      <button onClick={dec} type="button" className="btn btn-secondary mr-2">
        Dec
      </button>
      <button onClick={reset} type="button" className="btn btn-success">
        Reset
      </button>
      <button onClick={asyncInc} type="button" className="btn btn-danger">
        Async Inc
      </button>
    </div>
  );
};

Counterfunc.propTypes = {
  inc: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  asyncInc: PropTypes.func.isRequired,
  counter: PropTypes.object
};

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  { inc, dec, reset, asyncInc }
)(Counterfunc);
