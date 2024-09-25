<!-- <template>
    <section class="why_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div class="why_container">
            <div class="box">
              <div class="img-box">
                <img src="images/w1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Expert Management
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div class="box">
              <div class="img-box">
                <img src="images/w2.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Secure Investment
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div class="box">
              <div class="img-box">
                <img src="images/w3.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Instant Trading
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div class="box">
              <div class="img-box">
                <img src="images/w4.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Happy Customers
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </section>
</template> -->

<template>
  <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Why Choose <span>Us</span>
        </h2>
      </div>
      <div class="why_container">
        <!-- Loop through the whyUs array to render WhyBox components -->
        <WhyBox
          v-for="(item, index) in whyUs"
          :key="index"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
      <div class="btn-box">
        <a href="#">Read More</a>
      </div>
    </div>
  </section>
</template>

<script>
import WhyBox from './WhyBox.vue';

export default {
  components: {
    WhyBox
  },
  data() {
    return {
      // Array of whyUs data
      whyUs: [
        {
          image: require('@/assets/images/w1.png'), // Adjust paths as necessary
          title: 'Expert Management',
          description:
            'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.'
        },
        {
          image: require('@/assets/images/w2.png'),
          title: 'Secure Investment',
          description:
            'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.'
        },
        {
          image: require('@/assets/images/w3.png'),
          title: 'Instant Trading',
          description:
            'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.'
        },
        {
          image: require('@/assets/images/w4.png'),
          title: 'Happy Customers',
          description:
            'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Add your specific styles here */
</style>
