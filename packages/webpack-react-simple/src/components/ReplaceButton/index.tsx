import React, { forwardRef } from 'react';
import Renderer from '@mybricks/renderer-pc';
import { toJSON, config } from './config';
import Button2 from '@mybricks/comlib-pc-normal/es/Button2';

import 'antd/dist/antd.css';

interface IProps {}

export interface IReplaceButtonRef {}

const ReplaceButton = forwardRef(
  (props: IProps, ref: React.ForwardedRef<IReplaceButtonRef>) => {
    return (
      <Renderer
        ref={ref}
        json={toJSON}
        comDefs={{ 'mybricks.normal-pc.button2': Button2 }}
        config={config}
        props={props}
      />
    );
  },
);

export default ReplaceButton;
