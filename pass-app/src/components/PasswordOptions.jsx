/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
function PasswordOptions({handleChange, handleLengthChange, passLength, options}) {

    return (
        <>
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
          <Typography variant='body1' sx={{color: 'custom.green', fontSize: '32px'}}>{passLength}</Typography>
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
                      checked={options.upper} 
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
                      checked={options.lower} 
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
                      checked={options.numbers} 
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
                      checked={options.symbols} 
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
          </>
    )
}

export default PasswordOptions;