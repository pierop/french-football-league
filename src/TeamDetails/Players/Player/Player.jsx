import React, { Component, Fragment } from 'react';
import FlexContainer from '../../../wrappers/FlexContainer';
import { Delete, Edit, Save } from '@material-ui/icons';
import { IconButton, Input, Button } from '@material-ui/core';
import { PlayerInfoContainer, PlayerName } from './style';

class Player extends Component {
  constructor(props) {
    super(props);
    const { player } = this.props;

    let isEditing = false;
    if (!player.name && !player.position) {
      isEditing = true;
    }
    this.state = { player, isEditing };
  }

  shouldComponentUpdate(nextProps) {
    const nextPlayer = nextProps.player;
    const { player } = this.props;

    if (player !== nextPlayer) {
      // Update state with new value if props have changed
      this.setState({ player: nextPlayer });
    }
    return true;
  }

  editPlayer = () => {
    this.setState({ isEditing: true });
  };

  cancelEdition = () => {
    const { player, onDelete, index } = this.props;

    // If player did not have a name and position (ie. he has been created locally), delete it
    if (!player.name && !player.position) {
      onDelete(index);
    } else {
      this.setState({ player: player, isEditing: false });
    }
  };

  editPlayerName = event => {
    const name = event.target.value;
    const { player } = this.state;
    const editedPlayer = {
      ...player,
      name: name
    };
    this.setState({ player: editedPlayer });
  };

  editPlayerPosition = event => {
    const position = event.target.value;
    const { player } = this.state;
    const editedPlayer = {
      ...player,
      position: position
    };
    this.setState({ player: editedPlayer });
  };

  onSaveHandler = () => {
    const { onSave, index } = this.props;
    const { player } = this.state;

    onSave(player, index);
    this.setState({ isEditing: false });
  };

  renderEditMode() {
    const { player } = this.state;

    return (
      <Fragment>
        <PlayerInfoContainer>
          <Input
            value={player.name}
            onChange={this.editPlayerName}
            placeholder="Name"
          />
          <Input
            value={player.position}
            onChange={this.editPlayerPosition}
            placeholder="Position"
          />
        </PlayerInfoContainer>
        <div>
          <IconButton aria-label="Save" onClick={this.onSaveHandler}>
            <Save />
          </IconButton>
          <Button onClick={this.cancelEdition}>Cancel</Button>
        </div>
      </Fragment>
    );
  }

  renderReadMode() {
    const { onDelete, index } = this.props;
    const { player } = this.state;

    return (
      <Fragment>
        <PlayerInfoContainer>
          <PlayerName>{player.name}</PlayerName>
          <span>{player.position}</span>
        </PlayerInfoContainer>
        <div>
          <IconButton aria-label="Edit" onClick={this.editPlayer}>
            <Edit />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              onDelete(index);
            }}
          >
            <Delete />
          </IconButton>
        </div>
      </Fragment>
    );
  }

  render() {
    const { isEditing } = this.state;

    return (
      <FlexContainer>
        {!isEditing && this.renderReadMode()}
        {!!isEditing && this.renderEditMode()}
      </FlexContainer>
    );
  }
}

export default Player;
