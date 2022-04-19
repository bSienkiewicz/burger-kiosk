<template>
  <div id="modal-container">
    <div class="modal-popup">
      <div class="modal-popup-ins">
        <button class="close-btn" @click="hideReceipt">X</button>
      </div>
      <div class="header" style="font-family: UniSansHeavyIt">
        <h1>Podsumowanie</h1>
      </div>
      <div
        class="receipt-scroll"
        style="
          min-height: 60%;
          background-color: #e3e3e3;
          padding: 10px;
          border-radius: 10px;
        "
      >
        <div class="row g-0" style="border-bottom: 2px #ccc solid">
          <div class="col-1 text-start ps-3">
            <h5 class="fw-bold fs-6">Qty</h5>
          </div>
          <div class="col-8 text-start">
            <h5 class="fw-bold fs-6">Nazwa</h5>
          </div>
          <div class="col-3 text-end pe-3">
            <h5 class="fw-bold fs-6">Cena</h5>
          </div>
        </div>
        <div class="cont" style="height: 320px; overflow: auto">
          <div
            class="ovf-y"
            v-for="item in this.$store.state.receipt"
            :key="item.id"
          >
            <div class="row g-0" style="border-bottom: 2px dashed #ccc">
              <div class="col-1 text-start ps-3 py-2">
                <h5 class="fw-bold m-0">1x</h5>
              </div>
              <div class="col-8 text-start py-2">
                <h5 class="fw-bold m-0">
                  <span
                    v-if="item.rodzaj != 'Dodatek' && item.rodzaj != 'Alkohol'"
                    >{{ item.rodzaj }}
                  </span>
                  {{ item.nazwa }}
                </h5>
              </div>
              <div class="col-3 text-end pe-3 py-2">
                <h5 class="fw-bold m-0">{{ item.cena.toFixed(2) }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row px-3 pt-3">
        <div class="col-5 text-start"><h5>Suma:</h5></div>
        <div class="col-7 text-end pe-3">
          <h5 class="fw-bold">{{ this.$store.state.total.toFixed(2) }}</h5>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-6">
          <button
            v-if="Object.keys(this.$store.state.receipt).length > 0"
            class="button-82-pushable"
            style="width: 70%"
            role="button"
            @click="completeOrder('Karta')"
          >
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span
              class="button-82-front text"
              style="font-family: UniSansHeavyIt"
              >PŁATNOŚĆ KARTĄ</span
            >
          </button>
        </div>
        <div class="col-6">
          <button
            v-if="Object.keys(this.$store.state.receipt).length > 0"
            class="button-82-pushable"
            style="width: 70%"
            role="button"
            @click="completeOrder('Gotówka')"
          >
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span
              class="button-82-front text"
              style="font-family: UniSansHeavyIt"
              >PŁATNOŚĆ GOTÓWKĄ</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    hideReceipt: function () {
      const modal = document.getElementById("modal-container");
      modal.classList.remove("show");
    },
    completeOrder(paymentMethod) {
      let timeLeft = 8;
      let pozycje = "";
      for (let i = 0; i < this.$store.state.receipt.length; i++) {
        pozycje += this.$store.state.receipt[i].id + ",";
      }
      let pozycjeSliced = pozycje.slice(0, -1);
      console.log(pozycjeSliced);
      this.$store.commit("setPaymentMethod", paymentMethod);
      axios({
        method: "post",
        url: this.$store.state.dbURL + "/post/zamowienia",
        data: {
          pozycje: pozycjeSliced,
          kwota: this.$store.state.total.toFixed(2),
          metoda_platnosci: this.$store.state.paymentMethod,
        },
      }).then(() => {
        console.log("Wykonano post");
      });
      document.getElementById("end-screen").classList.remove("no-display");
      let timerFunction = setInterval(function () {
        if (timeLeft <= 0) {
          clearInterval(timerFunction);
          window.location.reload(true);
        }

        document.getElementById("timer-span").innerHTML = timeLeft;
        timeLeft--;
      }, 1000);
      axios
        .get(this.$store.state.dbURL + "/get/zamowienia")
        .then((response) => {
          this.$store.commit("dbZamowieniaUpdate", response);
          document.getElementById("burgir-audio").play();
        });
    },
  },
};
</script>

<style>
h5 {
  margin: 0;
}

.show {
  display: flex !important;
  z-index: 100;
}

.ovf-y {
  overflow-y: auto;
}

#modal-container {
  color: black;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-popup {
  z-index: 1000;
  text-align: center;
  background-color: white;
  width: 1000px;
  height: 600px;
  padding: 30px;
  border-radius: 10px;
}

.close-btn {
  background: linear-gradient(0deg, #c3800c, #f6a820);
  border: none;
  width: 100px;
  height: 50px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  float: right;
  margin-right: -50px;
  margin-top: -50px;
}

.cont::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 10px;
}
.cont::-webkit-scrollbar {
  width: 5px;
  background-color: #ffffff;
}

.cont::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(180, 180, 180);
}
</style>
