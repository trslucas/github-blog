import { createGlobalStyle } from 'styled-components'
// import firaCode from '../assets/fonts/FiraCode-Regular.woff'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url('') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['base-border']}
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors['brand-blue']};
      border-radius: 999px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${({ theme }) =>
      theme.textSizes['text-text-m']} 'Nunito', sans-serif;
      line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }


  .container {
  max-width: 53rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5rem;

  @media(max-width: 53rem){
    padding: 0 1rem;
  }
  }
  
`
