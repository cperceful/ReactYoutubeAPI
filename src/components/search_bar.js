import React, { Component } from 'react';

//class based component
class SearchBar extends Component {

    constructor(props) {
        super(props);

        //outside of the constructor, state should only be modified using setter method
        this.state = { term: '' };
    }
    
    //every class based React component must have a render() method
    render() {
        return (
            <div className="search-bar">
                <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;