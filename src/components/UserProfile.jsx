import {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const UserProfile = () => {
    const {users , theme , toggleTheme } = useContext(AppContext)
    return (
        <div>
          <p>Current theme: <b>{theme}</b></p>
          <button onClick={toggleTheme}>Toggle Theme</button>
    
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.age} years)
              </li>
            ))}
          </ul>
        </div>
      )
    }
    export default UserProfile