import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  layout: { 
    position: 'relative',
    maxWidth: 480,
    width: '100%',
    margin: '0px auto',
    boxSizing: 'border-box',
    padding: '0px 16px 80px',
    minHeight: 'calc(-60px + 100vh)',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})