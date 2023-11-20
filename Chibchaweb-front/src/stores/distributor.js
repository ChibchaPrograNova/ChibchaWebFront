import { defineStore } from 'pinia';

export const useDistributorStore = defineStore({
  id: 'distributorStore',
  state: () => ({
    distributor: {
      id: '',
      name: '',
      nit: '',
      address: '',
      mail: '',
      q_domains: '',
      category: '',
      bank_account:'',
      activate:true
    }
  }),
});
