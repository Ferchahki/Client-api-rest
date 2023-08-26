import axios from "axios";
export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {

    async signIn(__, credentials) {

      try {
          const response = await axios.post('auth/login', credentials)
          
          console.log(response.data);

      } catch (error) {
          console.log(error)
      }

      },
  },
};
