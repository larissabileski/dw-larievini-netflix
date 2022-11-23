<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
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
