import React from "react";

class InputNumber extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onChange
        }
    }

    render() {
        let {
            value,
            defaultValue,
            onChange
        } = this.state;
        return (
            <input value={defaultValue || value } onChange={e => this.setState({value: onChange(e) || e.target.value})} />
        )
    }
}

export default InputNumber