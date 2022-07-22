import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {myTheme} from "./modules/shared/theme";
import {Snackbar, ThemeProvider} from "@mui/material";
import {SnackbarProvider} from 'notistack';
ReactDOM.render(
  <StrictMode>
<SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={myTheme}>
      <BrowserRouter>

          <App />
      </BrowserRouter>
      </ThemeProvider>
</SnackbarProvider>
  </StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
