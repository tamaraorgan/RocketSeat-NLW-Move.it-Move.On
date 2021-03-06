import styled from 'styled-components'

export const ContainerLogIn = styled.div`
  background: ${props => props.theme.colors.blueLight};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8% 15%;
  .banner {
    flex: 1;
    img {
      height: 100%;
    }
  }
  .login {
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    > img {
      height: 4.5rem;
      margin-bottom: 4rem;
    }

    > strong {
      color: ${props => props.theme.colors.white};
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }

    > p {
      width: 19rem;
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1rem;
      margin-bottom: 2rem;

      > svg {
        font-size: 3rem;
        margin-right: 1rem;
      }
    }

    .authgit {
      display: flex;
      input {
        background: ${props => props.theme.colors.blueDark};
        background: linear-gradient(
          90deg,
          rgba(78, 163, 224, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        border: none;
        height: 4rem;
        width: 19rem;
        padding-left: 1rem;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        ::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }
      a {
        width: 4rem;
        height: 4rem;
        button {
          background: ${props => props.theme.colors.blueDark};
          color: ${props => props.theme.colors.white};
          height: 4rem;
          width: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }
`
