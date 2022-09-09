const URI = "http://localhost:5200";

export default {
  async fetchUsers() {
    try {
      let response = await fetch(URI + '/users');
      let resp = await response.json();
      return resp;
    } catch (e) {
      console.log(e);
    }
  },
};
