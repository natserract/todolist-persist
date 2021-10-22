import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './styles'

const useStyles = makeStyles(styles);

const Layout: React.FC = (props) => {
  const classes = useStyles()

  return (
    <main className={classes.layout}>
      {props.children}
    </main>
  );
};

export default Layout;
