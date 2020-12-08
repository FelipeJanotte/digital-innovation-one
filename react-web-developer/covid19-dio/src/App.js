import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseLine } from '@material-ui/core/'
import GlobalStyle from './common/styles/global-styles'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseLine/>
      <GlobalStyle/>
      <div>
        teste
      </div>
    </StylesProvider>
  );
}

export default App;
