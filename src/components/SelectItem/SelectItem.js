import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import { getPairReserves } from '../../extensions/sdk/run';
import { iconGenerator } from '../../iconGenerator';
import {hidePoolFromSelect, hidePoolToSelect, setPoolFromToken, setPoolPairId, setPoolToInputValue, setPoolToToken} from '../../store/actions/pool';
import {hideSwapFromSelect, hideSwapToSelect, setSwapFromToken, setSwapPairId, setSwapRate, setSwapToInputValue, setSwapToToken} from '../../store/actions/swap';
import './SelectItem.scss';

function SelectItem(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const walletIsConnected = useSelector(state => state.appReducer.walletIsConnected);

  const swapFromToken = useSelector(state => state.swapReducer.fromToken);
  const swapToToken = useSelector(state => state.swapReducer.toToken);
  const poolFromToken = useSelector(state => state.poolReducer.fromToken);
  const poolToToken = useSelector(state => state.poolReducer.toToken);

  async function handleClick() {
    if(props.isActive) { return }
    if(props.type ==='from') {
      const payload = {
        walletAddress: '',
        symbol: props.symbol,
        balance: props.balance
      }
      if(location.pathname.includes('swap')) {
        dispatch(setSwapFromToken(payload));
        if(swapToToken.symbol) {
          const payload = {
            walletAddress: '',
            symbol: '',
            balance: 0
          }
          dispatch(setSwapToToken(payload));
          dispatch(setSwapToInputValue(0));
          dispatch(setSwapPairId(''));
        }
        dispatch(hideSwapFromSelect());
      } else {
        dispatch(setPoolFromToken(payload));
        if(poolToToken.symbol) {
          const payload = {
            walletAddress: '',
            symbol: '',
            balance: 0
          }
          dispatch(setPoolToToken(payload));
          dispatch(setPoolToInputValue(0));
          dispatch(setPoolPairId(''));
        }
        dispatch(hidePoolFromSelect());
      }
    }
    if(props.type === 'to') {      
      const payload = {
        walletAddress: '',
        symbol: props.symbol,
        balance: props.balance
      }
      if(location.pathname.includes('swap')) {
        dispatch(setSwapToToken(payload));
        dispatch(setSwapPairId(props.pairId));
        dispatch(hideSwapToSelect());
      } else {
        dispatch(setPoolToToken(payload));
        dispatch(setPoolPairId(props.pairId));
        dispatch(hidePoolToSelect());
      }
    }
  }

  return (
    <div className={props.isActive ? "select-item select-item--active" : "select-item"} onClick={() => handleClick()}>
      <div className="select-item-wrapper">
        <img src={iconGenerator(props.symbol)} alt={props.symbol}/>
        <div>
          <p className="select-item-title">{props.symbol}</p>
          <p className="select-item-descr">{props.symbol}</p>
        </div>
      </div>
      { walletIsConnected && <span className="select-item-balance">{props.balance > 0 ? props.balance.toFixed(4) : props.balance}</span> }
    </div>
  )
}

export default SelectItem;