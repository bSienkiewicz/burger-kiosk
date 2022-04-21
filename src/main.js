import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";

function countTotal(receipt) {
  let total = 0;
  receipt.forEach((element) => {
    total += element.cena;
  });
  console.log(total);
  return total;
}

// Create a new store instance.
const store = createStore({
  state() {
    return {
      // dbURL: "http://localhost:3000/api/v1",
      dbURL: "http://projectburger-en.herokuapp.com/api/v1",
      dbState: {
        menu: [],
        skladniki: [],
        zamowienia: [],
      },
      selected: {},
      receipt: [],
      total: 0,
      openWeather: [],
      category: "Burger",
      paymentMethod: "G",
      orderNumber: "...",
    };
  },
  getters: {},
  mutations: {
    //dodawanie do paragonu
    addToReceipt(state, element) {
      // TODO: SPRAWDZENIE CZY SELECTY SĄ PUSTE - ODKOMENTOWAĆ PO WPROWADZENIU SYSTEMU DODATKÓW
      // if (Object.keys(state.selected).length == 0) return;
      state.receipt.push(element);
      state.total = countTotal(state.receipt);
      state.selected = {};
      console.log(state.receipt);
    },
    // usuwanie z paragonu
    removeFromReceipt(state, el) {
      for (var i = 0; i < state.receipt.length; i++) {
        if (state.receipt[i].id == el.id) {
          state.receipt.splice(i, 1);
          break;
        }
      }
      state.total = countTotal(state.receipt);
    },
    // usuwanie całego paragonu
    removeAllFromReceipt(state) {
      state.total = 0;
      state.receipt = [];
    },
    // zmiana kategorii
    changeCategory(state, cat) {
      state.category = cat;
      console.log(state.category);
    },
    //wybór z menu do tymczasowej
    selectNewItem(state, el) {
      state.selected = {};
      state.selected = el;
      state.selected.dodatki = [];
      console.log(state.selected);
    },

    //aktualizowanie menu
    dbMenuUpdate(state, el) {
      state.dbState.menu = el.data;
      state.dbState.menu.data.forEach((menuElement) => {
        try {
          var skl = menuElement.skladniki.split(",");
          menuElement.skladniki = [];
          skl.forEach((skladnikElement) => {
            menuElement.skladniki.push(
              state.dbState.skladniki.find(
                (o) => o.id === parseInt(skladnikElement)
              ).nazwa
            );
          });
        } catch (e) {
          menuElement.skladniki = [];
        }

        //zmiana indeksów na elementy tablicy
      });
      console.log("[INFO] Zaktualizowano menu...");
    },
    setPaymentMethod(state, el) {
      state.paymentMethod = el;
    },
    //aktualizowanie skladnikow
    dbSkladnikiUpdate(state, el) {
      console.log(el.data.data);
      el.data.data.forEach((element) => {
        state.dbState.skladniki.push({
          id: element.id,
          nazwa: element.nazwa,
        });
      });
      console.log("[INFO] Zaktualizowano składniki...");
    },
    dbZamowieniaUpdate(state, el) {
      // state.orderNumber = el.data.data[el.data.data.length - 1].id;
      state.orderNumber = el.data.order_id;
      console.log("[INFO] Zaktualizowano zamówienia...");
    },
    dbPogodaUpdate(state, el) {
      state.openWeather = el.data;
      console.log(state.openWeather);
      console.log("[INFO] Zaktualizowano pogodę...");
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
