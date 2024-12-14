import { createContext } from "react";
import io from "socket.io-client";
import { servUrl } from "../utils/utils";

const socket = io(`${servUrl}/`);
export const SocketContext = createContext(socket);

export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
