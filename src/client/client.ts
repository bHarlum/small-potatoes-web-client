import axios from "axios";
import { toCamelCase } from "../helpers/to-camel-case";
import { getServerAddress } from "./get-server-address";
import { EstimatePayload, EstimateResponse, GetRoomPayload, GetRoomResponse, Item, NewRoomPayload, NewRoomResponse } from "./types";

export default class Client {
  private url: string;
  constructor() {
    this.url = getServerAddress("http");
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  }

  public newRoom(payload: NewRoomPayload): Promise<NewRoomResponse> {
    return axios({
      method: "post",
      url: `${this.url}/new`,
      data: {
        ...payload
      },
    }
    ).then((response) => {
      return {
        id: response.data.ID
      }
    })
  }

  public getRoom(data: GetRoomPayload): Promise<GetRoomResponse> {
      return axios({
        method: "post",
        url: `${this.url}/room`,
        data: {
          id: data.id
        },
      }
      ).then((response) => {
        return {
          id: response.data.ID,
          owner: response.data.Owner,
          ownerId: response.data.OwnerID,
          items: toCamelCase(response.data.Items) as Item[],
          currentItem: response.data.CurrentItem,
        }
      }).catch(() => {
        return {
          id: "",
          owner: "",
          ownerId: "",
          items: [],
          currentItem: 0,
        }
      })
  }

  public estimate(data: EstimatePayload): Promise<EstimateResponse> {

    return axios({
      method: "post",
      url: `${this.url}/estimate`,
      data,
    }).then((r) => {
      console.log("RESPONSE", r)
    }).catch((e) => {
      console.log("RESPONSE ERROR", e)
    })
  }
}