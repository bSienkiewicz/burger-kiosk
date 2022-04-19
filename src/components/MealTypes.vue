<template>
  <div class="flex-row container-category">
    <div
      class="margin-end flex-col"
      @click="this.$store.commit('changeCategory', 'Polecane')"
    >
      <div class="gr-cont" :class="{ active: activeTab == 'Polecane' }">
        <div
          class="meal-type-container"
          @click="$emit('changeActive', 'Polecane')"
          :style="{
            'background-image': 'url(' + getImg('logo_circ.png') + ')',
          }"
        ></div>
      </div>
      <h4 class="category-title">Polecane</h4>
    </div>

    <div
      class="margin-end flex-col"
      @click="this.$store.commit('changeCategory', 'Nowości')"
    >
      <div class="gr-cont" :class="{ active: activeTab == 'Nowości' }">
        <div
          class="meal-type-container"
          @click="$emit('changeActive', 'Nowości')"
          :style="{ 'background-image': 'url(' + getImg('cat_burg.jpg') + ')' }"
        ></div>
      </div>
      <h4 class="category-title">Nowości</h4>
    </div>

    <div
      class="margin-end flex-col"
      @click="this.$store.commit('changeCategory', 'Burger')"
    >
      <div class="gr-cont" :class="{ active: activeTab == 'Burgery' }">
        <div
          class="meal-type-container"
          @click="$emit('changeActive', 'Burgery')"
          :style="{ 'background-image': 'url(' + getImg('cat_burg.jpg') + ')' }"
        ></div>
      </div>
      <h4 class="category-title">Burgery</h4>
    </div>

    <div
      class="margin-end flex-col"
      @click="this.$store.commit('changeCategory', 'Sałatka')"
    >
      <div class="gr-cont" :class="{ active: activeTab == 'Salatki' }">
        <div
          class="meal-type-container"
          @click="$emit('changeActive', 'Salatki')"
          :style="{
            'background-image': 'url(' + getImg('cat_salad.jpg') + ')',
          }"
        ></div>
      </div>
      <h4 class="category-title">Sałatki</h4>
    </div>

    <div
      class="margin-end flex-col"
      @click="this.$store.commit('changeCategory', 'Dodatek')"
    >
      <div class="gr-cont" :class="{ active: activeTab == 'Dodatki' }">
        <div
          class="meal-type-container"
          @click="$emit('changeActive', 'Dodatki')"
          :style="{
            'background-image': 'url(' + getImg('cat_fries.jpg') + ')',
          }"
        ></div>
      </div>
      <h4 class="category-title">Dodatki</h4>
    </div>

    <div
      class="margin-end flex-col"
      @click="this.$store.commit('changeCategory', 'Napój')"
    >
      <div class="gr-cont" :class="{ active: activeTab == 'Napoje' }">
        <div
          class="meal-type-container"
          @click="$emit('changeActive', 'Napoje')"
          :style="{
            'background-image': 'url(' + getImg('cat_drink.jpg') + ')',
          }"
        ></div>
      </div>
      <h4 class="category-title">Napoje</h4>
    </div>

    <div
      class="margin-end flex-col"
      @click="this.$store.commit('changeCategory', 'Alkohol')"
    >
      <div class="gr-cont" :class="{ active: activeTab == 'Alkohol' }">
        <div
          class="meal-type-container"
          @click="$emit('changeActive', 'Alkohol')"
          :style="{ 'background-image': 'url(' + getImg('cat_beer.jpg') + ')' }"
        ></div>
      </div>
      <h4 class="category-title">Alkohole</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "activeTab"],
  data() {
    return {};
  },
  methods: {
    getImg(imgPath) {
      return require("../assets/photos/category/" + imgPath);
    },
  },
};
</script>

<style scoped>
.container-category {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.meal-type-container {
  border: rgb(255, 255, 255) 4px solid;
  margin: 2px;
  vertical-align: top;
  font-weight: 300;
  text-align: center;
  height: 100px;
  width: 100px;
  background-size: cover;
  border-radius: 90px;
  background-position: center;
  transition: all 0.2s ease;
}

.margin-end {
  margin-right: 40px;
}

.gr-cont {
  background: rgb(231, 231, 231);
  border-radius: 1000px;
  padding: 1px;
  transition: background 0.5s ease-out;
}

.gr-cont.active {
  background: -webkit-linear-gradient(
    right bottom,
    #e50f33 0%,
    rgb(217, 0, 255) 100%
  );
}

.meal-type-container:hover {
  background-color: rgb(230, 230, 230);
  box-shadow: 0px 8px 35px -15px rgba(66, 68, 90, 0.63);
  color: black;
}

.category-title {
  font-family: Familiar;
  color: #000;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.4rem;
}

.meal-type-container h4 {
  font-weight: 300;
  position: relative;
  bottom: 0;
  margin: 0;
}
</style>
