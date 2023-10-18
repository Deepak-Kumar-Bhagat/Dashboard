import React from 'react';
import { Box, Stack } from '@mui/system';
import { Backdrop, Button, Fade, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import CardPage from './CardPage';
import GraphPage from './GraphPage';
import '../Styles/MainStyle.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BackHandIcon from '@mui/icons-material/BackHand';
import ProductPage from './ProductPage';

function Main() {
  return (
    <Stack direction="row" sx={{height:"100vh"}}>
        <Stack sx={{width:"18%"}}><Sidebar/></Stack>
        <Stack sx={{width:"82%",backgroundColor:'#F5F6F8',padding:"2% 3%",overflowY:"scroll"}}>
          <Stack direction="row" sx={{justifyContent:"space-between",alignItems:'center',padding:"0% 1%"}}>
            <Stack direction="row">
              <p className='heading-text'>Hello Deepak , </p>
              <BackHandIcon sx={{color:"#E2BE99"}}/>
            </Stack>
            <TextField 
              sx={{
                width:'200px',
                "& .MuiInputBase-root": {
                "& fieldset": {
                  borderColor: "#7D7D7D !important",
                  borderRadius: "8px",
                  height:"50px",
                  marginTop:'4px'
                  },
                "&:hover fieldset active": {
                borderColor: "#7D7D7D",
                  },
                  },
                }}
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: <SearchRoundedIcon sx={{ color: "#7D7D7D", margin: 1}} />
              }}/>
          </Stack>
            <Stack><CardPage/></Stack>
            <Stack><GraphPage/></Stack>
            <Stack><ProductPage/></Stack>
        </Stack>
    </Stack>
  )
}

export default Main