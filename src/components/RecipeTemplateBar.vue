<template>
  <div
    class="recipe-container"
    v-if="this.$store.state.category == item.rodzaj"
    @click="this.$store.commit('addToReceipt', item)"
  >
    <div class="recipe-item">
      <div class="d-flex flex-row h-100">
        <div class="h-100 w-25">
          <img :src="item.miniatura" alt="" class="mini-img" />
          <!-- <img
            src="https://drive.google.com/thumbnail?id=18J2BP9cblA_xDZZG5F5yVNiInjn9AL2E"
            class="mini-img"
            alt=""
          /> -->
        </div>
        <div class="flex-row w-75 justify-content-between p-3">
          <div class="flex-col flex-grow-1 w-50">
            <h4
              class="m-0"
              v-if="item.rodzaj != 'Dodatek' && item.rodzaj != 'Alkohol'"
            >
              {{ item.rodzaj
              }}<span v-if="item.waga" class="fs-6 text-muted ps-3 align-top"
                >{{ item.waga }}g</span
              >
            </h4>
            <h3 class="m-0 fw-bold" style="font-family: UniSansHeavyIt">
              {{ item.nazwa.toUpperCase() }}
            </h3>

            <div class="pt-3" v-if="item.skladniki != null">
              Skład: {{ subitems }}
            </div>
          </div>
          <div class="r-side">
            <div
              class="price-tag p-2 button-52"
              style="font-family: UniSansHeavyIt"
            >
              <h4 class="m-0 d-inline fs-4">
                {{ item.cena.toFixed(2).split(".")[0] }}
              </h4>
              <h4 class="m-0 d-inline align-top fs-6">
                {{ item.cena.toFixed(2).split(".")[1] }}
              </h4>
            </div>
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uniquid from "uniqid";
export default {
  props: ["item"],
  computed: {
    subitems() {
      if (this.item.skladniki) {
        return this.item.skladniki
          .map((i) => {
            return i;
          })
          .join(", ");
      } else return [];
    },
  },
  methods: {
    selectItem: function (nazwa, cena, typ) {
      var el = {};
      el.id = uniquid(typ + "::");
      el.nazwa = nazwa;
      el.cena = cena;
      el.typ = typ;

      // TODO: DODANIE DO SELECTED - ODKOMENTOWAĆ PO WPROWADZENIU DODATKÓW
      // this.$store.commit("selectNewItem", el);
      this.$store.commit("addToReceipt", el);
    },
    getimg(imgPath) {
      try {
        let img = require("../assets/photos/mini/" + imgPath);
        return img;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.recipe-container {
  z-index: 5;
  padding-top: 18px;
  padding-left: 9px;
  padding-right: 9px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transition: all 0.2s ease;
  text-align: left;
  width: 50%;
  height: 205px;
  position: relative;
}

.recipe-item {
  color: black;
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s;
}

.recipe-item:hover {
}

.r-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.price-tag {
  background-color: #e50f33;
  box-shadow: 0px 3px 4px 0px rgba(66, 68, 90, 0.472);
}

.mini-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.button-52 {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  border: 2px solid white;
  border-radius: 8px;
  position: relative;
  color: white;
  background-color: #e50f33;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-82-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
</style>
