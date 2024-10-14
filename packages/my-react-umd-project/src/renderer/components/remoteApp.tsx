import React, { useEffect} from "react";
import { useRemoteComponent } from "../hooks/use-remote-comp";
import { urls } from '../constants'
const plugins = ["https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/Time.js","https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js", "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/Counter.js"]; // prettier-ignore

const RenderPlugin = ({ plugin, ...props }) => {
  const [loading, err, Component] = useRemoteComponent(plugin);

  if (loading) {
    return <div>Loading...</div>;
  }


  console.log(err, 'Component', Component);

  if (err != null) {
    return <div>Unknown Error: {err.toString()}</div>;
  }

  return <Component {...props} >
    <div style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}></div>
  </Component>;
};

const RenderPlugins = ({ pluginList }) =>
  pluginList.map((plugin) => <RenderPlugin plugin={plugin} label="FUFUFU"  text="BUBUBU" />);

const App = (props) => {
  return <RenderPlugins pluginList={[urls[4]]} />;
};

export default App;
