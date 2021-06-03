import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route, Redirect, useLocation, Prompt} from 'react-router-dom';
import {changeTheme, showPopup} from './store/actions/app';
import {setPairsList} from './store/actions/wallet';
import {runContractR1Method} from './freeton';
import Swap from './pages/Swap/Swap';
import Pool from './pages/Pool/Pool';
import Popup from './components/Popup/Popup';
import Header from './components/Header/Header'
import Manage from './pages/Manage/Manage';
import AddLiquidity from './components/AddLiquidity/AddLiquidity';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const popup = useSelector(state => state.appReducer.popup);
  const walletIsConnected = useSelector(state => state.appReducer.walletIsConnected);
  const swapAsyncIsWaiting = useSelector(state => state.swapReducer.swapAsyncIsWaiting);

  useEffect(() => {
    const theme = localStorage.getItem('appTheme') === null ? 'light' : localStorage.getItem('appTheme');
    dispatch(changeTheme(theme));
    
    // setInterval(async () => {
    //   try {
    //     dispatch(setPairsList(await runContractR1Method()));
    //   } catch {
    //     return;
    //   }
    // }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', function(e) {
      if(swapAsyncIsWaiting) e.returnValue = ''
    })
  }, [swapAsyncIsWaiting]);

  return (
    <>
      <Header />
      <Switch location={location}>
        <Route path="/swap" component={Swap} />
        <Route path="/pool"  component={Pool} />
        <Route path="/add-liquidity" component={AddLiquidity} />
        <Route path="/manage" render={() => !walletIsConnected ? <Redirect to="/pool" /> : <Manage />} />
        <Redirect from="" to="/swap" />
      </Switch>

      {popup.isVisible && <Popup type={popup.type} message={popup.message} />}
    </>
  );
}

export default App;