import React, {useState} from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import deburr from 'lodash/deburr';
import {Redirect} from 'react-router-dom';

import './style.css';


function Search ({ingredients, getIngredients}) {
  const classes = useStyles();
    
  return (
    <DownshiftMultiple classes={classes} 
      suggestions={ingredients.length>0 && ingredients} 
      getIngredients={getIngredients} />
  );
}

function renderInput (inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

renderInput.propTypes = {
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
};

function renderSuggestion (suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
  index: PropTypes.number.isRequired,
  itemProps: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  suggestion: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
};

function getSuggestions (value, suggestions, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  
  return inputLength === 0 && !showEmpty && Object.keys(suggestions).length === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep =
      count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  
  
}

function DownshiftMultiple (props) {
  const { classes } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleKeyDown = event => {

    if (selectedItem.length && !inputValue.length && event.key === 'Backspace') {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
    if (event.key ==='Enter' && !inputValue.length) {
      setRedirect(true);
      //return <Redirect to={{pathname: `/Ingredients/${JSON.stringify(selectedItem)}`}} />;
      //props.history.push(`/Ingredients/${JSON.stringify(selectedItem)}`);
    }
    
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleChange = item => {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue('');
    setSelectedItem(newSelectedItem);
  };

  const handleDelete = item => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };
  return (
    <div>

    
      {
        redirect 
          ? <Redirect to={{pathname: `Recipes/Ingredients/${JSON.stringify(selectedItem)}`}}></Redirect>
          : <Downshift
            id="downshift-multiple"
            inputValue={inputValue}
            onChange={handleChange}
            selectedItem={selectedItem}
          >
            {({
              getInputProps,
              getItemProps,
              getLabelProps,
              isOpen,
              inputValue: inputValue2,
              selectedItem: selectedItem2,
              highlightedIndex,
            }) => {
              const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
                onKeyDown: handleKeyDown,
                placeholder: 'Select an ingredient',
              });

              return (
                <div className={classes.container}>
                  {renderInput({
                    fullWidth: true,
                    classes,
                    label: 'What\'s in your fridge?',
                    InputLabelProps: getLabelProps(),
                    InputProps: {
                      startAdornment: selectedItem.map(item => (
                        <Chip
                          key={item}
                          tabIndex={-1}
                          label={item}
                          className={classes.chip}
                          onDelete={handleDelete(item)}
                          variant="outlined"
                        />
                      )),
                      onBlur,
                      onChange: event => {
                        handleInputChange(event);
                        onChange(event);
                      },
                      onFocus,
                    },
                    inputProps,
                  })}

                  {isOpen && Object.keys(props.suggestions).length > 0 ? (
                    <Paper className={classes.paper} square>
                      {getSuggestions(inputValue2, props.suggestions).map((suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: suggestion.label }),
                          highlightedIndex,
                          selectedItem: selectedItem2,
                        }),
                      )}
                    </Paper>
                  ) : null}
                </div>
              );
            }}
          </Downshift>
      }
    </div>
  );
}

DownshiftMultiple.propTypes = {
  classes: PropTypes.object.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
  divider: {
    height: theme.spacing(2),
  },
}));

export default Search;