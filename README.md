# Account Summary

## Description

The Account Summary serves as a place for a user to view their invoices.  The component displays all account balance information, as well as a transaction history table.  Each table row can be expanded to view more detailed information about a given transaction.

## Implementation Details

This project allowed me the opportunity to dip my toes into the world of Vue.js.

The project was generated using the [Vue Cli (4.5.0)](https://cli.vuejs.org/).

The sample data can be found in `invoice.json`, which is then loaded into a Vuex store by the `App.vue` component.

The store can return the raw data, or an array of transactions that are sorted by `TransactionDate` ascending.

Since the assignment had specifically asked for a component, all other work is in the AccountSummary component (`src/components/AccountSummary.vue`).  Ideally, some of the repetitive references to the store could be abstracted out to the store itself, but I left them in the component to abide by Assessment guidelines.

The component uses [Vuetify](https://vuetifyjs.com/en/introduction/why-vuetify/) to quickly scaffold elegant UI elements.

## Project setup
```
npm install
```

### Run the project locally
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```