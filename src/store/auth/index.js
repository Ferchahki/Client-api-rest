import axios from "axios";
export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async signin(_, credentials) {
      try {
        const response = await axios.post("auth/login", credentials);
        console.log(response.data);
      } catch (error) {
        console.log("failed");
      }
    },
  },
};
