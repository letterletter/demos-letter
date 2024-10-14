/**
 * src/lib/loadRemoteModule.js
 */

import createLoadRemoteModule from "@paciolan/remote-module-loader";
import {
  createRequires,
} from "@paciolan/remote-component/dist/index.js";
import axios from "axios";

import { resolve } from "../../../remote-component.config.js";

const requires = createRequires(resolve);
const fetcher = url => fetch(url).then(request => request.text());

export default createLoadRemoteModule({ fetcher });