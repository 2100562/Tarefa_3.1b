import API_URL from "./config.js";

export const sponsorService = {
  async getSponsors(token) {
    return [];
  },

  async addSponsor(token, payload) {
    return [];
  },

  async editSponsor(token, payload) {
    return [];
  },

  async removeSponsor(token, id) {
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

export default sponsorService;
