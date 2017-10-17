import React from 'react';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

export default class MixCellEditor extends React.Component {
  static defaultProps = {
    value: ''
  };

  constructor(props) {
    super(props);

    this.cancelBeforeStart = this.props.charPress && ('1234567890'.indexOf(this.props.charPress) < 0);

    let value = this.props.value;
    if (!this.cancelBeforeStart && this.props.charPress) {
      value = value + this.props.charPress;
    }
    this.state = {
      value
    };
  }

  componentDidMount() {
    this.refs.input.addEventListener('keydown', this.onKeyDown);
    this.focus();
  }

  componentDidUpdate() {
    this.focus();
  }

  componentWillUnmount() {
    this.refs.input.removeEventListener('keydown', this.onKeyDown);
  }

  focus() {
    setTimeout(() => {
      this.refs.input.focus();
      this.refs.input.setSelectionRange(this.state.value.length, this.state.value.length);
    })
  }

  getValue() {
    return this.state.value;
  }

  isCancelBeforeStart() {
    return this.cancelBeforeStart;
  }

  onKeyDown = event => {
    if (this.isLeftOrRight(event)) {
      event.stopPropagation();
      return;
    }

    if (!this.isKeyPressedNumeric(event) && event.keyCode !== 8) {
      if (event.preventDefault) event.preventDefault();
    }
  }

  isLeftOrRight(event) {
    return [37, 39].indexOf(event.keyCode) > -1;
  }

  onChange = event => {
    this.setState({value: event.target.value});
  }

  getCharCodeFromEvent(event) {
    event = event || window.event;
    return (typeof event.which === "undefined") ? event.keyCode : event.which;
  }

  isCharNumeric(charStr) {
    return !!/\d/.test(charStr);
  }

  isKeyPressedNumeric(event) {
    const charCode = this.getCharCodeFromEvent(event);
    const charStr = event.key ? event.key : String.fromCharCode(charCode);
    return this.isCharNumeric(charStr);
  }

  render() {
    return (
      <input ref="input"
             value={this.state.value}
             onChange={this.onChange}
             onKeyDown={this.onKeyDown}
             style={{width: "100%"}}
      />
    );
  }
}
