/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PasswordStrength({passStrength, bars}) {
    
    
    return (
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
    )
}

export default PasswordStrength;