import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./EnterAccountPopup.scss";
//------------------------------------------------------------------------  DIALOG MATERIALS
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import theme from "./Palette";
import { ThemeProvider } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
//------------------------------------------------------------------------  IMOPORTED  ICONS
import LoginIcon from "@mui/icons-material/Login";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import GoogleIcon from "@mui/icons-material/Google";
import { useTranslation } from "react-i18next";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EnterAccountPopup = ({ clicked, setClicked }) => {
  const { t, i18n } = useTranslation();

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //LOG IN OR SIGN IN

  let [change, setChange] = useState(false);

  const changeWin = () => {
    change = !change;
    setChange(change);
  };

  //SUCCESS SNACKBAR

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let sign_in = t("enter-modal.sign-in");
  let log_in = t("enter-modal.log-in");

  let have_account_sign_in = t("enter-modal.have-account-sign-in");
  let have_account_log_in = t("enter-modal.have-account-log-in");

  let sign_in_button = t("enter-modal.sign-in-button");
  let log_in_button = t("enter-modal.log-in-button");

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={clicked}
        onClose={() => setClicked(false)}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            border: "2px solid #1f2e4b",
            boxShadow: "inset 0px 0px 5px rgb(61, 76, 121)",
            borderRadius: "25px",
            width: "500px",
            height: "470px",
          },
        }}
      >
        <DialogTitle id="form-dialog-title" className="form-dialog-title">
          {change ? log_in : sign_in}
        </DialogTitle>
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <DialogActions>
            <a
              target="_blank"
              href="https://developers.facebook.com/docs/facebook-login/"
            >
              <IconButton onClick={() => setClicked(false)}>
                <FacebookRoundedIcon />
              </IconButton>
            </a>
            <a target="_blank" href="https://telegram.org/blog/login">
              <IconButton>
                <SendRoundedIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              href="https://developers.google.com/identity/protocols/oauth2"
            >
              <IconButton onClick={() => setClicked(false)}>
                <GoogleIcon />
              </IconButton>
            </a>
          </DialogActions>
        </Box>
        <DialogContentText className="form-dialog-log-in">
          {t("enter-modal.via-email")}
        </DialogContentText>
        <DialogContent>
          <div className="form-dialog-inputs">
            <TextField
              className={change ? "input-username-hidden" : ""}
              variant="outlined"
              autoFocus
              margin="dense"
              id="name"
              label={t("enter-modal.your-name")}
              type="email"
            />
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="email"
              label={t("enter-modal.email-adress")}
              type="email"
            />
            <TextField
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              variant="outlined"
              autoFocus
              margin="dense"
              label={t("enter-modal.password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <a
              href="#"
              onClick={() => changeWin(true)}
              className="registration-button"
            >
              {change ? have_account_sign_in : have_account_sign_in}
            </a>
          </div>
        </DialogContent>
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <DialogActions display="flex" flexDirection="column">
            <Button
              onClick={() => setClicked(false)}
              color="secondary"
              variant="contained"
              shape="circle"
            >
              {t("enter-modal.cancel-button")}
            </Button>
            <Button
              onClick={() => setClicked(true) && handleClick}
              onCl
              color="primary"
              variant="contained"
              endIcon={<LoginIcon />}
              shape="rounded"
            >
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  This is a success message!
                </Alert>
              </Snackbar>

              {change ? log_in_button : sign_in_button}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default EnterAccountPopup;

//
// return (
//     <div className={active ? "singUp-box active" : "singUp-box"} onClick={() => setActive(false)}>
//       <div className="singUp-content" onClick={e => e.stopPropagation()}>
//         <form className="registration">
//           <p>{change ? 'Log In' : 'Sing Up'}</p>
//           <input name="username" type="text" placeholder="Username..." className={change ? "input-username" : ""}></input>
//           {(emailUnCorrect && emailError) && <div style={{color:"red"}}>{emailError}</div>}
//           <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email..."></input>
//           {(passwordUnCorrect && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
//           <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..."></input>
//           <div className="wind-links">
//             <Link className="input-links" to="">Forgot password?</Link>
//             <Link className="input-links" to="" onClick={() => changeWin(true)}>{change ? 'Have no account? Sign In' : 'Have an account? Log In'}</Link>
//           </div>
//           <div className="wind-Buttons">
//
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
