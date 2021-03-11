import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import ErrorBoundry from  './components/error-boundry/error-boundry.component';

import { connect } from 'react-redux';

import './App.css';
import {setSearchField} from "./redux/searchField/searchField.actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => (dispatch(setSearchField(event.target.value)))
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => this.setState({ monsters: data }));
  }

  render() {
    const { searchField, handleChange } = this.props;
    const { monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
         <div className='App' >
           <h1>Monsters Rolodex</h1>
           <SearchBox
              placeholder={'Search Monsters'}
              handleChange={handleChange}
           />
           <ErrorBoundry>
            <CardList monsters={filteredMonsters} />
           </ErrorBoundry>
         </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
