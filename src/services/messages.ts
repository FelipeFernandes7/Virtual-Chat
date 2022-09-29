import firebase from "firebase/compat";
const MessagingService = {
  async getMessages() {
    return firebase
      .firestore()
      .collection("message")
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
  observeMessages(callback: any) {
    firebase.firestore().collection("messages").onSnapshot(callback);
  },

  async sendMessage(message: any) {
    const user = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection("messages")
      .add({
        user: {
          uid: user?.uid,
          photo: user?.photoURL,
          name: user?.displayName,
          email: user?.email,
        },
        message,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      });
  },
};

export default MessagingService;
