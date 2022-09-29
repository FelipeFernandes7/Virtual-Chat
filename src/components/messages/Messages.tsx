import { useEffect, useRef } from "react";
import firebase from "firebase/compat/app";

export function Messages({ messages }: any) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = ref.current;
  }, [messages]);

  return (
    <div className="Messages" ref={ref}>
      {messages.map((message: any) => {
        const user = firebase.auth().currentUser;
        const messageClass =
          message.user.uid === user?.uid ? "outgoing" : "incoming";

        return (
          <div key={message.key} className={`Message ${messageClass}`}>
            <div className={messageClass}>
              <img src={message.user.photo} alt={message.user.displayName} />

              <span>{message.message}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
