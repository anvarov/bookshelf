import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import { Dialog } from '@reach/dialog'

const allowedModalStates = {
    NONE: 'none',
    LOGIN: 'login',
    REGISTER: 'register'
}
function App() {
  const [modal, setModal] = React.useState(allowedModalStates.NONE)
  const openLogin = () => setModal(allowedModalStates.LOGIN)
  const openRegister = () => setModal(allowedModalStates.REGISTER)
  const close = () => setModal(allowedModalStates.NONE)
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={openLogin}>Login</button>
      </div>
        <Dialog isOpen={allowedModalStates.LOGIN === modal} onDismiss={close}>
            <p>Login</p>
            <button onClick={close}>Close</button>
        </Dialog>
     

        <Dialog isOpen={allowedModalStates.REGISTER === modal} onDismiss={close}>
            <div>
            <p>Register</p>
                
            </div>
        </Dialog>
      <div>
        <button onClick={openRegister}>Register</button>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
