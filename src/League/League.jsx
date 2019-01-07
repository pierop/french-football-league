import React, { Component } from 'react';
import Team from './Team/Team';
import { MainTitle, LeagueContainer } from './style';

class League extends Component {
  state = { teams: [] };

  componentDidMount() {
    // id=4334 is for French football League 1
    fetch(
      'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4334'
    )
      .then(result => result.json())
      .then(result => {
        const teams = result.teams.map(team => {
          return {
            id: team.idTeam,
            name: team.strTeam,
            logo: team.strTeamBadge,
            creationYear: team.intFormedYear
          };
        });
        this.setState({ teams });
      });
  }

  render() {
    const { teams } = this.state;

    return (
      <LeagueContainer>
        <MainTitle>French Football League 1</MainTitle>
        {teams.map(team => {
          return <Team key={`team-${team.id}`} team={team} />;
        })}
      </LeagueContainer>
    );
  }
}

export default League;
