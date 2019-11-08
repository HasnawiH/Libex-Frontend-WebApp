import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  h2: {
    paddingTop: 1,
    fontSize: 17,
    paddingBottom: 22
  },
  bigAvatar: {
    marginLeft: 3,
    width: 125,
    height: 125
  },
  menuItem: {
    color: "black",
    borderRadius: 5
  },
  listItem: {
    marginLeft: 25
  }
}));

export default useStyles;