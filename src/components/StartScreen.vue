<template>
  <div id="start-screen" @click="toggleClicked"></div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    toggleClicked() {
      document.getElementById("start-screen").classList.add("hide");
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=51.935619&lon=15.506186&appid=82e5046a764dec9cec13d3c77991f9ea&units=metric&lang=pl"
        )
        .then((response) => {
          this.$store.commit("dbPogodaUpdate", response);
          return axios.get(this.$store.state.dbURL + "/get/skladniki");
        })
        .then((response) => {
          this.$store.commit("dbSkladnikiUpdate", response);
          return axios.get(this.$store.state.dbURL + "/get/menu");
        })
        .then((response) => {
          this.$store.commit("dbMenuUpdate", response);
          document.getElementById("loader-element").classList.add("d-none");
        })
        .catch((error) => console.log(error.data));
    },
  },
};
</script>

<style>
#start-screen {
  z-index: 1000;
  position: absolute;
  height: 100vh;
  bottom: 0;
  width: 100vw;
  background-image: url("../assets/photos/start.png");
  background-size: cover;
  transition: all 0.5s;
}

#start-screen.hide {
  bottom: 100%;
}
</style>
