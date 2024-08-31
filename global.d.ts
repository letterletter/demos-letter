declare const __DEV__: boolean
declare const __TEST__: boolean
declare const __GLOBAL__: boolean

declare module '*.module.less' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.svg' {
  export const ReactComponent: (
    props: Jsx.IntrinsicElements['svg'],
  ) => JSX.Element
  const url: string
  export default url
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {
  _iframeInstance: HTMLIFrameElement
  [key: string]: any
}
