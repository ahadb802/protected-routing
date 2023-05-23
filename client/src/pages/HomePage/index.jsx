import "./index.css"
import { Footer, Header, Message } from '../../components'
const homePage = () => {
  return (
    <>
    <Header />
    <div className='welcome-message'>
    <Message />
    </div>
    <Footer />
    </>
  )
}

export default homePage