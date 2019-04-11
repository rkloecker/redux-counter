import React, { Component } from "react";
import { connect } from "react-redux";
import { inc, dec, reset } from "../actions/counterActions";
import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    inc: PropTypes.func.isRequired,
    dec: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  };

  componentDidMount() {}

  // onIncClick = id => {
  //   this.props.inc();
  // };

  // onIncClick = id => {
  //   this.props.inc();
  // };

  // onIncClick = id => {
  //   this.props.inc();
  // };

  // onEditClick = id => {
  //   this.props.getapp(id);
  // };

  render() {
    const {
      counter: { count },
      inc,
      dec,
      reset
    } = this.props;
    console.log(this.props.counter);
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  { inc, dec, reset }
)(Counter);
