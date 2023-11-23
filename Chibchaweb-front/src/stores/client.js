import { defineStore } from 'pinia';

export const useClientStore = defineStore({
  id: 'clientStore',
  state: () => ({
    client: {
      id: '',
      name: '',
      identification: '',
      address: '',
      mail: '',
      age: '',
      password: '',
      country: '',
      plans: [],
    }
  }),
});
