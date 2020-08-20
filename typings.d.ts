/**
 * font
 */
declare module '*.woff'
declare module '*.woff2'

/**
 * mdx
 */
declare module '*.mdx'

/**
 * pug
 */
declare const pug: any

/**
 * icon
 */
declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}

/**
 * prisma
 */
declare var prisma

/**
 * log
 */
declare module 'log'
declare module 'log/lib/setup-visibility'
