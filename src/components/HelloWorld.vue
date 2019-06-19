<template>
  <div class="hello">
    <p v-text="msg"></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* v-4-3 */
p {
  color: red;
}
</style>

<style scoped>
p {
  color: skyblue;
}
</style>

<style scoped>
  

  /* @media (min-aspect-ratio: 5/3) {
    p {
      color: skyblue;
    }
  }

  @media (max-aspect-ratio: 5/3) {
    p {
      color: red;
    }
  } */

</style>


