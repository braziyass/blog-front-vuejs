<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };

      console.log('Registering user:', user);

      try {
        const response = await axios.post('http://localhost:8080/auth/register', user);

        console.log('Response status:', response.status);

        if (response.status !== 200) {
          console.error('Error response:', response.data);
          throw new Error(`Registration failed: ${response.data.message || response.status}`);
        }

        const data = response.data;
        console.log('Registration successful:', data);
        if (this.$route.path !== '/authenticate') {
          this.$router.push('/authenticate'); // Redirect to login page
        }
      } catch (error) {
        console.error('There was a problem with the registration:', error);
      }
    }
  }
};
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-form div {
  margin-bottom: 1em;
}

.register-form label {
  display: block;
  margin-bottom: 0.5em;
}

.register-form input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

.register-form button {
  padding: 0.7em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.register-form button:hover {
  background-color: #0056b3;
}
</style>