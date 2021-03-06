<template>
  <div class="accountSummary">
    <v-card elevation="2">
      <v-card-title>Account: {{ accountNumber }}</v-card-title>
      <div class="cardBody">
        <v-card-subtitle class="cardText balance">
          Starting Balance:
          <b>{{ formatPrice(startingBalance) }}</b>
        </v-card-subtitle>
        <v-card-subtitle class="cardText balance">
          Ending Balance:
          <b>{{ formatPrice(endingBalance) }}</b>
        </v-card-subtitle>
      </div>
    </v-card>
    <v-data-table
      :headers="transactionHeaders"
      :items="transactions"
      :single-expand="true"
      :expanded.sync="expanded"
      item-key="TransactionDate"
      show-expand
      class="elevation-2"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Transactions</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.TransactionDate="{ item }">
        <span>{{ new Date(item.TransactionDate).toDateString() }}</span>
      </template>
      <template v-slot:item.Amount="{ item }">
        <span>{{
          (item.TransactionTypeId === "Debit" ? "-" : "+") + item.Amount
        }}</span>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td id="expandedItem" :colspan="headers.length">
          <v-card elevation="0" tile>
            <v-card-title id="detailsTitle">Details</v-card-title>
            <div class="cardBody">
              <v-card-subtitle class="cardText">
                Merchant Name: <b>{{ item.MerchantName }}</b>
              </v-card-subtitle>
              <v-card-subtitle class="cardText">
                Merchant ID: <b>{{ item.MerchantId }}</b>
              </v-card-subtitle>
              <v-card-subtitle class="cardText">
                Transaction Date:
                <b>{{ new Date(item.TransactionDate).toLocaleString() }}</b>
              </v-card-subtitle>
              <v-card-subtitle class="cardText">
                Business Date:
                <b>{{ new Date(item.BusinessDate).toLocaleString() }}</b>
              </v-card-subtitle>
              <v-card-subtitle class="cardText">
                Description: <b>{{ item.Description }}</b>
              </v-card-subtitle>
            </div>
          </v-card>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "AccountSummary",
  data() {
    return {
      expanded: [],
      transactionHeaders: [
        {
          text: "Date",
          align: "start",
          value: "TransactionDate"
        },
        { text: "Merchant", value: "MerchantName" },
        { text: "Amount (-/+)", value: "Amount" }
      ]
    };
  },
  computed: {
    accountNumber() {
      return this.$store.getters.allTransactions[0].AccountNumber;
    },
    transactions() {
      return this.$store.getters.allTransactions;
    },
    startingBalance() {
      return this.$store.getters.allTransactions[0].AvailableBalance;
    },
    endingBalance() {
      const allTransactions = this.$store.getters.allTransactions;
      let endingBalance = allTransactions[0].AvailableBalance;
      allTransactions.forEach(transaction => {
        endingBalance -= transaction.Amount;
      });
      return endingBalance;
    }
  },
  methods: {
    formatPrice(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardBody {
  padding-bottom: 12px;
}
.cardText {
  padding-top: 0px;
  padding-bottom: 0px;
}
.balance {
  color: black;
  font-size: 18px;
}
#detailsTitle {
  font-size: 18px;
  padding-bottom: 0px;
}
#expandedItem {
  margin: 0px;
  padding: 0px;
}
</style>
