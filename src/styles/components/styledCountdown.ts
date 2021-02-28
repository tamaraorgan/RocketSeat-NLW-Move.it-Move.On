import styled from 'styled-components'

export const ContainerCountdown = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};
  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    span {
      flex: 1;
      :first-child {
        border-right: 1px solid #f0f1f3;
      }
      :last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }
  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`
export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: ${props => props.theme.colors.blueLight};
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  font-weight: 600;
  transition: background 0.2s;
  :hover {
    background: ${props => props.theme.colors.blueDark};
  }
  .active {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.title};
    transition: background 0.2s;
    :not(:disabled):hover {
      background: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.white};
    }
    :disabled {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.red};
      cursor: not-allowed;
    }
  }
`
