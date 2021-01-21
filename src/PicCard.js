import React from 'react';
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
    // width: "auto",
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
//   avatar: {
//     backgroundColor: red[500],
//   },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
        
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
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
      {/* <CardActions disableSpacing>
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
      </CardActions> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <CardMedia
        className={classes.media}
        image={`${SECRET_URL}2.jpg`}
        title="Sitting"
        />

        {/* //Possibly have labels for photos? */}
        <Typography variant="body1" color="textPrimary" component="p">
          This is a label for a pictures
        </Typography>
        <CardMedia
        className={classes.media}
        image={`${SECRET_URL}5.jpg`}
        title="Sit"
         />
         <CardMedia
        className={classes.media}
        image={`${SECRET_URL}3.jpg`}
        title="Sittin"
        />
        <CardMedia
        className={classes.media}
        image={`${SECRET_URL}6.jpg`}
        title="Sitting"
        />
        <CardMedia
        className={classes.media}
        image={`${SECRET_URL}7.jpg`}
        title="Sit"
         />
         <CardMedia
        className={classes.media}
        image={`${SECRET_URL}1.jpg`}
        title="Sittin"
        />
        </CardContent>
      </Collapse>
    </Card>
  );
}
