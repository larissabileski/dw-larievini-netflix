<script>
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue"
export default {
  components: { Navbar, Card},
};
</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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
