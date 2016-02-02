import React from 'react';

var InputRadio = React.createClass({

    propTypes: {
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
      checked: React.PropTypes.bool,
      onChange: React.PropTypes.func,
    },

    handleChange: function(event){
      if(this.props.onChange) this.props.onChange(event);
    },

    render: function() {

      let id = this.props.id;
      let name = this.props.name;
      let label = this.props.label;
      let value = this.props.value;
      let checked = this.props.checked;

      return (
        <p className="input-radio-component">
          <input
            type="radio"
            name={name}
            value={value}
            id={id}
            checked={checked}
            onChange={this.handleChange}
          />
          <label htmlFor={id}>{label}</label>
        </p>
      );
    }
});

export default InputRadio;
