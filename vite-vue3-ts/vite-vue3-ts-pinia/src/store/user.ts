import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  // options

  state: () => ({
    name: 'cherish',
    age: 12,
  }),
  actions: {
    changeName(name: string) {
      this.name = name;
    },
    changeAge(age: number) {
      this.age = age;
    },
  },
  getters: {
    counter() {
      this.age++;
    },
  },
});
