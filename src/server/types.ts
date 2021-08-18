import {HttpRequest} from "uWebSockets.js";

export type Document = (req: HttpRequest) => string;