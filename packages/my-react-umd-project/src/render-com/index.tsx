import { Renderer, materialDepsCache } from '@lingzhu-cdm-app/renderer/esm/index'
import * as MUI from '@m-ui/react'
import * as lodash from 'lodash'
import React, { useMemo } from 'react'
import { deps, schema } from './constants'
import request from './request'
// const materialDepsCache = MaterialDepsCache.getInstance()
/**
 * RenderCom
 */
export interface RenderComProps {
  /**
   * 标签（文本）
   */
  label: string
}


const RenderCom: React.FC<RenderComProps> = React.memo(props => {
  const utils = {
    lodash,
    request,
    MUI,
  }
  const { Modal, Popconfirm, Tooltip } = MUI
  useMemo(() => {
    console.log('render com props ---', props)
  }, [props])
  return (
    <div style={{ ...(props.style ?? {}) }} {...props}>
      <Renderer
        schema={schema}
        mode="RUN"
        deps={deps}
        materialLibInstanceCache={materialDepsCache.materialLibInstanceCache}
        depInstanceCache={materialDepsCache.depInstanceCache}
        modelInjectedFields={{ utils, props }}
        runtimeComponents={{
          Modal,
          Popconfirm,
          Tooltip,
        }}
      />
    </div>
  )
})

export default RenderCom
