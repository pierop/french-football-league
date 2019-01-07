import styled from 'styled-components';
import theme from '../constants/theme';
import { Title } from '../wrappers/text';

const MainTitle = styled(Title)`
  text-align: center;
  margin: 0;
  padding: 2rem;
`;

const LeagueContainer = styled.div`
  background-color: ${theme.colors.light};
  min-height: 100vh;
  height: 100%;
`;

export { MainTitle, LeagueContainer };
