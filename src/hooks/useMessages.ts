import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export function useMessages() {
  const [messages, setMessages] = useState([]);
  const [messagesCollection, loadingMessages, error] = useCollection(
    db.collection("messages").orderBy("created", "desc").limit(500) as any
  );

  useEffect(() => {
    const newMessages: any =
      messagesCollection?.docs
        .map((doc) => ({
          ...doc.data(),
          key: doc.id,
        }))
        .reverse() || [];

    setMessages(newMessages);
  }, [messagesCollection]);

  return {
    messages,
    loadingMessages,
    error,
  };
}

