import { defineStore } from 'pinia';

export const useLoginStore = defineStore({
  id: 'loginStore',
  state: () => ({
    isLoggedIn: false,
    type: ''
  }),
});
