<template>
  <div id="app">
    <div class="links-container">
      <router-link to="/page1">Halaman 1</router-link>
      <div class="spacer"></div>
      <router-link to="/page2">Halaman 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.links-container {
  display: flex;
  justify-content: space-between;
  padding: 0 20px; /* Menambahkan padding agar link tidak terlalu dekat dengan tepi layar */
}

.spacer {
  flex-grow: 1; /* Menyebabkan spacer ini membesar sehingga link Halaman 2 akan berada di pojok kanan */
}

router-link {
  text-decoration: none;
}

.router-link {
  padding: 10px; /* Memberikan padding agar link terlihat lebih besar */
}
</style>
