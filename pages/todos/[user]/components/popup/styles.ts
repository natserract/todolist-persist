import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

const styles =(theme: Theme) => createStyles({
  dialog: {
    "& .MuiDialog-paper": {
      background: '#36393F !important',
      color: '#fff',

      "& .MuiTypography-colorTextSecondary": {
        color: "#fff",
      }
    },
  },
  inputName: {
    position: 'relative',
    margin: '0 0 30px',
    width: '100%',
    // background: '#40444B',

    "& input": {
      color: 'white',
      background: '#40444B',
      borderRadius: 5,
    },
    "& label": {
      color: 'white'
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: '#40444B',
    },
    "& .MuiInputBase-formControl": {
      "& fieldset": {
        borderColor: '#40444B',
        // background: '#40444B',
      }
    }
  },
  formContainer: {
    width: 300,
  },
  formRow: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    position: 'relative',
  },
  error: {
    fontSize: 13,
    color: 'red',
    position: 'absolute',
    bottom: '9px',
    left: 0,
  },
  label: {
    display: 'block',
    margin: '0 0 12px'
  },
  btnSubmit: {
    width: 112,
    height: 40,
    background: '#39C36D',

    "&::hover": {
      backgroundColor: '#39C36D !important',
    }
  }
})

export default styles