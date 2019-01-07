import { Button } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { SubTitle } from '../../wrappers/text';
import Player from './Player/Player';
import { PlayersContainer } from './style';

class Players extends Component {
  state = { players: [] };

  componentDidMount() {
    const { teamName } = this.props;

    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${teamName}`
    )
      .then(result => result.json())
      .then(result => {
        const players = result.player.map(player => {
          return {
            id: player.idPlayer,
            name: player.strPlayer,
            position: player.strPosition
          };
        });
        this.setState({ players });
      });
  }

  editPlayer = (player, index) => {
    const { players } = this.state;
    players.splice(index, 1, player);
    this.setState({ players });
  };

  deletePlayer = index => {
    const { players } = this.state;
    players.splice(index, 1);
    this.setState({ players });
  };

  addPlayer = () => {
    const { players } = this.state;
    players.push({ id: 0, name: '', position: '' });
    this.setState({ players });
  };

  render() {
    const { players } = this.state;

    return (
      <Fragment>
        <SubTitle>Players</SubTitle>

        <PlayersContainer>
          {players.map((player, index) => {
            return (
              <Player
                key={`player-${index}`}
                player={player}
                index={index}
                onDelete={this.deletePlayer}
                onSave={this.editPlayer}
              />
            );
          })}
        </PlayersContainer>
        <Button variant="contained" color="primary" onClick={this.addPlayer}>
          Add player
        </Button>
      </Fragment>
    );
  }
}

export default Players;
