import validator from 'validator';

export const validateEmail = (email) => {
  let error = '';

  if (email === '') {
    error = 'Email is required';
  } else if (!validator.isEmail(email)) {
    error = 'Invalid email address';
  }

  return error;
};

export const isPasswordValid = (password) => {
  let error = '';

  if (password.length < 8) {
    error = 'Password must be at least 8 characters long';
  } else if (!/[a-z]/.test(password)) {
    error = 'Password must have at least one lowercase letter';
  } else if (!/[A-Z]/.test(password)) {
    error = 'Password must have at least one uppercase letter';
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    error = 'Password must have at least one special character';
  }

  return error;
};

export const validatePassword = (password) => {
  let error = '';

  if (password === '') {
    error = 'Password is required';
  }

  return error;
};

export const validateConfirmPassword = (newPassword, confirmPassword) => {
  let error = '';

  if (confirmPassword === '') {
    error = 'Please confirm your password';
  }

  if (newPassword !== confirmPassword) {
    error = 'Passwords do not match';
  }

  return error;
};
