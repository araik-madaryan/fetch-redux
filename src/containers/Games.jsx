import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchGames } from '../actions/fetchGames';
import ListGames from './ListGames';

class Games extends Component {
  componentDidMount() {
    const { asyncFetchGames } = this.props;
    asyncFetchGames();
  }

  render() {
    const { games } = this.props;
    return (
      <div className="Games">
        {games.map((games, i) => <ListGames {...games} key={i} />)}
      </div>
    );
  }
}

const mstp = state => ({
  games: state.fetchGames.games
})

const mdtp = dispatch => bindActionCreators({
  asyncFetchGames
}, dispatch);

export default connect(mstp, mdtp)(Games);
