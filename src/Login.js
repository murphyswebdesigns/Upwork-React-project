import {
  PrimaryButton,
  LoginBox,
  LoginContainer,
  LoginInput
} from "./StyledComponents";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Login({ setLoggedIn }) {
  return (
    <LoginContainer>
      <LoginBox>
        <Typography
          sx={{ color: "#666666", mb: "25px" }}
          variant="h5"
          gutterBottom
        >
          Log in
        </Typography>
        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            id="email"
            placeholder="Username or Email"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <LoginInput id="password" placeholder="Password" />
          <PrimaryButton
            sx={{ margin: "20px 0" }}
            variant="contained"
            onClick={() => setLoggedIn(true)}
          >
            Continue with Email
          </PrimaryButton>
        </FormControl>
      </LoginBox>
    </LoginContainer>
  );
}
