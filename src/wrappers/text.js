import styled from 'styled-components';
import theme from '../constants/theme';

const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.mediumTitle};
`;

const SubTitle = styled.h2`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.smallTitle};
  margin: ${props => (props.withMargin ? '0 0 1rem' : '0')};
`;

const Label = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
  font-size: ${theme.fontSizes.largeText};
`;

export { Title, SubTitle, Label };
