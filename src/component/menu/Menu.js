import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import MenuCard from './MenuCard'
import MenuItemList from './MenuItemList'

const MenuStyle = styled(Box)(({theme}) =>({
    ".itemStyle":{
        marginTop: '50px',
        marginLeft: "150px",
        fontSize: "30px",
        fontFamily: "Poppins",
        fontWeight: "600",
        textTransform: "capitalize",
        color: "#5C5C5C",
        [theme.breakpoints.down("md")]: {
            marginLeft: '40px',
         

          },
        
    }
}))


function Menu() {
  return (
    <>
        <MenuStyle>
        
            <Typography variant='h5' className='itemStyle'><span style={{ color: "#FA4A0C" }}> Pluto</span> Item</Typography>
           
            <Box style = {{margin: '25px'}}><MenuCard/></Box>
            <Box style = {{margin: '25px',marginTop: '150px'}}><MenuItemList/></Box>
            </MenuStyle>
    </>
  )
}

export default Menu