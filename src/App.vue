<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <AccountSummary />
    </v-main>
  </v-app>
</template>

<script>
import AccountSummary from "./components/AccountSummary.vue";
import store from "./store";
import invoice from "../invoice.json";

export default {
  name: "App",

  components: {
    AccountSummary
  },
  created() {
    store.state.statement = invoice.Statement;
  }
};
</script>
