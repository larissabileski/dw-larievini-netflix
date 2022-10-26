<script>
import Navbar from "./components/Navbar.vue";
import HomeView from "./views/HomeView.vue"
export default {
  components: { Navbar, HomeView },
};
</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <HomeView />
  </main>
</template>

<style>
body {
  background-color: #000;
}
header {
  height: 15%;
  width: 100%;

}
main {
  height: 70%;
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
}
</style>
