import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import ErrorBoundry from  './components/error-boundry/error-boundry.component';

import { connect } from 'react-redux';

import './App.css';
import { setSearchField } from './redux/searchField/searchField.actions';
import { setMonstersRequest } from './redux/robotsRequest/monstersRequest.actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchMonsters.searchField,
    monsters: state.monstersRequest.monsters,
    isPending: state.monstersRequest.isPending,
    error: state.monstersRequest.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => (dispatch(setSearchField(event.target.value))),
    onMonstersRequest: () => dispatch(setMonstersRequest())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onMonstersRequest();
  }

  render() {
    const { searchField, onSearchChange, monsters, isPending } = this.props;
    console.log(monsters)
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return isPending ?
       <h1>Loading</h1> :
       (
         <div className='App' >
           <h1>Monsters Rolodex</h1>
           <SearchBox
              placeholder={'Search Monsters'}
              searchChange={onSearchChange}
           />
           <ErrorBoundry>
            <CardList monsters={filteredMonsters} />
           </ErrorBoundry>
         </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
