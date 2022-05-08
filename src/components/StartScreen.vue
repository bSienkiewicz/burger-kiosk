<template>
  <div id="start-screen" @click="toggleClicked"></div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {},
  methods: {
    toggleClicked() {
      this.login();
      document.getElementById("start-screen").classList.add("hide");
      axios
        .get(`${process.env.VUE_APP_API_URL}/skladniki`)
        .then((response) => {
          this.$store.commit("dbSkladnikiUpdate", response);
          return axios.get(`${process.env.VUE_APP_API_URL}/menu`);
        })
        .then((response) => {
          this.$store.commit("dbMenuUpdate", response);
          document
            .getElementById("loader-element")
            .classList.add("hide-loader");
        })
        .catch(() => {
          document.getElementById("loader-element").classList.add("d-none");
          document.getElementById("modal-cont").classList.add("showModal");
        });
    },
    login() {
      console.log(process.env.VUE_APP_LOGIN);
      const data = {
        username: process.env.VUE_APP_LOGIN,
        password: process.env.VUE_APP_PASSWORD,
      };
      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post(`${process.env.VUE_APP_API_URL}/login`, data, {
          headers: headers,
        })
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem("jwt", response.data.accessToken);
            this.$store.state.isAuthenticated = true;
            this.error = false;
            console.log(response);
          }
        })
        .catch((error) => {
          throw error;
          // window.location.reload();
        });
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
