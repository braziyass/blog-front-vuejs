<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginForm',
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        const user = {
          email: this.email,
          password: this.password
        };
  
        console.log('Logging in user:', user);
  
        try {
          const response = await axios.post('http://localhost:8080/auth/authenticate', user);
  
          console.log('Response status:', response.status);
  
          if (response.status !== 200) {
            console.error('Error response:', response.data);
            throw new Error(`Login failed: ${response.data.message || response.status}`);
          }
  
          const data = response.data;
          console.log('Login successful:', data);
  
          // Store the token
          const token = data.token;
          localStorage.setItem('token', token);
  
          // Set the token in the headers for subsequent requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
          // Redirect to the blogs view
          this.$router.push('/blogs');
        } catch (error) {
          console.error('There was a problem with the login:', error);
          if (error.response && error.response.status === 403) {
            this.errorMessage = 'Invalid email or password. Please try again.';
          } else {
            this.errorMessage = 'An error occurred. Please try again later.';
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-form div {
    margin-bottom: 1em;
  }
  
  .login-form label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  .login-form input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
  }
  
  .login-form button {
    padding: 0.7em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-form button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    margin-top: 1em;
  }
  </style>