import { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { TodosState } from '../store/reducers/todos/State';
import { AddTodo, addTodo, SetTodo, setTodo, DeleteTodo, deleteTodo } from '../store/actions/todos';
import { AddUser, addUser } from '../store/actions/dataUser';
import { AppState } from '../store/reducers';
import { useEffect } from 'react';
import { UserState } from '../store/reducers/dataUser/State';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import styles from './styles'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useRouter } from 'next/router';
import { generateRandomNum, removeSpaceToLower } from '../utils/utils';

type PropsFromState = {
  todos: TodosState;
  dataUser: UserState
};

type PropsFromDispatch = {
  addUser: ActionCreator<AddUser>;
  addTodo: ActionCreator<AddTodo>;
  setTodo: ActionCreator<SetTodo>,
  deleteTodo: ActionCreator<DeleteTodo>
};

type HomeProps = {} & PropsFromState & PropsFromDispatch


const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
});

const useStyles = makeStyles(styles)

const Home: React.FC<HomeProps> = (props) => {
  const classes = useStyles()
  const routeConfig = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let randomId = 0
      let name = ''
      randomId = generateRandomNum()
      name = removeSpaceToLower(values.name)

      props.addUser(randomId, name)
       
      // Create Initial state for todos
      // props.addTodo(NaN, name, {})
      
      routeConfig.push(`todos/${name}`)
    },
  });

  return (
    <div className={classes.container}>
      <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
        <div className={classes.formRow}>
          <div className={classes.formControl}>
            <label htmlFor="name" className={classes.label}>Name</label>
            <TextField
              required
              type="text"
              name="name"
              id="name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                `${formik.errors.name && formik.touched.name ? "input-error" : null} ${classes.inputName}`
              }
            />
            {formik.errors.name && formik.touched.name && (
              <span className={classes.error}>{formik.errors.name}</span>
            )}
          </div>
        </div>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={`${!(formik.dirty && formik.isValid) ? "disabled-btn" : ""} ${classes.btnSubmit}`}
          disabled={!(formik.dirty && formik.isValid)}
          endIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>

      </form>
    </div >
  );
}

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
  addUser,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);