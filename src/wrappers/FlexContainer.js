import styled from 'styled-components';
import theme from '../constants/theme';

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	> * {
		flex: 0 0 auto;
		&:not(:first-child) {
			margin-left: 1rem;
		}
	}

	@media (${theme.breakpoints.mobile.type}-width:
		${theme.breakpoints.mobile.value}px) {
		flex-direction: column;

		> *:not(:first-child) {
			margin-left: 0;
		}
  }
`;

export default FlexContainer;
