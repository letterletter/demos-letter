import React, { forwardRef } from 'react';
import Renderer from '@mybricks/renderer-pc';
import { toJSON, config } from './config';
import JsonView from '@mybricks/comlib-pc-normal/es/JsonView';
import muiltInputJs from '@mybricks/comlib-basic/es/muiltInputJs';
import CustomButton from '@mybricks/comlib-pc-normal/es/CustomButton';
import FormContainer from '@mybricks/comlib-pc-normal/es/FormContainer';
import InputTextarea from '@mybricks/comlib-pc-normal/es/InputTextarea';

import 'antd/dist/antd.css';

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  u__puFt?: (value: string) => void;
  u_2rIgU?: (value: string) => void;
  handleCommit?: (value: string) => void;
}

export interface IImageAndButtonRef {
  input_test: (value: string) => void;
  input_get: (value: string) => Promise<string>;
  setFormData: (value: string) => void;
}

const ImageAndButton = forwardRef(
  (props: IProps, ref: React.ForwardedRef<IImageAndButtonRef>) => {
    return (
      <Renderer
        className={props.className}
        style={props.style}
        ref={ref}
        json={toJSON}
        comDefs={{
          'mybricks.normal-pc.json-view': JsonView,
          'mybricks.basic-comlib._muilt-inputJs': muiltInputJs,
          'mybricks.normal-pc.custom-button': CustomButton,
          'mybricks.normal-pc.form-container': FormContainer,
          'mybricks.normal-pc.input-textarea': InputTextarea,
        }}
        config={config}
        props={props}
      />
    );
  },
);

export default ImageAndButton;
