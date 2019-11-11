import React, {useState} from 'react';

import CheckBox from '@material-ui/core/Checkbox';
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

function RecipeDetails ({ingredients, quantities}) {

  const [checkbox,  setCheckbox] = useState([]);

  const handleCheckBox = (event) =>{
    const newCheckbox = [...checkbox];
    newCheckbox[event.target.value] = event.target.checked; 
    setCheckbox(newCheckbox);
  };

  const listOfIngredients = ingredients.map((el, key) => 
    <ListItem key={el.id}>
      <ListItemIcon>
        <CheckBox           
          value={el.id}
          onChange={handleCheckBox}
          checked={checkbox[el.id]}
          color="primary"/>
      </ListItemIcon>
      <ListItemText 
        primary={quantities[key].quantity +' ' + el.name}
        className={checkbox[el.id] ? 'line_crossed' : ''}/>
    </ListItem>  
  );

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="ingredients-content"
        id="ingredients-header">
        <Typography variant="h6">Ingredients</Typography>                
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          {listOfIngredients}
        </List>              
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default RecipeDetails;