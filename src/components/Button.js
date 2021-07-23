import React from 'react';
import { ThemeProvider, createTheme} from '@material-ui/core/styles';
import ButtonComponent from '@material-ui/core/Button';

const themeMuiButton ={
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    }  
  }

const theme = createTheme(themeMuiButton);

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
