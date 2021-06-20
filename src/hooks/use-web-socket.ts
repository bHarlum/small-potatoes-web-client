import { useRecoilState } from "recoil";
import { currentRoom } from "../state";

const useWebSocket = (fn: () => void) => {

  const [roomId] = useRecoilState(currentRoom)

  const socket = new WebSocket(`ws://localhost:8080/room/ws/${roomId}`, "protocolOne");

  socket.onmessage = () => {
    fn()
  }

  const sendMessage = (message: string) => {
    socket.send(message)
  }

  return [sendMessage]
}

export default useWebSocket