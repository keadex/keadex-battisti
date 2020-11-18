import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string,
  description?: string
}

const PageLayout = ({ children, title = 'Keadex', description }: Props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      {description && (<meta name="description" content={description} />)}
      <title>{title}</title>
    </Head>
    {children}
  </>
)

export default PageLayout
