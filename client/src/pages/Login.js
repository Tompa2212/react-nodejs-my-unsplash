import React from "react";
import styled from "styled-components";
import { useAuth } from "../context/auth";
import auth_background from "../images/auth_background.jpg";
import { variables } from "../styles/styled-variables";
import { Link } from "react-router-dom";
import { AutoForm, AutoField } from "uniforms-unstyled";
import { SubmitField } from "../components/Fields/SubmitField";
import { bridge } from "../schema/bridge";
import { loginSchema } from "../schema/loginSchema";

const schema = bridge(loginSchema);
const authError = { message: "Invalid username or password" };

export default function Login() {
  const { loginUser, error } = useAuth();

  const handleSubmit = async (model) => {
    loginUser(model);
  };

  return (
    <Wrapper>
      <div className="leftStyle"></div>
      <div className="rightStyle">
        <div className="content">
          <div className="title">
            <h1>My Unsplash</h1>
            <h2>Upload and share your favorite pictures and memories.</h2>
          </div>
          <AutoForm schema={schema} onSubmit={(model) => handleSubmit(model)}>
            <AutoField
              name="username"
              className="form-login-input"
              placeholder="Username"
              authError={error ? authError : null}
            />
            <AutoField
              name="password"
              className="form-login-input"
              placeholder="Password"
              authError={error ? authError : null}
            />
            <div className="submit-cont">
              <SubmitField className="font-inherit form-submit-btn" title="Login" />
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="register-link">
                  Sign up
                </Link>
              </p>
            </div>
          </AutoForm>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0;
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 45% 1fr;
  }

  .leftStyle {
    background-image: url(${auth_background});
    background-position: center right;
    background-size: cover;
  }

  .rightStyle {
    padding-top: 3rem;
  }

  .content {
    padding: 2rem;
    max-width: 50rem;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: 3.3rem;
    margin-bottom: 2rem;
    margin: 2rem auto;
  }

  h2 {
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 2rem;
  }

  form {
    text-align: left;
    width: 100%;
    margin: 0 auto;

    .register-link:link,
    .register-link:visited {
      color: ${variables.$btnGreen};
      text-decoration: none;
    }

    .register-link:hover {
      text-decoration: underline;
    }
  }
`;
