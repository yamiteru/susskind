import { Data } from "../../server/types";

export type IndexProps = {
  name: string;
  links: [title: string, link: string][];
};

const IndexData: Data<IndexProps> = async () => ({
  name: "Yamiteru",
  links: [
    ["Susskind", "https://github.com/the-yamiteru/susskind"],
    ["Stoic", "https://github.com/the-yamiteru/stoic"],
    ["uWebSockets.js", "https://github.com/uNetworking/uWebSockets.js"],
  ],
});

export default IndexData;
