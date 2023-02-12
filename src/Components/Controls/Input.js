import React from 'react'
import { TextField } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';

const Input = (props) => {
  return (
    <>
      <TextField sx={{height:"40px", width:'100%',
                    input:{padding:'8px 8px', 
                           fontSize:'16px', 
                           height:'32px', 
                           backgroundColor:'#FFF', 
                           border:'#00000000', },
                    '& label.Mui-focused': {
                      color: '#693778',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'none',
                      },
                      '&:hover fieldset': {
                        borderColor: '#693778',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#693778',
                      },
                    },
                  }}
            variant="outlined"
            label={props.label}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            {...(props.error && {error:true})}
        />
        {props.error && <FormHelperText sx={{color:'#f44336', marginTop:'10px'}} >{props.error}</FormHelperText>}
    </>
  )
}

export default Input