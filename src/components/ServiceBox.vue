<!-- ServiceBox.vue -->
<template>
    <div class="col-md-4">
      <div class="box">
        <div class="img-box">
          <img :src="image" :alt="title" />
        </div>
        <div class="detail-box">
          <h5>{{ title }}</h5>
          <p>{{ description }}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can keep or modify your styles here */
  </style>
  