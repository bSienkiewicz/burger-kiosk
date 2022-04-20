<template>
  <div class="h-100 d-flex flex-column p-3 ms-4">
    <h1
      class="mb-5 text-center"
      style="font-family: UniSansHeavyIt; font-weight: bold"
    >
      Zamówienie
    </h1>
    <h5
      v-if="this.$store.state.receipt.length == 0"
      class="fw-bold text-center pt-5 text-muted"
    >
      Trochę tu pusto :(<br />Śmiało, dodaj coś z menu!
    </h5>
    <div
      v-else
      class="row g-0"
      style="
        padding-right: 20px;
        border-bottom: 2px #a0a0a0 solid;
        padding-bottom: 8px;
        font-weight: bold;
      "
    >
      <div class="col-2">Qty</div>
      <div class="col-6">Nazwa</div>
      <div class="col text-end">Cena</div>
    </div>
    <div
      class="content-wrapper d-flex flex-column flex-fill"
      style="min-height: 0px"
    >
      <div class="overflow-container flex-fill">
        <div
          v-for="item in this.$store.state.receipt"
          :key="item.id"
          style="border-bottom: 2px dashed #a0a0a0"
        >
          <div class="row g-0 fs-5 pt-3" style="padding-right: 15px">
            <div class="col-2 fw-bold">1x</div>
            <div class="col-6 fw-bold">{{ item.nazwa }}</div>
            <div class="col text-end fw-bold">{{ item.cena.toFixed(2) }}</div>
          </div>
          <div class="row g-0 fs-5 fw-bold pb-3">
            <div class="col-8"></div>
            <div class="col-4 d-inline-block del-button" style="clear: both">
              <h5
                class="fs-5"
                style="float: right"
                @click="this.$store.commit('removeFromReceipt', item)"
              >
                Usuń
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h4
        v-if="this.$store.state.receipt.length > 0"
        class="fs-5 py-3"
        style="padding-right: 15px"
      >
        Suma zamówienia:
        <span style="float: right; font-weight: bold" class="fs-3"
          >{{ this.$store.state.total.toFixed(2) }}zł</span
        >
      </h4>
    </div>
    <div class="row g-0">
      <div class="col-9">
        <button
          v-if="Object.keys(this.$store.state.receipt).length > 0"
          class="button-82-pushable"
          style="width: 95%"
          role="button"
        >
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text" @click="showSumm"
            >Zrealizuj zamówienie</span
          >
        </button>
      </div>
      <div class="col-3">
        <button
          v-if="Object.keys(this.$store.state.receipt).length > 0"
          class="button-82-pushable"
          role="button"
          @click="this.$store.commit('removeAllFromReceipt')"
        >
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">U</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSumm() {
      const modal = document.getElementById("modal-container");
      modal.classList.add("show");
    },
  },
};
</script>

<style>
.cont {
  font-family: PhysisBold;
}

.del-button {
  margin-top: 8px;
  padding-right: 15px !important;
  text-align: right;
  font-weight: bold;
  color: #e50f33;
  cursor: pointer;
}

.button-82-pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
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

.button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    #7c0b1d 0%,
    #a50b25 8%,
    #a50b25 92%,
    #7c0b1d 100%
  );
}

.button-82-front {
  font-family: PhysisBlack;
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: #e50f33;
  will-change: transform;
  transform: translateY(-8px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

@media (min-width: 768px) {
  .button-82-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button-82-pushable:hover {
  filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
  transform: translateY(-12px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button-82-pushable:active .button-82-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
  outline: none;
}

.overflow-container {
  overflow-y: scroll;
  margin-bottom: 20px;
}

.overflow-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 10px;
}
.overflow-container::-webkit-scrollbar {
  width: 5px;
  background-color: #ffffff;
}

.overflow-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(180, 180, 180);
}
</style>
