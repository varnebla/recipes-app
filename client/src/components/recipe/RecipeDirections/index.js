import React, {useState} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css';

function RecipeIngredients ({directions}) {

  const directionItems = directions.map((el,key) => 
    <ListItem key={key}>
      <ListItemText primary={el}/>
    </ListItem>  
  );

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="ingredients-content"
        id="ingredients-header">
        <Typography variant="h5">Directions</Typography>                
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          {directionItems}
        </List>              
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default RecipeIngredients;