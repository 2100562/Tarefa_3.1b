import API_URL from "./config.js";

export const expertService = {
  async getExperts(token) {
    return [];
  },

  async addExpert(token, payload) {
    return [];
  },

  async editExpert(token, payload) {
    return [];
  },

  async removeExpert(token, id) {
    return [];
  }

};

function handleResponses(code) {
  let message = "";
  switch (code) {
    case 401:
      message = "Não está autorizado a executar esta ação!";
      break;
    default:
      message = "Mensagem desconhecida";
      break;
  }
  return message;
}

export default expertService;
