import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { hidePoolFromSelect, hidePoolToSelect } from '../../store/actions/pool';
import { hideSwapFromSelect, hideSwapToSelect } from '../../store/actions/swap';
import CloseBtn from '../CloseBtn/CloseBtn';
import Loader from '../Loader/Loader';
import MainBlock from "../MainBlock/MainBlock";
import SearchInput from '../SearchInput/SearchInput';
import SelectItem from '../SelectItem/SelectItem';
import './Select.scss';

function Select(props) {
  const location = useLocation();

  const tokenList = useSelector(state => state.walletReducer.tokenList);
  const pairsList = useSelector(state => state.walletReducer.pairsList);

  const swapFromToken = useSelector(state => state.swapReducer.fromToken);
  const poolFromToken = useSelector(state => state.poolReducer.fromToken);

  const fromToken = location.pathname.includes('swap') ? swapFromToken : poolFromToken;

  const swapToToken = useSelector(state => state.swapReducer.toToken);
  const poolToToken = useSelector(state => state.poolReducer.toToken);

  const toToken = location.pathname.includes('swap') ? swapToToken : poolToToken;

  const [filter, setFilter] = useState('');

  const [fromTokenList, setFromTokenList] = useState([]);
  const [toTokenList, setToTokenList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
    let fromArr = [];
    
    pairsList.forEach(i => {
      fromArr.push({
        id: i.walletA.root_address,
        walletAddress: i.walletAaddress,
        symbol: i.walletA.symbol,
        balance: +i.walletA.balance / 1000000000
      })
      fromArr.push({
        id: i.walletB.root_address,
        walletAddress: i.walletBaddress,
        symbol: i.walletB.symbol,
        balance: +i.walletB.balance / 1000000000
      })
    })
    
    fromArr = fromArr.filter((i, index, arr) => arr.findIndex(j => (j.id === i.id)) === index);
    
    // fromArr.forEach((i, index) => {
    //   tokenList.forEach(j => {
    //     if(i.id === j.id) {
    //       fromArr[index].balance = j.balance
    //     }
    //   })
    // })
    
    // setFromTokenList(fromArr);

    let toArr = [];
    if(props.type === 'to') {
      const arr = pairsList.filter(i => i.walletA.root_address === fromToken.id || i.walletB.root_address === fromToken.id);

      arr.forEach(i => {
        if(fromToken.id === i.walletA.root_address) {
          toArr.push({              
            pairId: i.pairAddress,
            id: i.walletB.root_address,
            walletAddress: i.walletBaddress,
            symbol: i.walletB.symbol,
            balance: +i.walletB.balance / 1000000000
          });
        } else if(fromToken.id === i.walletB.root_address) {
          toArr.push({              
            pairId: i.pairAddress,
            id: i.walletA.root_address,
            walletAddress: i.walletAaddress,
            symbol: i.walletA.symbol,
            balance: +i.walletA.balance / 1000000000
          });
        }
      })

      // toArr.forEach((i, index) => {
      //   tokenList.forEach(j => {
      //     if(i.id === j.id) {
      //       toArr[index].balance = j.balance
      //     }
      //   })
      // })

      // setToTokenList(toArr);
    }
    // console.log('render select');
    // if(toTokenList.length || fromTokenList.length) { setIsLoading(false); }
  // });

  function handleClose() {
    if(location.pathname.includes('swap')) {
      return props.type === 'from' ? hideSwapFromSelect : hideSwapToSelect
    } else if(location.pathname.includes('add-liquidity')) {
      return props.type === 'from' ? hidePoolFromSelect : hidePoolToSelect
    }
  }

  return ReactDOM.createPortal(
    <div className="select-wrapper">
      <MainBlock
        title={'Select a token'}
        button={<CloseBtn func={handleClose()} />}
        content={
          !isLoading ? <Loader /> :
          (<>
            <SearchInput func={setFilter.bind(this)} />
            <div className="select-list">
              { props.type === 'from' && (
                fromArr
                  .sort((a, b) => b.balance - a.balance)
                  .filter(item => item.symbol.toLowerCase().includes(filter.toLowerCase()))
                  .map(item => (
                    <SelectItem
                      type={props.type}
                      id={item.id}
                      walletAddress={item.walletAddress}
                      symbol={item.symbol}
                      balance={item.balance}
                      isActive={fromToken.symbol === item.symbol}
                      key={item.id}
                    />
                ))                  
              )}
              { props.type === 'to' && (
                toArr
                  .sort((a, b) => b.balance - a.balance)
                  .filter(item => item.symbol.toLowerCase().includes(filter.toLowerCase()))
                  .map(item => (
                    <SelectItem
                      type={props.type}
                      pairId={item.pairId}
                      id={item.id}
                      walletAddress={item.walletAddress}
                      symbol={item.symbol}
                      balance={item.balance}
                      isActive={toToken.symbol === item.symbol}
                      key={item.id}
                    />
                ))
              )}
            </div>                
          </>)
        }
      />
    </div>,
    document.querySelector('body')
  )
}

export default Select;