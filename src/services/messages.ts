import { db } from "../firebase/firebase";
const MessagingService = {
  async getMessages() {
    return db
      .collection('message')
      .get()
      .then((messages) => {
        let _messages = [];
        messages.forEach((messages) => {
          _messages.push(messages.data());
          console.log(messages.data());
        });
        return messages;
      });
  },
};
export default MessagingService;
