import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
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

  const {upper, lower, numbers, symbols} = options;
  
  const generateNewPassword = () => {
    console.log(options)
    setPassword(buildPassword(passLength, options));
    passWordStrength(passLength, options)
  }

  const passWordStrength = (passLength, options) => {
    var count = 0;
    for (var opt in options) {
      if (options[opt]) {
        count++;
      }
    }

    if (count <= 2 && passLength <= 10) {
      setPassStrength('TOO WEAK!');
    } else if (count <= 2 && passLength > 10 && passLength <= 13) {
      setPassStrength('WEAK');
    } else if (count >= 3 && passLength > 12 && passLength <= 14) {
      setPassStrength('MEDIUM');
    } else if (count >= 3 && passLength >= 14) {
      setPassStrength('STRONG');
    }

    setBars(count);
  }

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{
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
      <Box
        sx={{
          width: 540,
          height: 80,
          backgroundColor: 'custom.darkGrey',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          
        }}>
          <Typography variant='h1' sx={{ fontSize: 32, marginLeft: '32px',}}>
            {password}
          </Typography>
          <svg className="copy-icon" width="21" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
          </svg>
      </Box>
      <Box 
        sx={{
          width: 540,
          height: 528,
          backgroundColor: 'custom.darkGrey',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingRight: '32px',
          paddingLeft: '32px',
          gap: '16px'
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '43px',
            marginTop: '24px',
          }}>
          <Typography variant='body1'>Character Length</Typography>
          <Typography variant='body1' sx={{color: 'custom.green'}}>{passLength}</Typography>
        </Box>
        <Box sx={{
          width: '100%',
        }}>
          <Slider 
            aria-label='Length' 
            value={passLength} 
            onChange={handleLengthChange} 
            min={0}
            max={24}
            sx={{
              width: '100%',
              height: '8px',
              color: 'custom.green',
              '& .MuiSlider-track': {
                borderRadius: 0,
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'custom.grey',
                borderRadius: 0,
              },
              '& .MuiSlider-thumb': {
                backgroundColor: 'custom.lightGrey'
              },
              '& .MuiSlider-thumb:hover': {
                backgroundColor: 'custom.background',
                border: '2px solid #a4ffaf'
              },
              '& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover': {
                boxShadow: 'none'
              }
            }}/>
        </Box>
        <Box 
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            fontSize: '18px'
          }}>
            <FormControl sx={{ }} component='fieldset' variant='standard'>
              <FormGroup>
                <FormControlLabel 
                  control={
                    <Checkbox 
                      checked={upper} 
                      onChange={handleChange} 
                      name='upper' 
                      sx={{
                        color: 'custom.lightGrey', 
                        '&:hover' :{
                          color: 'custom.green',
                          backgroundColor: 'transparent'
                        },
                        '&.Mui-checked' : {
                          color: 'custom.green'
                        },
                        '& .MuiSvgIcon-root': { 
                          borderRadius: 0}
                        }}/>
                  }
                  label='Include Uppercase Letters'
                />
                <FormControlLabel 
                  control={
                    <Checkbox 
                      checked={lower} 
                      onChange={handleChange} 
                      name='lower' 
                      sx={{
                        color: 'custom.lightGrey',
                        '&:hover' :{
                          color: 'custom.green',
                          backgroundColor: 'transparent'
                        }, 
                        '&.Mui-checked' : {
                          color: 'custom.green'
                        },
                        '& .MuiSvgIcon-root': { 
                          borderRadius: 0}
                        }}/>
                  }
                  label='Include Lowercase Letters'
                />
                <FormControlLabel 
                  control={
                    <Checkbox 
                      checked={numbers} 
                      onChange={handleChange} 
                      name='numbers' 
                      sx={{
                        color: 'custom.lightGrey', 
                        '&:hover' :{
                          color: 'custom.green',
                          backgroundColor: 'transparent'
                        },
                        '&.Mui-checked' : {
                          color: 'custom.green'
                        },
                        '& .MuiSvgIcon-root': { 
                          borderRadius: 0}
                        }}/>
                  }
                  label='Include Numbers'
                />
                <FormControlLabel 
                  control={
                    <Checkbox 
                      checked={symbols} 
                      onChange={handleChange} 
                      name='symbols' 
                      sx={{
                        color: 'custom.lightGrey',
                        '&:hover' :{
                          color: 'custom.green',
                          backgroundColor: 'transparent'
                        }, 
                        '&.Mui-checked' : {
                          color: 'custom.green'
                        },
                        '& .MuiSvgIcon-root': { 
                          borderRadius: 0}
                        }}/>
                  }
                  label='Include Symbols'
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box sx={{
            width: '100%',
            height: '72px',
            backgroundColor: 'custom.background',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant='body1' sx={{ fontSize: '18px', marginLeft: '32px'}}>STRENGTH</Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Typography variant='body1' sx={{mr: '16px'}}>{passStrength}</Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginRight: '32px'
              }}>
                {bars === 0 ? 
                <>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                </> : ''
              }
              {bars === 1 ? 
              <>
              <div className='box too-weak'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
              </> : ''
            }
            {bars === 2 ?
              <>
              <div className='box weak'></div>
                <div className='box weak'></div>
                <div className='box'></div>
                <div className='box'></div>
              </> : ''
            }
            {bars === 3 ? 
              <>
              <div className='box medium'></div>
                <div className='box medium'></div>
                <div className='box medium'></div>
                <div className='box'></div>
              </> : ''
            }
             {bars === 4 ? 
              <>
              <div className='box strong'></div>
                <div className='box strong'></div>
                <div className='box strong'></div>
                <div className='box strong'></div>
              </> : ''
            }
              </Box>
            </Box>
          </Box>
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
