import React, { Dispatch, SetStateAction } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styles from './styles'
import { ActionCreator } from 'redux';
import { AddTodo, addTodo } from '../../../../../store/actions/todos';
import { generateRandomNum } from '../../../../../utils/utils';
import { UserState } from '../../../../../store/reducers/dataUser/State';
import { AppState } from '../../../../../store/reducers';
import { connect } from 'react-redux';

type PropsFromState = {
  dataUser: UserState
};

type PropsFromDispatch = {
  addTodo: ActionCreator<AddTodo>;
};

type PopupProps = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  onClose: () => void
} & PropsFromState & PropsFromDispatch

const useStyles = makeStyles(styles)

const validationSchema = yup.object({
  title: yup.string(),
  dueDate: yup.string(),
});

const Popup: React.FC<PopupProps> = (props) => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      title: '',
      dueDate: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { title, dueDate } = values

      console.log('hello')

      if (title && dueDate) {
        props.addTodo(
          generateRandomNum(),
          props.dataUser.name,
          {
            title,
            date: dueDate,
            status: '1' // default
          })

        formik.resetForm()
      }
    },
  });

  const onSubmit = () => {
    formik.handleSubmit()
    props.onClose()
  }

  return (
    <div>
      <Dialog open={props.open} className={classes.dialog} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
        <DialogContent>
          <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
            <div className={classes.formRow}>
              <div className={classes.formControl}>
                <label htmlFor="title" className={classes.label}>Name</label>
                <TextField
                  required
                  type="text"
                  name="title"
                  id="title"
                  variant="outlined"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    `${formik.errors.title && formik.touched.title ? "input-error" : null} ${classes.inputName}`
                  }
                />
                {formik.errors.title && formik.touched.title && (
                  <span className={classes.error}>{formik.errors.title}</span>
                )}
              </div>

              <div className={classes.formControl}>
                <label htmlFor="dueDate" className={classes.label}>Due Date</label>
                <TextField
                  required
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  variant="outlined"
                  value={formik.values.dueDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    `${formik.errors.dueDate && formik.touched.dueDate ? "input-error" : null} ${classes.inputName}`
                  }
                />
                {formik.errors.dueDate && formik.touched.dueDate && (
                  <span className={classes.error}>{formik.errors.dueDate}</span>
                )}
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={onSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    dataUser: state.dataUser
  };
};


const mapDispatchToProps = {
  addTodo,
};


export default connect(mapStateToProps, mapDispatchToProps)(Popup);