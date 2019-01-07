import styled from 'styled-components';
import FlexContainer from '../../wrappers/FlexContainer';
import theme from '../../constants/theme';

const TeamContainer = styled(FlexContainer)`
  margin: 1rem 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 rgba(37, 44, 97, 0.15),
    0 2px 4px 0 rgba(93, 100, 148, 0.2);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const TeamName = styled.h2`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.smallTitle};
  margin: 0;
`;

export { TeamContainer, TeamInfo, TeamName };
