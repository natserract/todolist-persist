import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  root: {
    minWidth: 367,
    height: 142,
    color: '#fff',
    background: '#40444B',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: "#fff",
    background: '#C4C4C4',
    height: '20px',
    width: '50px',
    textAlign: 'center',
    borderRadius: '10px',
  },
  btnDelete: {
    width: 27,
    minWidth: 25,
    height: 30,
    textAlign: 'center',
    display: 'block',
    color: '#fff',
    background: '#36393F',
  },
  pos: {
  marginBottom: 12,
  },
  container: {
    width: 300,
  },
  cardHeader: {
    display: 'flex',
      justifyContent: 'space-between'
  },
  actions: {
    padding: '0 20px',
    justifyContent: 'space-between'
  },
  btnDone: {
    background: '#5440D1',
    color: '#fff',
  },
  btnAdd: {
    width: 75,
    height: 75,
    background: '#39C36D',
    borderRadius: '50%',
    position: 'absolute',
    right: 30,
    bottom: 20,

    "& .MuiButton-startIcon": {
      marginLeft: 0, 
      marginRight: 0,
    },

    "& .MuiButton-iconSizeLarge > :first-child": {
      fontSize: '22px !important'
    }
  }
})