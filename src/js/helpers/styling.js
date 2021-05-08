import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#30D5C8' },
    secondary: { main: '#FFC2C7' },
    whiteText: { main: '#FFFFFF' },
    darkText: { main: '#0e4642' },
    midText: { main: '#1b877f' },
  },
});

export const cardStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  cardDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  cardMedia: {
    width: 250,
  },
  titleColor: {
    color: theme.palette.whiteText.main,
  },
  subtitleColor: {
    color: theme.palette.darkText.main,
  },
}));

export const modalStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowX: 'scroll',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.whiteText.main,
  },
  groupEntries: {
    marginRight: theme.spacing(3),
  },
  parentGroup: {
    display: 'inline-flex',
    overflowX: 'scroll',
  },
  buttonParent: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: "50%",
  },
  buttonList: {
    margin: theme.spacing(0.5),
    maxHeight: '3rem',
    align: 'left',
    fontSize: '0.25rem',
    overflowX: 'scroll',
  }
}));

export const toolbarStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(1),
  },
  toolbarTitle: {
    flex: 1,
    cursor: 'pointer',
    color: theme.palette.darkText.main,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    margin: theme.spacing(0.5),
    flexShrink: 0,
    color: theme.palette.darkText.main,
  },
}));
