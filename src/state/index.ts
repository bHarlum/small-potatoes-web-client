import { atom, selector } from "recoil"
import { v4 as uuidV4 } from "uuid"
import Client from "../client/client";
import { getTimestamp } from "../helpers/get-timestamp";

export const sessionToken = atom({
  key: "sessionToken",
  default: uuidV4(),
});

export const sessionOwner = atom({
  key: "sessionOwner",
  default: "",
});

export const sessionClient = atom({
  key: "sessionClient",
  default: new Client()
})

export const currentRoom = atom({
  key: "currentRoom",
  default: "",
})

export const draftItems = atom<{
  title: string;
  description: string;
}[]>({
  key: "draftItems",
  default: [],
})

export const lastInteraction = atom({
  key: "lastInteraction",
  default: getTimestamp(),
})

export const createNewRoom = selector({
  key: "createNewRoom",
  get: async ({ get }) => {
    const owner = get(sessionOwner)
    const client = get(sessionClient)
    const items = get(draftItems)
    return await client.newRoom({
      owner,
      items,
    });
  }
})

export const getRoom = selector({
  key: "getRoom",
  get: async ({ get }) => {
    const roomId = get(currentRoom)
    const client = get(sessionClient)
    get(lastInteraction)
    return await client.getRoom({
      id: roomId,
    });
  }
});