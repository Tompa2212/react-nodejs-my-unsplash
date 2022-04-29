import React, { useState } from "react";
import styled from "styled-components";
import { FormInput } from "../components/Inputs";
import { useAuth } from "../context/auth";
import auth_background from "../images/auth_background.jpg";
import { variables } from "../styles/styled-variables";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};
export default function Login() {
  const [loginInfo, setLoginInfo] = useState(initialState);
  const { loginUser, url, loading } = useAuth();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginInfo;
    loginUser(url, { username, password });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Wrapper>
      <div className="leftStyle"></div>
      <div className="rightStyle">
        <div className="content">
          <h1>My Unsplash</h1>
          <h2>Upload and share your favorite pictures and memories.</h2>
          <form>
            <FormInput
              type="text"
              placeholder={"Username"}
              id="username"
              value={loginInfo.username}
              name="username"
              onChange={handleChange}
            />
            <FormInput
              type="password"
              placeholder={"Password"}
              id="password"
              value={loginInfo.password}
              name="password"
              onChange={handleChange}
            />
            <div className="submit-cont">
              <button type="submit" className="font-inherit" onClick={handleSubmit}>
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="register-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0;
  height: 100vh;
  width: 100wh;

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 40% 1fr;
  }

  .leftStyle {
    background-image: url(${auth_background});
    background-position: center right;
    background-size: cover;
  }

  .rightStyle {
    padding-top: 5rem;
  }

  .content {
    padding: 2rem;
    max-width: 50rem;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    margin: 2rem auto;
  }

  h2 {
    margin-bottom: 3rem;
    font-weight: 400;
  }

  form {
    text-align: left;
    width: 100%;
    margin: 0 auto;

    .submit-cont {
      text-align: center;

      button {
        cursor: pointer;
        display: block;
        color: ${variables.$white};
        padding: 0.7rem 0;
        background: ${variables.$btnGreen};
        width: 100%;
        margin: 0 auto;
        margin-bottom: 1rem;
        border: transparent;
        border-radius: 2px;
      }
    }

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
