<template>
  <RecipeTemplateBar
    v-for="item in this.$store.state.dbState.menu.data"
    :key="item.id"
    :item="item"
  />
  <!-- 
    @click="$emit('rerender', 'CHANGED')" -->
</template>

<script>
import recipeJson from "../json/recipes_burgers.json";
import RecipeTemplateBar from "./RecipeTemplateBar.vue";
const recipeList = recipeJson;

export default {
  components: { RecipeTemplateBar },
  props: [],
  name: "RecipesComponent",
  data() {
    return {
      recipeList,
    };
  },
};
</script>

<style></style>
