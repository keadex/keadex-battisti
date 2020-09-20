import Link from 'next/link'
import PageLayout from '../components/page-layout/page-layout'

const AboutPage = () => (
  <PageLayout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </PageLayout>
)

export default AboutPage
