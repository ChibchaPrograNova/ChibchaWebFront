import { defineStore } from 'pinia';

export const useCardStore = defineStore({
    id: 'cardStore',
    state: () => ({
        id_Client: '',
        number: '',
        ccv: '',
    }),
});
