import React, { Component } from 'react';

import Home from './Home';
import Result from './Result';

class Search extends Component {
    state = { searching: false }
    showSearch = () => {
        let newstate = !this.state.searching;
        this.setState({ searching: newstate });
    }
    render() {
        return (
            <div className="SEARCH">
                <Home showSearch={this.showSearch} search={this.state.searching} />
                {!this.state.searching ? <h4 className="MESSAGECLICK">Clique na busca para iniciar.</h4> : <Result />}
            </div>
        );
    }
}
export default Search;