import RequestData from "../networking/Networking";
import { Requester } from "../networking/Routes";

const CardsServices = {
  getAllCards: async () => {
    try {
      const request = new RequestData(Requester.cards.getAllCards);

      const response = await request.request();
      return response;
    } catch (error) {
      console.warn(error);
      return null;
    }
  },
};

export default CardsServices;
