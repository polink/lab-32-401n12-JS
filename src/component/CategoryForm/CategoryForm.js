import React from 'react';


export default class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({title: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onComplete(this.state);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="name"
                    />
                <button type="submit">Create Category</button>
            </form>
        );
    }
}