import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignInLink = styled.p`
  text-align: center;
`;

const SignInText = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Title>Sign Up</Title>
      <Form>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
      <SignInLink>
        Already have an account? <SignInText href="/login">Log In</SignInText>
      </SignInLink>
    </SignUpContainer>
  );
};

export default SignUpPage;
