import { defineStore } from 'pinia';

export const useTicketStore = defineStore({
  id: 'ticketStore',
  state: () => ({
    ticket: {
      h_entry: '',
      affair: '',
      level: '',
      category: '',
      description: '',
    }
  }),
});
