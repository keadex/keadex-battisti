import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const PageLayout = ({ children, title = 'Keadex' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </Head>
    {children}
  </>
)

export default PageLayout
