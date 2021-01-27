import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import SECRET_URL from "./secret";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "70%",
  },
  media: {
    width: "50%",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const INITIAL_STATE = [
    {id:1},
    {id:2},
    {id:3},
    // {id:4},
    {id:5},
    {id:6},
    {id:7}
  ]
  const [items] = useState(INITIAL_STATE);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
        
      <CardHeader
        title="Before the ceremony"
        subheader="January 19, 2019"
      />
      <CardMedia
        className={classes.media}
        image={`${SECRET_URL}4.jpg`}
        title="Sitting"
      />
      
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          Click the arrow on the right to expand
        </Typography>
        <CardActions disableSpacing>
            <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

        {/* Possibly have labels for photos? */}
        {/* <Typography variant="body1" color="textPrimary" component="p">
          This is a label for a picture
        </Typography> */}
        { items.map(item => 
        <CardMedia
        className={classes.media}
        image={`${SECRET_URL}${item.id}.jpg`}
        title="Sitting"
         />
        )}
        </CardContent>
      </Collapse>
    </Card>
  );
}