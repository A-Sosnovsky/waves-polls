import {MuiThemeProvider} from '@material-ui/core/styles';
import * as React from 'react';
import createTheme from './Theme';

const theme = createTheme({});

class App extends React.Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <header>
                        <h1>Welcome to React</h1>
                    </header>
                    <p>
                        To get started, edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
