import { injectGlobal } from 'vue-styled-components';

export default injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px 'Roboto', sans-serif;
    background-color: blue;
    -webkit-font-smoonthing: antialiased !important;
  }
  ul {
    list-style: none;
  }
`;