import { defineStore } from 'pinia';

export const useBuyStore = defineStore({
  id: 'buyStore',
  state: () => ({
    domainName: '',
    distribuidorName: '',
    paquete: '',
    plan: '',
    precio: '',
    precioDiscount: '',
    date_start: '',
    date_end: '',
  }),
});
