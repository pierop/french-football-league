import styled from 'styled-components';
import theme from '../constants/theme';
import { Title } from '../wrappers/text';
import FlexContainer from '../wrappers/FlexContainer';

const TeamDetailsContainer = styled.div`
  background-color: ${theme.colors.light};
  min-height: 100vh;
  height: 100%;
`;

const GoBackWrapper = styled.div`
  padding: 1rem;
`;

const TeamWrapper = styled.div`
  background-color: white;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.15),
    0 2px 4px 0 rgba(93, 100, 148, 0.2);
  margin: 2rem;
  padding: 2rem;
`;

const TeamHeader = styled(FlexContainer)`
  padding: 1rem 0;
`;

const TeamName = styled(Title)`
  flex: 1 1 auto;
`;

const BlockWithMargin = styled.div`
  margin: 1rem 0 2rem;
`;

const GoToWebsite = styled.a`
  color: ${theme.colors.secondary};
`;

const StadiumContainer = styled(FlexContainer)`
  align-items: flex-start;
`;

const StadiumImage = styled.img`
  width: 50%;

  @media (${theme.breakpoints.mobile.type}-width:
    ${theme.breakpoints.mobile.value}px) {
    width: 100%;
  }
`;

const StadiumInfo = styled.div`
  flex: 1 1 auto;
`;

export {
  TeamDetailsContainer,
  GoBackWrapper,
  TeamWrapper,
  TeamHeader,
  TeamName,
  BlockWithMargin,
  GoToWebsite,
  StadiumContainer,
  StadiumImage,
  StadiumInfo
};
