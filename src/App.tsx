import { Switch, Route } from 'react-router-dom';
import AppLayout from 'components/app-layout';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" strict>
          <AppLayout />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
