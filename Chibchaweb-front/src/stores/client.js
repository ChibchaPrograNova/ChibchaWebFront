import { defineStore } from 'pinia';

export const useClientStore = defineStore({
  id: 'clientStore',
  state: () => ({
    name: '',
    identification: '',
    address: '',
    mail: '',
    age: '',
    country: '',
    plans: [],
  }),
});
