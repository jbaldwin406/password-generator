import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import PasswordOptions from './components/PasswordOptions';
import PasswordResult from './components/PasswordResult';
import PasswordStrength from './components/PasswordStrength';
import { theme } from './theme';
import { buildPassword } from './util';

function App() {
  const [password, setPassword] = useState('P4$5WOrD!');
  const [passLength, setPassLength] = useState(9);
  const [options, setOptions] = useState({
    upper: false,
    lower: false,
    numbers: false,
    symbols: false,
  });
  const [passStrength, setPassStrength] = useState('');
  const [bars, setBars] = useState(0);

  const handleLengthChange = (event, newLength) => {
    setPassLength(newLength);
  }
  
  const handleChange = (event) => {
    setOptions({
      ...options,
      [event.target.name]: event.target.checked,
    })
  };
  
  const generateNewPassword = () => {
    console.log(options)
    setPassword(buildPassword(passLength, options));
    calculatePassStrength(passLength, options)
  }

  const calculatePassStrength = (passLength, options) => {
        var score = 0;

        score+= passLength;

        for (var opt in options) {
            if (options[opt]) {
                score++;
            }
        }

        if (score <= 7) {
            setPassStrength('TOO WEAK!');
            setBars(1);
        } else if (score >= 8 && score <= 14) {
            setPassStrength('WEAK');
            setBars(2);
        } else if (score >= 15 && score <= 22) {
            setPassStrength('MEDIUM');
            setBars(3);
        } else {
            setPassStrength('STRONG');
            setBars(4);
        }
    }

  return (
    <ThemeProvider theme={theme}>
    <Container 
      sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      color: 'custom.lightGrey',
      backgroundColor: 'custom.background',
      fontFamily: 'JetBrains Mono'
    }}>
      <Typography variant='h1' sx={{ fontSize: 24, color: 'custom.grey'}}>Password Generator</Typography>
      <PasswordResult password={password} />
      <Box 
        sx={{
          maxWidth: 540,
          maxHeight: 528,
          backgroundColor: 'custom.darkGrey',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingRight: '32px',
          paddingLeft: '32px',
          gap: '16px'
        }}>
        <PasswordOptions 
          handleChange={handleChange} 
          handleLengthChange={handleLengthChange}
          passLength={passLength}
          options={options}
        />
         <PasswordStrength passStrength={passStrength} bars={bars} />
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px'
          }}>
          <Button 
            onClick={generateNewPassword}
            className='button'
            variant='contained' 
            sx={{ 
              backgroundColor: 'custom.green', 
              color: 'custom.background', 
              borderRadius: 0, 
              width: '100%', 
              height: '65px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              '&:hover': {
                backgroundColor: 'custom.background',
                color: 'custom.green',
                border: '2px solid #a4ffaf'
              }
          }}>
            <Typography 
              variant='body1' 
              sx={{ 
                fontSize: '18px', 
                fontWeight: 700
            }}>
              Generate
            </Typography>
            <svg className="arrow-icon" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
          </Button>
          </Box>
      </Box>
    </Container>
    </ThemeProvider>
  )
}

export default App
