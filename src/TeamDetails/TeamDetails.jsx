import { Button } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React, { Component } from 'react';
import Link from '../wrappers/Link';
import Logo from '../wrappers/Logo';
import { Label, SubTitle } from '../wrappers/text';
import Players from './Players/Players';
import {
  GoBackWrapper,
  GoToWebsite,
  StadiumContainer,
  StadiumImage,
  StadiumInfo,
  TeamDetailsContainer,
  TeamHeader,
  TeamName,
  TeamWrapper,
  BlockWithMargin
} from './style';

class TeamDetails extends Component {
  state = { team: null };

  componentDidMount() {
    // Get team id from query params
    const { id } = this.props.match.params;

    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then(result => result.json())
      .then(result => {
        const team = result.teams.map(team => {
          return {
            id: team.idTeam,
            name: team.strTeam,
            logo: team.strTeamBadge,
            creationYear: team.intFormedYear,
            manager: team.strManager,
            description: team.strDescriptionEN,
            stadiumName: team.strStadium,
            stadiumLocation: team.strStadiumLocation,
            stadiumCapacity: team.intStadiumCapacity,
            stadiumImage: team.strStadiumThumb,
            websiteUrl: team.strWebsite
          };
        })[0];
        this.setState({ team });
      });
  }

  render() {
    const { team } = this.state;

    return (
      <TeamDetailsContainer>
        <GoBackWrapper>
          <Link to="/">
            <Button>
              <ChevronLeft />
              Go back to league
            </Button>
          </Link>
        </GoBackWrapper>

        {!!team && (
          <TeamWrapper>
            <TeamHeader>
              <Logo src={team.logo} alt={team.name} />
              <TeamName>{team.name}</TeamName>
            </TeamHeader>

            <BlockWithMargin>
              {!!team.creationYear && (
                <div>
                  <Label>Created on</Label>
                  <span>{team.creationYear}</span>
                </div>
              )}
              {!!team.manager && (
                <div>
                  <Label>Manager</Label>
                  <span>{team.manager}</span>
                </div>
              )}
              {!!team.websiteUrl && (
                <div>
                  <Label>Website</Label>
                  <GoToWebsite
                    href={`http://${team.websiteUrl}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {team.websiteUrl}
                  </GoToWebsite>
                </div>
              )}
            </BlockWithMargin>

            {!!team.description && (
              <BlockWithMargin as="p">{team.description}</BlockWithMargin>
            )}

            <SubTitle>{team.stadiumName}</SubTitle>
            <BlockWithMargin as={StadiumContainer}>
              {!!team.stadiumImage && <StadiumImage src={team.stadiumImage} />}
              <StadiumInfo>
                {!!team.stadiumLocation && (
                  <div>
                    <Label>Location</Label>
                    <span>{team.stadiumLocation}</span>
                  </div>
                )}
                {!!team.stadiumCapacity && (
                  <div>
                    <Label>Capacity</Label>
                    <span>{team.stadiumCapacity} seats</span>
                  </div>
                )}
              </StadiumInfo>
            </BlockWithMargin>

            <Players teamName={team.name} />
          </TeamWrapper>
        )}
      </TeamDetailsContainer>
    );
  }
}

export default TeamDetails;
