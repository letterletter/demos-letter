import {
  createRequires,
  createUseRemoteComponent
} from "@paciolan/remote-component/dist/index.js";
import { resolve } from "../../../remote-component.config.js";

const requires = createRequires(resolve);

export const useRemoteComponent = createUseRemoteComponent({ requires });
