import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      height: 100vh;
    }

    body {
      font-family: 'Rajdhani', sans-serif;
      background-color: #f2f3f5;
      color: #666666;
    }

    body,
    input,
    textarea,
    button {
      font: 400 1rem 'Inter', sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    li {
      list-style: none;
    }

    @media (max-width: 1360px) {
      html {
        font-size: 80%;
      }
    }

    @media (max-width: 1080px) {
      html {
        font-size: 70%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 62%;
      }
    }
`
