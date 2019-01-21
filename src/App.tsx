import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {ConnectedRouter} from 'connected-react-router';
import * as React from 'react';
import createTheme from './Theme';


const theme = createTheme({
    palette: {

    },
    typography: {
        fontFamily: 'Roboto',
        useNextVariants: true,
    }
});

export interface IAppProps {
    history: any
}

class App extends React.Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ConnectedRouter history={this.props.history}>
                    <div>
                        <main>
                            Hello world!!
                        </main>
                    </div>
                </ConnectedRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
