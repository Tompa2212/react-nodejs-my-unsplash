import React from "react";
import styled from "styled-components";
import { AutoForm, AutoField } from "uniforms-unstyled";
import { bridge } from "../schema/bridge";
import { registerSchema } from "../schema/registerSchema";
import { variables } from "../styles/styled-variables";
import { Link } from "react-router-dom";
import { SubmitField } from "../components/Fields/SubmitField";
import { useAuth } from "../context/auth";
const schema = bridge(registerSchema);

export const Register = () => {
  const { reqisterUser } = useAuth();

  const handleSubmit = async (model) => {
    reqisterUser(model);
  };

  return (
    <Wrapper>
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
          />
          <AutoField name="email" className="form-login-input" placeholder="Email" />
          <AutoField
            name="password"
            className="form-login-input"
            placeholder="Password"
          />
          <AutoField
            name="confirmPassword"
            className="form-login-input"
            placeholder="Password"
          />
          <div className="submit-cont">
            <SubmitField className="font-inherit form-submit-btn" title="Sign up" />
            <p>
              Already have an account?{" "}
              <Link to="/login" className="register-link">
                Sign in
              </Link>
            </p>
          </div>
        </AutoForm>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

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
