import React from 'react';
import SECRET_URL from "./secret";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const tileData = [
    {id:1, title: "title", col:1},
    {id:2, title: "title", col:1},
    {id:3, title: "title", col:1},
    {id:4, title: "title", col:3},
    {id:5, title: "title", col:1},
    {id:6, title: "title", col:1},
    {id:7, title: "title", col:1}
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 700,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles();
  //const [check, colValue] = useState(1);
  //const [col, setCol] = useState(2)
  //onClick= {() => check === col ? colValue(3) : colValue(1)} 

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.id} cols={tile.col}>
            <img src={`${SECRET_URL}${tile.id}.jpg`} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}