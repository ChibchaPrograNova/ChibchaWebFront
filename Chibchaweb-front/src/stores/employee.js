import { defineStore } from 'pinia';

export const useEmployeeStore = defineStore({
  id: 'employeeStore',
  state: () => ({
    employee: {
      id: '',
      name: '',
      identification: '',
      address: '',
      mail: '',
      password:'',
      age: '',
      country: '',
      occupation: '',
      salary:'',
      activate:true
    }
  }),
});
