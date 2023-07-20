import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CategoryIcon from '@mui/icons-material/Category';
import ChecklistIcon from '@mui/icons-material/Checklist';

export const MainListItems = () => {
  const navigate = useNavigate()
  return (
  
  <React.Fragment>
    <ListItemButton onClick={()=>navigate('/admin/userlist')}>
      <ListItemIcon>
        <ChecklistIcon />
      </ListItemIcon>
      <ListItemText primary="User List" />
    </ListItemButton>
    
    <ListItemButton onClick={()=>navigate('/admin/eventpost')}>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Event Post" />
    </ListItemButton>

    <ListItemButton onClick={()=>navigate('/admin/bookedevent')}>
      <ListItemIcon>
        <AppRegistrationIcon />
      </ListItemIcon>
      <ListItemText primary="Booked Events" />
      </ListItemButton>
      
    <ListItemButton onClick={()=>navigate('/admin/postcategory')}>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Post Category" />
    </ListItemButton>

  </React.Fragment>
  )
} 
export default MainListItems

