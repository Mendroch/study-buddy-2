import styled from 'styled-components';

export const StyledAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background-color: ${({ average }) =>
    average < 3 ? ({ theme }) => theme.colors.error :
    average < 4 ? ({ theme }) => theme.colors.warning :
    ({ theme }) => theme.colors.success 
  };
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
`;
