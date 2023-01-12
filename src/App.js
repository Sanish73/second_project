
import './App.css';
import {Route} from 'react-router-dom'
import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetUpsPage from './pages/NewMeetUp';


function App() {
  return <div>
      <Route path='/'>
        <AllMeetUpsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetUpsPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </div>
  
}

export default App;
