import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ITheme {
        mainContentPadding: number
    }
    // allow configuration using `createMuiTheme`
    interface IThemeOptions {
        mainContentPadding?: number
    }
}

declare module "@material-ui/core/styles/createPalette" {
    interface IPalette {
        azure: string;
    }

    interface IPaletteOptions {
        azure?: string;
    }
}

export default function createTheme(options: ThemeOptions) {
    return createMuiTheme({
        ...options,
    })
}