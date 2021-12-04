import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/authState";
import { useRef, useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [formValid, setformValid] = useState(null);

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email.includes("@") && password.trim().length > 6) {
      localStorage.setItem("loggedIn", "true");
      dispatch(authActions.login());
    } else {
      setformValid(false);
      localStorage.removeItem("loggedIn");
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              invalid={formValid}
              type="email"
              id="email"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              invalid={formValid}
              type="password"
              id="password"
              required
            />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
