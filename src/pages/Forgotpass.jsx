import React from 'react';
import styled from 'styled-components';

const ForgotPasswordContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom:50px;
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

const BackToSignInLink = styled.p`
  text-align: center;
`;

const SignInText = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordPage = () => {
  return (
    <ForgotPasswordContainer>
      <Title>Forgot Password</Title>
      <Form>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        {/* New Password Field */}
        <FormGroup>
          <Label htmlFor="newPassword">New Password</Label>
          <Input type="password" id="newPassword" name="newPassword" required />
        </FormGroup>
        {/* Confirm Password Field */}
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input type="password" id="confirmPassword" name="confirmPassword" required />
        </FormGroup>
        <Button type="submit">Reset Password</Button>
      </Form>
      <BackToSignInLink>
        Remember your password? <SignInText href="/login">Log In</SignInText>
      </BackToSignInLink>
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordPage;
