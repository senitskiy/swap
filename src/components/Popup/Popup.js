import React from 'react';
import { useDispatch } from 'react-redux';
import { hidePopup } from '../../store/actions/app';
import CloseBtn from '../CloseBtn/CloseBtn';
import MainBlock from '../MainBlock/MainBlock';
import './Popup.scss';

function Popup(props) {
  const dispatch = useDispatch();

  return (
    <div className="popup-wrapper">
      <MainBlock
        smallTitle={true}
        button={props.type === 'extension' && <CloseBtn func={hidePopup} />}
        content={
          <div className="popup-content">
            {props.type === 'success' && (
              <>
                <svg width="87" height="86" viewBox="0 0 87 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8" filter="url(#filter0_d)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M51.9547 10H27.0453C17.8874 10 10.5 17.3874 10.5 26.5453V51.4547C10.5 60.5516 17.8874 68 27.0453 68H51.9547C61.0516 68 68.5 60.6126 68.5 51.4547V26.5453C68.5 17.3874 61.1126 10 51.9547 10ZM36.6298 42.7855L48.7182 29.1097C49.7561 27.8887 51.5877 27.7666 52.8087 28.8044C53.9687 29.8423 54.0908 31.6739 53.0529 32.895L38.9498 48.9518C38.4003 49.5623 37.6677 49.9287 36.874 49.9287H36.7519C36.0192 49.9287 35.2866 49.6234 34.7371 49.0739L26.0677 40.4044C24.9687 39.2444 24.9687 37.4129 26.0677 36.3139C27.2277 35.215 29.0592 35.215 30.1582 36.3139L36.6298 42.7855Z" fill="#31FF9C"/>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0.5" y="0" width="86" height="86" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dx="4" dy="4"/>
                      <feGaussianBlur stdDeviation="7"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.192157 0 0 0 0 1 0 0 0 0 0.611765 0 0 0 0.5 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <p className="popup-title">Transaction Submitted</p>
                <button className="btn popup-btn" onClick={() => dispatch(hidePopup())}>Cool</button>
                <a href="" className="popup-link">View on ton.live</a>
              </>
            )}

            {props.type === 'error' && (
              <>
                <svg width="87" height="86" viewBox="0 0 87 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M51.9547 10H27.0453C17.8874 10 10.5 17.3874 10.5 26.5453V51.4547C10.5 60.5516 17.8874 68 27.0453 68H51.9547C61.0516 68 68.5 60.6126 68.5 51.4547V26.5453C68.5 17.3874 61.1126 10 51.9547 10ZM39.4999 42.1293L47.3233 49.9503C47.5283 50.1562 47.7719 50.3196 48.0403 50.431C48.3086 50.5425 48.5963 50.5999 48.8868 50.5999C49.1773 50.5999 49.465 50.5425 49.7333 50.431C50.0016 50.3196 50.2453 50.1562 50.4503 49.9503C50.6562 49.7453 50.8196 49.5016 50.931 49.2333C51.0425 48.965 51.0999 48.6773 51.0999 48.3868C51.0999 48.0963 51.0425 47.8086 50.931 47.5403C50.8196 47.2719 50.6562 47.0283 50.4503 46.8233L42.6293 38.9999L50.4503 31.1765C50.6562 30.9715 50.8196 30.7279 50.931 30.4595C51.0425 30.1912 51.0999 29.9036 51.0999 29.613C51.0999 29.3225 51.0425 29.0348 50.931 28.7665C50.8196 28.4982 50.6562 28.2545 50.4503 28.0495C50.2453 27.8436 50.0016 27.6802 49.7333 27.5688C49.465 27.4573 49.1773 27.3999 48.8868 27.3999C48.5963 27.3999 48.3086 27.4573 48.0403 27.5688C47.7719 27.6802 47.5283 27.8436 47.3233 28.0495L39.4999 35.8705L31.6765 28.0495C31.4715 27.8436 31.2279 27.6802 30.9595 27.5688C30.6912 27.4573 30.4036 27.3999 30.113 27.3999C29.8225 27.3999 29.5348 27.4573 29.2665 27.5688C28.9982 27.6802 28.7545 27.8436 28.5495 28.0495C28.3436 28.2545 28.1802 28.4982 28.0688 28.7665C27.9573 29.0348 27.8999 29.3225 27.8999 29.613C27.8999 29.9036 27.9573 30.1912 28.0688 30.4595C28.1802 30.7279 28.3436 30.9715 28.5495 31.1765L36.3705 38.9999L28.5495 46.8233C28.3436 47.0283 28.1802 47.2719 28.0688 47.5403C27.9573 47.8086 27.8999 48.0963 27.8999 48.3868C27.8999 48.6773 27.9573 48.965 28.0688 49.2333C28.1802 49.5016 28.3436 49.7453 28.5495 49.9503C28.7545 50.1562 28.9982 50.3196 29.2665 50.431C29.5348 50.5425 29.8225 50.5999 30.113 50.5999C30.4036 50.5999 30.6912 50.5425 30.9595 50.431C31.2279 50.3196 31.4715 50.1562 31.6765 49.9503L39.4999 42.1293Z" fill="#FF4D4D"/>
                    </g>
                  <defs>
                    <filter id="filter0_d" x="0.5" y="0" width="86" height="86" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dx="4" dy="4"/>
                      <feGaussianBlur stdDeviation="7"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.301961 0 0 0 0 0.301961 0 0 0 0.5 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <p className="popup-title">{props.message}</p>
                <button className="btn popup-btn" onClick={() => dispatch(hidePopup())}>Close</button>
              </>
            )}

            {props.type === 'extension' && (
              <a
                href="https://chrome.google.com/webstore/detail/extraton/hhimbkmlnofjdajamcojlcmgialocllm"
                target="_blank"
                className="btn mainblock-btn"
              >
                <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.8278 9.26675L30.435 1.21075C30.3129 1.07679 30.1371 1 29.9564 1H9.04421C8.86354 1 8.68775 1.07679 8.56568 1.21075L1.17283 9.26675C0.957979 9.50037 0.941703 9.85163 1.13377 10.1049L18.9827 33.7419C19.1048 33.9052 19.2969 34 19.5003 34C19.7038 34 19.8958 33.9036 20.0179 33.7419L37.8669 10.1032C38.0573 9.85163 38.0427 9.49874 37.8278 9.26675ZM22.5034 2.307L24.5689 9.05599H14.4334L16.4989 2.307H22.5034ZM24.6144 10.3614L19.5003 30.6802L14.3862 10.3614H24.6144ZM13.0434 10.3614L18.0859 30.3911L2.96163 10.3614H13.0434ZM25.9573 10.3614H36.039L20.9148 30.3911L25.9573 10.3614ZM35.8649 9.05599H25.9312L23.8657 2.307H29.6683L35.8649 9.05599ZM9.33068 2.307H15.1333L13.0678 9.05599H3.13579L9.33068 2.307Z" fill="white" stroke="white"/>
                </svg> &nbsp;Install Extraton
              </a>
            )}
          </div>
        }
      />
    </div>
  )
}

export default Popup;