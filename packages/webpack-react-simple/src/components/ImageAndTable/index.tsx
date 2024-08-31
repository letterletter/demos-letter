import React, { forwardRef } from 'react';
import Renderer from '@mybricks/renderer-pc';
import { toJSON, config } from './config';
import SingleImage from '@mybricks/comlib-pc-normal/es/SingleImage';
import Text from '@mybricks/comlib-pc-normal/es/Text';
import CustomButton from '@mybricks/comlib-pc-normal/es/CustomButton';
import Table from '@mybricks/comlib-pc-normal/es/Table';

import 'antd/dist/antd.css';

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  imageSrc?: string;
  textLabel?: string;
  buttonLabel?: string;
}

export interface IImageAndTableRef {
  u_xY_io: (value: string) => void;
}

const ImageAndTable = forwardRef(
  (props: IProps, ref: React.ForwardedRef<IImageAndTableRef>) => {
    return (
      <Renderer
        className={props.className}
        style={props.style}
        ref={ref}
        json={toJSON}
        comDefs={{
          'mybricks.normal-pc.single-image': SingleImage,
          'mybricks.normal-pc.text': Text,
          'mybricks.normal-pc.custom-button': CustomButton,
          'mybricks.normal-pc.table': Table,
        }}
        config={config}
        props={props}
      />
    );
  },
);

export default ImageAndTable;
