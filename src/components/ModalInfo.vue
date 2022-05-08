<template>
  <div id="modal-cont">
    <div class="modal-inside">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="sadsvg"
      >
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M352 493.4C322.4 505.4 289.9 512 256 512C222.1 512 189.6 505.4 160 493.4V288C160 279.2 152.8 272 144 272C135.2 272 128 279.2 128 288V477.8C51.48 433.5 0 350.8 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 350.8 460.5 433.5 384 477.8V288C384 279.2 376.8 272 368 272C359.2 272 352 279.2 352 288V493.4zM217.6 236.8C224.7 231.5 226.1 221.5 220.8 214.4C190.4 173.9 129.6 173.9 99.2 214.4C93.9 221.5 95.33 231.5 102.4 236.8C109.5 242.1 119.5 240.7 124.8 233.6C142.4 210.1 177.6 210.1 195.2 233.6C200.5 240.7 210.5 242.1 217.6 236.8zM316.8 233.6C334.4 210.1 369.6 210.1 387.2 233.6C392.5 240.7 402.5 242.1 409.6 236.8C416.7 231.5 418.1 221.5 412.8 214.4C382.4 173.9 321.6 173.9 291.2 214.4C285.9 221.5 287.3 231.5 294.4 236.8C301.5 242.1 311.5 240.7 316.8 233.6zM208 368C208 394.5 229.5 416 256 416C282.5 416 304 394.5 304 368V336C304 309.5 282.5 288 256 288C229.5 288 208 309.5 208 336V368z"
        />
      </svg>
      <h1 class="pt-3">Coś się zepsuło, ale nie panikuj!</h1>
      <h3>To nasza wina. Powiadom kogoś z obsługi!</h3>
      <h5
        style="
          position: absolute;
          bottom: 20px;
          right: 20px;
          border-bottom: 2px solid #e50f33;
          color: #e50f33;
          font-weight: bold;
        "
        @click="reload()"
      >
        Spróbuj ponownie
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>

<style>
.sadsvg {
  width: 100px;
  height: auto;
  filter: invert(23%) sepia(96%) saturate(7093%) hue-rotate(344deg)
    brightness(91%) contrast(97%);
}

#modal-cont {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #131313eb;
  backdrop-filter: blur(5px);
  z-index: 51;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.modal-inside {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.showModal {
  visibility: visible !important;
  opacity: 1 !important;
}

#modal-cont h1 {
  color: white;
}

#modal-cont h3 {
  color: #e50f33;
}
</style>
