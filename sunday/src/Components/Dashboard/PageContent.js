import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PageContent(props) {
  const classes = useStyles();
  const {
      database,
      loggedIn
    } = props;

  return (
    <div className={classes.root}>
        {loggedIn ? (
            <List component="nav" aria-label="secondary mailbox folders">
                {database.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem button>
                            <ListItemText primary={item.comment} secondary={item.name} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))} 
            </List>
        ) : (
            <h2>Please Login to see comments!!</h2>
        )}
    </div>
  );
}