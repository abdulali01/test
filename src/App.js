import logo from './logo.svg';
import './App.css';
import CreateAccount from './Components/CreateAccount';

function App() {


export default App;
 return (
    <div className="App">
      <div className="container">
        <HashRouter>
          <NavBar />
          <UserContext.Provider value={{ users: [{ name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 }] }}>
            <div className="container d-flex centerContent">
             // <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
             //<Route path="/deposit/" component={Deposit} />
              //<Route path="/withdraw/" component={Withdraw} />
             // <Route path="/alldata/" component={AllData} />
            </div>
          </UserContext.Provider>
        </HashRouter>
      </div>
    </div>
  );
}
