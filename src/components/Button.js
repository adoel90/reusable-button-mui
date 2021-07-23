import React from 'react';
import { ThemeProvider, createTheme} from '@material-ui/core/styles';
import ButtonComponent from '@material-ui/core/Button';
import {themeColor} from '../themeColor'

const theme = createTheme(themeColor);

export default function Button(props) {

    return (
        <ThemeProvider theme={theme}>
            <ButtonComponent {...props}>
                {props?.children}
            </ButtonComponent>
        </ThemeProvider>
    )
};

// const ButtonTheme ={
//     ovverides : {
//         MuiButton : {
//             textPrimary: {
//                 color: '#36c42bde'
//             }
            
//         }
//     }
// }
