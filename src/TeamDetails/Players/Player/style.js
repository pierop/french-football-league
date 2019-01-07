import styled from 'styled-components';
import theme from '../../../constants/theme';

const PlayerInfoContainer = styled.div`
  > * {
    margin-right: 0.5rem;
  }
`;

const PlayerName = styled.span`
  font-size: ${theme.fontSizes.largeText};
  color: ${theme.colors.secondary};
`;

export { PlayerInfoContainer, PlayerName };
