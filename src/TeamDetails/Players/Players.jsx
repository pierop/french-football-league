import React, { Component } from 'react';
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

  editPlayer = player => {
    const { players } = this.state;
    const indexToDelete = players.findIndex(p => player.id === p.id);
    players.splice(indexToDelete, 1, player);
    this.setState({ players });
  };

  deletePlayer = player => {
    const { players } = this.state;
    const indexToDelete = players.findIndex(p => player.id === p.id);
    players.splice(indexToDelete, 1);
    this.setState({ players });
  };

  render() {
    const { players } = this.state;

    return (
      <div>
        <SubTitle>Players</SubTitle>

        <PlayersContainer>
          {players.map(player => {
            return (
              <Player
                key={`player-${player.id}`}
                player={player}
                onDelete={this.deletePlayer}
                onSave={this.editPlayer}
              />
            );
          })}
        </PlayersContainer>
      </div>
    );
  }
}

export default Players;
