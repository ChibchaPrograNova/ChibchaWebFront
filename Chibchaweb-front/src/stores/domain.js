import { defineStore } from 'pinia';

export const useDomainStore = defineStore({
  id: 'domainStore',
  state: () => ({
    domain: {
      id_Client: '',
      id_Plan: '',
      name: '',
      id_Distributor: '',
      available: '',
      plataform: '',
      description: '',
    },
  }),
});
