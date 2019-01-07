import React, { Component } from 'react';
import FlexContainer from '../../wrappers/FlexContainer';
import Logo from '../../wrappers/Logo';
import { TeamContainer, TeamInfo, TeamName } from './style';
import { Label } from '../../wrappers/text';
import Link from '../../wrappers/Link';

class Team extends Component {
  render() {
    const { team } = this.props;

    return (
      <TeamContainer as={Link} to={`/team/${team.id}`}>
        <Logo src={team.logo} alt={team.name} />
        <TeamInfo>
          <FlexContainer>
            <TeamName>{team.name}</TeamName>
            <div>
              <Label>Since</Label>
              <span>{team.creationYear}</span>
            </div>
          </FlexContainer>
        </TeamInfo>
      </TeamContainer>
    );
  }
}

export default Team;
