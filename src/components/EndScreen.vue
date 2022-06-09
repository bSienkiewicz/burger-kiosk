<template>
  <div id="end-screen" class="no-display">
    <audio id="burgir-audio">
      <source src="@/assets/music/burgir2.mp3" type="audio/mp3" />
    </audio>
    <div class="w-100 text-center" style="margin-top: 10%">
      <h1 style="font-size: 4rem">ŚWIETNY WYBÓR!</h1>
      <h4>Właśnie zajmujemy się twoim zamówieniem</h4>
    </div>
    <div class="w-100 text-center">
      <h1 class="mt-5">Twój numer:</h1>
      <div class="number-div">
        <h1 style="font-size: 5rem">
          {{ this.$store.state.orderNumber.toString().slice(-2) }}
        </h1>
      </div>
    </div>
    <div class="rbtext me-4 mb-4">
      <h5>Powrót za <span id="timer-span" class="fs-2 px-2">9</span> sek.</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#end-screen {
  font-family: UniSansHeavyIt;
  color: white;
  z-index: 9999;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #e50f33;
  display: flex;
  flex-direction: column;
}

.no-display {
  display: none !important;
}

.number-div {
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px;
  border-radius: 10px;
  background: #c70f2e;
  width: 8%;
  margin-left: auto;
  margin-right: auto;
}

.rbtext {
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 2px dashed white;
  border-top: 2px dashed white;
}
</style>
