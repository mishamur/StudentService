import { Header } from 'widgets/Header'
import { Layout } from 'shared/ui/Layout'
import { Signup } from 'features/Signup'
import { Footer } from 'widgets/Header/Footer'

export default function Auth() {
  return (
    <Layout>
      <Header />
      <Signup />
      <Footer />
    </Layout>
  )
}
