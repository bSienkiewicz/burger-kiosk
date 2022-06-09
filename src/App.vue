<template>
  <StartScreen />
  <ModalInfo />
  <EndScreen />
  <MainKiosk />
</template>

<script>
import MainKiosk from "./components/MainKiosk.vue";
import StartScreen from "./components/StartScreen.vue";
import EndScreen from "./components/EndScreen.vue";
import ModalInfo from "./components/ModalInfo.vue";

export default {
  name: "App",
  components: {
    EndScreen,
    StartScreen,
    MainKiosk,
    ModalInfo,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&family=Fredoka&display=swap");

@font-face {
  font-family: Familiar;
  src: url("@/assets/fonts/Familiar_Pro_Bold.otf");
}
@font-face {
  font-family: PhysisBlack;
  src: url("@/assets/fonts/RNSPhysis-Black.ttf");
}
@font-face {
  font-family: PhysisBold;
  src: url("@/assets/fonts/RNSPhysis-Bold.ttf");
}

@font-face {
  font-family: PhysisThin;
  src: url("@/assets/fonts/RNSPhysis-Thin.ttf");
}

@font-face {
  font-family: PhysisLight;
  src: url("@/assets/fonts/RNSPhysis-Light.ttf");
}

@font-face {
  font-family: PhysisBold;
  src: url("@/assets/fonts/RNSPhysis-Medium.ttf");
}

@font-face {
  font-family: UniSansHeavyIt;
  src: url("@/assets/fonts/UniSansHeavyIt.otf");
}

:root {
  --slight-gray: #424144;
  --not-quite-black: #eee;
  --topbar: #eee;
}

#app {
  font-family: PhysisBold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: #2c3e50;
}
</style>
