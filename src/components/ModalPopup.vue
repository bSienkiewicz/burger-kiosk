<template>
  <div id="modal-container">
    <div class="modal-popup">
      <div class="modal-popup-ins">
        <div class="close-btn" @click="hideReceipt()">
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span
              class="button-82-front text"
              style="font-family: UniSansHeavyIt"
              >X</span
            >
          </button>
        </div>
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
                <h5 class="fw-bold m-0">{{ item.cena.toFixed(2) }}zł</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row px-3 pt-3">
        <div class="col-5 text-start"><h5>Suma:</h5></div>
        <div class="col-7 text-end pe-3">
          <h5 class="fw-bold">{{ this.$store.state.total.toFixed(2) }}zł</h5>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-12">
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
              >ZAPŁAĆ</span
            >
          </button>
        </div>
        <!-- <div class="col-6">
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
        </div> -->
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
      // POTNIJ POZYCJE DO TABELI

      let pozycje = "";
      for (let i = 0; i < this.$store.state.receipt.length; i++) {
        pozycje += this.$store.state.receipt[i].id + ",";
      }
      let pozycjeSliced = pozycje.slice(0, -1);

      console.log("Ilość pozycji: " + this.$store.state.receipt.length);
      this.$store.commit("setPaymentMethod", paymentMethod);
      axios({
        method: "post",
        url: process.env.VUE_APP_API_URL + "/zamowienia",
        data: {
          pozycje: pozycjeSliced,
          ilosc_pozycji: this.$store.state.receipt.length,
          kwota: this.$store.state.total.toFixed(2),
        },
      }).then((response) => {
        console.log("Wykonano post");
        // TODO: dodać wyjątek errora
        this.$store.commit("dbZamowieniaUpdate", response);
        document.getElementById("burgir-audio").play();
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
  animation-name: blur;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
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
  position: relative;
}

.close-btn {
  width: 100px;
  height: 50px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  float: right;
  right: 30px;
  top: 28px;
  position: absolute;
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

@keyframes blur {
  from {
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0px);
  }
  to {
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
  }
}
</style>
