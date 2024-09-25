<!-- <template>
    <section class="service_section layout_padding">
        <div class="service_container">
          <div class="container ">
            <div class="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>
            <div class="row">
              <div class="col-md-4 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/s1.png" alt="">
                  </div>
                  <div class="detail-box">
                    <h5>
                      Currency Wallet
                    </h5>
                    <p>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/s2.png" alt="">
                  </div>
                  <div class="detail-box">
                    <h5>
                      Security Storage
                    </h5>
                    <p>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/s3.png" alt="">
                  </div>
                  <div class="detail-box">
                    <h5>
                      Expert Support
                    </h5>
                    <p>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-box">
              <a href="">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>
</template> -->
<template>
    <section class="service_section layout_padding">
      <div class="service_container">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>Our <span>Services</span></h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
          </div>
  
          <!-- Service boxes rendered using v-for -->
          <div class="row">
            <ServiceBox
              v-for="(service, index) in services"
              :key="index"
              :image="service.image"
              :title="service.title"
              :description="service.description"
            />
          </div>
  
          <div class="btn-box">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import ServiceBox from './ServiceBox.vue';
  
  export default {
    components: {
        ServiceBox,
    },
    data() {
      return {
        services: [
          {
            image: require('@/assets/images/s1.png'),
            title: 'Currency Wallet',
            description:
              'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.',
          },
          {
            image: require('@/assets/images/s2.png'),
            title: 'Security Storage',
            description:
              'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.',
          },
          {
            image: require('@/assets/images/s3.png'),
            title: 'Expert Support',
            description:
              'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* You can keep or modify your styles here */
  </style>
  