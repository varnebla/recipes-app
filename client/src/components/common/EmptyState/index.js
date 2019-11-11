import React from 'react';

import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './style.css';

function EmptyState () {

  return (
    <Grid className="empty_state" justify='center' container spacing={5}>
      <Grid item sm={12}>
        <ImageSearchIcon fontSize='large' color='disabled'></ImageSearchIcon>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h5" color='textSecondary'>We have not found any result for your search</Typography>
      </Grid>
    </Grid>
  );
}

export default EmptyState;