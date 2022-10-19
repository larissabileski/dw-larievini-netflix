<script>
import Navbar from "./components/Navbar.vue";
import CardMovie from "./components/CardMovie.vue"
export default {
  components: { Navbar, CardMovie},
};
</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <CardMovie />
    <CardMovie />
    <CardMovie />
    <CardMovie />
    <CardMovie />
    <CardMovie />
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
