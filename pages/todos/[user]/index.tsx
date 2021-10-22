import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { AppState } from '../../../store/reducers';
import { AddTodo, addTodo, SetTodo, setTodo, DeleteTodo, deleteTodo } from '../../../store/actions/todos';
import { TodosState } from '../../../store/reducers/todos/State';
import { UserState } from '../../../store/reducers/dataUser/State';
import { normalizeStr, mappingStatus, mappingColorStatus } from '../../../utils/utils';
import styles from './styles'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Popup from './components/popup'

type PropsFromState = {
  todos: TodosState;
  dataUser: UserState
};

type PropsFromDispatch = {
  addTodo: ActionCreator<AddTodo>;
  setTodo: ActionCreator<SetTodo>,
  deleteTodo: ActionCreator<DeleteTodo>
};

type TodosProps = {} & PropsFromState & PropsFromDispatch

const useStyles = makeStyles(styles)

const Todos: React.FC<TodosProps> = (props) => {
  const classes = useStyles()
  const allIds = props.todos[props.dataUser.name]?.allIds

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    props.deleteTodo(id, props.dataUser.name)
  }

  const handleSetStatus = (id) => {
    props.setTodo(id, props.dataUser.name, '3')
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h2>Hi, {normalizeStr(props.dataUser.name)}</h2>

        {allIds && (Object.values(allIds).length) ? (
          Object.values(allIds).map((data, id) => {
            const subId = Object.keys(allIds)[id]

            return (
              <Card className={classes.root} key={subId} variant="outlined">
                <CardContent>
                  <div className={classes.cardHeader}>
                    <Typography 
                      className={classes.title} 
                      style={{ backgroundColor: mappingColorStatus(data.status) }}
                      color="textSecondary" 
                      gutterBottom
                    >
                      {mappingStatus(data.status)}
                    </Typography>

                    <Button 
                      startIcon={<DeleteIcon />} 
                      onClick={() => handleDelete(subId)} 
                      className={classes.btnDelete} 
                      />
                  </div>

                  <Typography variant="h5" component="h2">
                    {data.title}
                  </Typography>
                </CardContent>

                <CardActions className={classes.actions}>
                  <Typography variant="body2" component="p">
                    Due date: {data.date}
                  </Typography>

                  <Button size="small" className={classes.btnDone} onClick={() => handleSetStatus(subId)}>Done</Button>
                </CardActions>
              </Card>
            )
          })
        ) : <h3>No Item</h3>}
      </div>

      <Button
        size="large"
        startIcon={<AddIcon />}
        className={classes.btnAdd}
        onClick={handleClickOpen}
      />

      <Popup open={open} setOpen={setOpen} onClose={handleClose} />
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos,
    dataUser: state.dataUser
  };
};

const mapDispatchToProps = {
  addTodo,
  setTodo,
  deleteTodo,
};


export default connect(mapStateToProps, mapDispatchToProps)(Todos);
