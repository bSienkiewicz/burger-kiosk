<template>
  <div id="app-container">
    <div id="loader-element">
      <div class="loader"></div>
    </div>
    <div class="titlebar d-flex flex-row justify-content-end"></div>
    <div class="mainBody content">
      <div id="left-section" class="selection-section d-flex flex-col h-100">
        <div class="welcome-bar pt-5 ps-5 pe-5 pb-2 bg-white">
          <div class="d-flex flex-row">
            <img src="../assets/photos/logo_min.png" alt="" height="50" />
            <h1 class="m-0 ps-3" style="font-family: UniSansHeavyIt">
              Witaj, łakomczuchu!
            </h1>
          </div>

          <div class="welcome-bar-right flex-row align-items-center">
            <div class="weather flex-row align-items-center">
              <img
                src="../assets/photos/mini/sun_ico.png"
                style="
                  height: 48px;
                  filter: invert(44%) sepia(78%) saturate(3333%)
                    hue-rotate(3deg) brightness(105%) contrast(104%);
                "
                alt=""
              />
              <h3 class="m-0 ps-2">
                <!-- {{ this.$store.state.openWeather.main }}°C -->
                10°C
              </h3>
            </div>
            <!-- <div class="basket ps-5">
              <img
                src="../assets/photos/mini/cart_ico.png"
                style="height: 35px"
                alt=""
              />
            </div> -->
          </div>
        </div>
        <div
          class=""
          style="display: flex; height: 90%; flex-direction: column"
        >
          <div
            id="category-section"
            class="px-5 py-3 bg-white"
            style="min-height: 180px; max-height: 180px"
          >
            <MealTypes @changeActive="changeActive" :activeTab="activeTab" />
          </div>

          <div class="gallery">
            <div class="flex-row pb-4 px-3" id="slideshow">
              <SBCategory />
            </div>
          </div>
        </div>

        <!-- PARAGON POPUP -->

        <modal-popup />
      </div>
      <div id="right-section" class="interactive-section py-4">
        <BasketComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SBCategory from "./SBCategory.vue";
import BasketComponent from "./BasketComponent.vue";
import MealTypes from "./MealTypes.vue";
// import ReceiptComponent from "./ReceiptComponent.vue";
import ModalPopup from "./ModalPopup.vue";

// exporty
export default {
  computed: {
    receiptCount() {
      return this.$store.state.receipt.length;
    },
    totalPrice() {
      return this.$store.state.total;
    },
  },
  async mounted() {},
  components: {
    // ReceiptComponent,
    ModalPopup,
    SBCategory,
    MealTypes,
    BasketComponent,
  },
  props: ["Title"],
  data: () => {
    return {
      activeTab: "Burgery",
      receiptKey: 0,
    };
  },
  methods: {
    changeActive(active) {
      this.activeTab = active;
    },
    showReceipt: function () {
      const item = document.getElementById("modal-container");
      item.classList.add("show");
    },
  },
};
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  user-select: none;
}

#app-container {
  height: 100vh;
  width: 100vw;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

#loader-element {
  width: 100vw;
  height: 100vh;
  background: #ffffffbb;
  position: absolute;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  color: #fa0000;
  font-size: 20px;
  margin: 100px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}

.welcome-bar {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: black;
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.receipt-container {
  text-align: center;
  padding: 0.4rem;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  min-height: 130px;
  min-width: 130px;
  background-color: var(--dark-not-black);
  /* background-image: linear-gradient(var(--light-green), #a2d1b4); */
  /* border-radius: 4px; */
  -webkit-box-shadow: 0px 8px 35px -20px rgba(58, 59, 77, 0.644);
  box-shadow: 0px 8px 35px -15px rgba(66, 68, 90, 0);
  transition: all 0.2s ease;
  text-align: left;
  color: white;
  position: absolute;
  bottom: 0;
}

#slideshow {
  background: #dddddd;
  align-content: flex-start;
}

.gallery {
  flex: 1;
  overflow-y: scroll;
}

.gallery::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 10px;
}

.gallery::-webkit-scrollbar {
  width: 5px;
  background-color: #ffffff;
}

.gallery::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(180, 180, 180);
}

#category-section {
  box-shadow: 0px 26px 41px -10px #70464d55;
  z-index: 3;
  overflow-x: scroll;
  overflow-y: hidden;
  vertical-align: bottom;
}

#category-section::-webkit-scrollbar {
  display: none;
}

.titlebar {
  height: 2%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #dddddd;
  color: white;
  -webkit-app-region: drag;
}

.mainBody {
  background: #2a2c2e;
  height: 98%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.content {
  -webkit-filter: blur(0);
  filter: blur(0);
  opacity: 1;
  -webkit-transition: opacity 500ms ease, -webkit-filter 500ms ease;
  transition: opacity 500ms ease, -webkit-filter 500ms ease;
  transition: filter 500ms ease, opacity 500ms ease;
  transition: filter 500ms ease, opacity 500ms ease, -webkit-filter 500ms ease;
}

#left-section {
  background-color: #dddddd;
  color: white;
  min-width: 75vw;
  max-width: 75vw;
}
.selection-section {
  display: flex;
  flex-direction: column;
  flex: 0 1 1;
  align-content: flex-start;
}

#right-section {
  border-left: 3px #2a2c2e solid;
  z-index: 6;
  box-shadow: inset 44px 1px 34px -40px rgba(146, 149, 179, 0.664);
  display: flex;
  flex-direction: column;
  background: #dddddd;
  width: 100%;
  color: #000000;
}

/* receipt */

.receipt-title {
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  background-color: #2a2c2e;
}

.receipt-title h3 {
  font-size: 1.3rem;
  margin: 0;
  padding: 5px;
  text-align: center;
}

.receipt-list {
  max-height: 100%;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-direction: column;
}

.receipt-item {
  margin: 0;
  display: flex;
  flex-flow: row;
  text-align: left;
  justify-content: flex-start;
  border-bottom: 2px solid var(--receipt-item-border);
}

.receipt-item p {
  margin: 0;
  font-size: 1.4rem;
  padding-top: 10px;
  padding-bottom: 10px;
}

/* .item-index{
    width:70px;
    text-align: center;
    border-right: 2px solid var(--receipt-item-border);
    border-bottom: 2px solid var(--receipt-item-border);
    border-left: 2px solid var(--receipt-item-border);
    border-bottom-left-radius: 8px;
} */

.item-name {
  padding-left: 20px;
  flex: 1;
}

.item-price {
  padding-left: 20px;
  padding-right: 20px;
  border-left: 2px solid var(--receipt-item-border);
  align-self: stretch;
}

.basket-container {
  display: flex;
  flex-direction: column;
}

.complete-button {
  border: none;
  text-align: center;
  padding: 10px;
}
</style>
