<template>
  <div class="blog-list">
    <h2>Blogs</h2>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">{{ blog.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BlogList',
  data() {
    return {
      blogs: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:8080/api/blogs');
      this.blogs = response.data;
    } catch (error) {
      console.error('There was a problem fetching the blogs:', error);
    }
  }
};
</script>

<style scoped>
.blog-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
}

.blog-list ul {
  list-style-type: none;
  padding: 0;
}

.blog-list li {
  padding: 0.5em;
  border-bottom: 1px solid #ccc;
}
</style>