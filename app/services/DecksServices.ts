import RequestData from "../networking/Networking";
import { Requester } from "../networking/Routes";

const DecksServices = {
  getAllDecks: async () => {
    try {
      const request = new RequestData(Requester.decks.getAllDecks);

      const response = await request.request();
      return response;
    } catch (error) {
      return null;
    }
  },
};

export default DecksServices;
