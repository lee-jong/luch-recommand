import axios from "axios";
import { handleError, handleSuccess } from "../index";

const jandiInstance = axios.create({
  baseURL: "https://wh.jandi.com/connect-api/webhook",
  timeout: 3 * 1000,
});

export const sendJandiWebhook = async (info: {
  name: string;
  key: string;
  distance: number;
  imageUrl: string;
}) => {
  const data = {
    body: "오늘의 점심 메뉴",
    connectColor: "#FAC11B",
    connectInfo: [
      {
        title: info.name,
        description: `거리 ${info.distance}m`,
        imageUrl: info.imageUrl,
      },
      {
        title: "점심 추천",
        imageUrl: "https://lunchlyfe.firebaseapp.com/",
      },
    ],
  };
  await jandiInstance
    .post(info.key, data)
    .then(handleSuccess)
    .catch(handleError);
};
