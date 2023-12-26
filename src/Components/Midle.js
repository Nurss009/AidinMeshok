import React from 'react';
import place11 from '../Assets/place11.png';
import place22 from '../Assets/place22.png';
import place33 from '../Assets/place33.png';

const Midle = () => {
    return (
        <div className={'container'}>
            <div className="Choose">
                <h5 className="Choosee">Choose Your Destination</h5>
            </div>
           <div className="row">
               <div className="col-4">
                   <img className={'ima'} src={place11} alt="place11"/>

                   <div className="text-card">
                       <h5>Santorini, Oia Greece</h5>
                      <div className="div">
                          <span  className={'text-fot__span'} >2000$</span>
                          <svg width="173" height="22" viewBox="0 0 173 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 4L8.5716 8.83688H13.6574L9.5429 11.8262L11.1145 16.6631L7 13.6738L2.8855 16.6631L4.4571 11.8262L0.342604 8.83688H5.4284L7 4Z" fill="#FFC01E"/>
                              <path d="M23 4L24.5716 8.83688H29.6574L25.5429 11.8262L27.1145 16.6631L23 13.6738L18.8855 16.6631L20.4571 11.8262L16.3426 8.83688H21.4284L23 4Z" fill="#FFC01E"/>
                              <path d="M39 4L40.5716 8.83688H45.6574L41.5429 11.8262L43.1145 16.6631L39 13.6738L34.8855 16.6631L36.4571 11.8262L32.3426 8.83688H37.4284L39 4Z" fill="#FFC01E"/>
                              <path d="M56 4L57.5716 8.83688H62.6574L58.5429 11.8262L60.1145 16.6631L56 13.6738L51.8855 16.6631L53.4571 11.8262L49.3426 8.83688H54.4284L56 4Z" fill="#FFC01E"/>
                              <path d="M72 4L73.5716 8.83688H78.6574L74.5429 11.8262L76.1145 16.6631L72 13.6738L67.8855 16.6631L69.4571 11.8262L65.3426 8.83688H70.4284L72 4Z" fill="#FFC01E"/>
                              <path d="M95.126 13.148C95.126 14.324 94.718 15.308 93.902 16.1C93.086 16.892 92.078 17.288 90.878 17.288C89.918 17.288 89.048 16.988 88.268 16.388C87.488 15.788 86.972 14.978 86.72 13.958L88.196 13.364C88.376 14.084 88.7 14.654 89.168 15.074C89.648 15.494 90.206 15.704 90.842 15.704C91.61 15.704 92.234 15.47 92.714 15.002C93.206 14.522 93.452 13.91 93.452 13.166C93.452 12.41 93.206 11.792 92.714 11.312C92.234 10.832 91.616 10.592 90.86 10.592C89.984 10.592 89.294 10.946 88.79 11.654L87.116 10.934L87.908 4.688H94.37V6.272H89.294L88.844 9.8L88.916 9.818C89.528 9.326 90.272 9.08 91.148 9.08C92.252 9.08 93.188 9.47 93.956 10.25C94.736 11.03 95.126 11.996 95.126 13.148ZM104.75 17H102.752L99.9984 12.842L98.6484 14.174V17H96.9924V4.112H98.6484V12.05L102.464 8.18H104.588V8.252L101.15 11.672L104.75 16.928V17ZM111.593 5.696V10.232H114.257C114.929 10.232 115.499 10.016 115.967 9.584C116.435 9.14 116.669 8.594 116.669 7.946C116.669 7.346 116.447 6.824 116.003 6.38C115.571 5.924 115.025 5.696 114.365 5.696H111.593ZM111.593 17H109.937V4.112H114.329C115.445 4.112 116.393 4.484 117.173 5.228C117.965 5.96 118.361 6.866 118.361 7.946C118.361 8.834 118.067 9.626 117.479 10.322C116.903 11.006 116.171 11.444 115.283 11.636L115.247 11.69L118.865 16.928V17H116.903L113.429 11.78H111.593V17ZM123.839 17.288C122.543 17.288 121.475 16.844 120.635 15.956C119.795 15.068 119.375 13.946 119.375 12.59C119.375 11.246 119.783 10.13 120.599 9.242C121.415 8.342 122.459 7.892 123.731 7.892C125.039 7.892 126.077 8.318 126.845 9.17C127.625 10.01 128.015 11.192 128.015 12.716L127.997 12.896H121.067C121.091 13.76 121.379 14.456 121.931 14.984C122.483 15.512 123.143 15.776 123.911 15.776C124.967 15.776 125.795 15.248 126.395 14.192L127.871 14.912C127.475 15.656 126.923 16.238 126.215 16.658C125.519 17.078 124.727 17.288 123.839 17.288ZM121.193 11.528H126.251C126.203 10.916 125.951 10.412 125.495 10.016C125.051 9.608 124.451 9.404 123.695 9.404C123.071 9.404 122.531 9.596 122.075 9.98C121.631 10.364 121.337 10.88 121.193 11.528ZM133.638 17H131.982L128.418 8.18H130.218L132.81 15.02H132.846L135.474 8.18H137.238L133.638 17ZM140.461 5.138C140.461 5.462 140.347 5.738 140.119 5.966C139.891 6.194 139.615 6.308 139.291 6.308C138.967 6.308 138.691 6.194 138.463 5.966C138.235 5.738 138.121 5.462 138.121 5.138C138.121 4.814 138.235 4.538 138.463 4.31C138.691 4.082 138.967 3.968 139.291 3.968C139.615 3.968 139.891 4.082 140.119 4.31C140.347 4.538 140.461 4.814 140.461 5.138ZM140.119 8.18V17H138.463V8.18H140.119ZM146.146 17.288C144.85 17.288 143.782 16.844 142.942 15.956C142.102 15.068 141.682 13.946 141.682 12.59C141.682 11.246 142.09 10.13 142.906 9.242C143.722 8.342 144.766 7.892 146.038 7.892C147.346 7.892 148.384 8.318 149.152 9.17C149.932 10.01 150.322 11.192 150.322 12.716L150.304 12.896H143.374C143.398 13.76 143.686 14.456 144.238 14.984C144.79 15.512 145.45 15.776 146.218 15.776C147.274 15.776 148.102 15.248 148.702 14.192L150.178 14.912C149.782 15.656 149.23 16.238 148.522 16.658C147.826 17.078 147.034 17.288 146.146 17.288ZM143.5 11.528H148.558C148.51 10.916 148.258 10.412 147.802 10.016C147.358 9.608 146.758 9.404 146.002 9.404C145.378 9.404 144.838 9.596 144.382 9.98C143.938 10.364 143.644 10.88 143.5 11.528ZM164.152 8.18L161.308 17H159.616L157.42 10.232L155.242 17H153.568L150.724 8.18H152.452L154.414 14.84H154.432L156.61 8.18H158.32L160.498 14.84H160.516L162.46 8.18H164.152ZM171.981 14.552C171.981 15.32 171.645 15.968 170.973 16.496C170.301 17.024 169.455 17.288 168.435 17.288C167.547 17.288 166.767 17.06 166.095 16.604C165.423 16.136 164.943 15.524 164.655 14.768L166.131 14.138C166.347 14.666 166.659 15.08 167.067 15.38C167.487 15.668 167.943 15.812 168.435 15.812C168.963 15.812 169.401 15.698 169.749 15.47C170.109 15.242 170.289 14.972 170.289 14.66C170.289 14.096 169.857 13.682 168.993 13.418L167.481 13.04C165.765 12.608 164.907 11.78 164.907 10.556C164.907 9.752 165.231 9.11 165.879 8.63C166.539 8.138 167.379 7.892 168.399 7.892C169.179 7.892 169.881 8.078 170.505 8.45C171.141 8.822 171.585 9.32 171.837 9.944L170.361 10.556C170.193 10.184 169.917 9.896 169.533 9.692C169.161 9.476 168.741 9.368 168.273 9.368C167.841 9.368 167.451 9.476 167.103 9.692C166.767 9.908 166.599 10.172 166.599 10.484C166.599 10.988 167.073 11.348 168.021 11.564L169.353 11.906C171.105 12.338 171.981 13.22 171.981 14.552Z" fill="#A79997"/>
                          </svg>
                          <button className={'button'}>+</button>
                      </div>
                   </div>
               </div>
               <div className="col-4">
                   <img className={'ima'} src={place22} alt="place23"/>
                   <div className="text-card">
                       <h5>Santorini, Oia Greece</h5>
                       <div className="div">
                           <span  className={'text-fot__span'} >2000$</span>
                           <svg width="173" height="22" viewBox="0 0 173 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M7 4L8.5716 8.83688H13.6574L9.5429 11.8262L11.1145 16.6631L7 13.6738L2.8855 16.6631L4.4571 11.8262L0.342604 8.83688H5.4284L7 4Z" fill="#FFC01E"/>
                               <path d="M23 4L24.5716 8.83688H29.6574L25.5429 11.8262L27.1145 16.6631L23 13.6738L18.8855 16.6631L20.4571 11.8262L16.3426 8.83688H21.4284L23 4Z" fill="#FFC01E"/>
                               <path d="M39 4L40.5716 8.83688H45.6574L41.5429 11.8262L43.1145 16.6631L39 13.6738L34.8855 16.6631L36.4571 11.8262L32.3426 8.83688H37.4284L39 4Z" fill="#FFC01E"/>
                               <path d="M56 4L57.5716 8.83688H62.6574L58.5429 11.8262L60.1145 16.6631L56 13.6738L51.8855 16.6631L53.4571 11.8262L49.3426 8.83688H54.4284L56 4Z" fill="#FFC01E"/>
                               <path d="M72 4L73.5716 8.83688H78.6574L74.5429 11.8262L76.1145 16.6631L72 13.6738L67.8855 16.6631L69.4571 11.8262L65.3426 8.83688H70.4284L72 4Z" fill="#FFC01E"/>
                               <path d="M95.126 13.148C95.126 14.324 94.718 15.308 93.902 16.1C93.086 16.892 92.078 17.288 90.878 17.288C89.918 17.288 89.048 16.988 88.268 16.388C87.488 15.788 86.972 14.978 86.72 13.958L88.196 13.364C88.376 14.084 88.7 14.654 89.168 15.074C89.648 15.494 90.206 15.704 90.842 15.704C91.61 15.704 92.234 15.47 92.714 15.002C93.206 14.522 93.452 13.91 93.452 13.166C93.452 12.41 93.206 11.792 92.714 11.312C92.234 10.832 91.616 10.592 90.86 10.592C89.984 10.592 89.294 10.946 88.79 11.654L87.116 10.934L87.908 4.688H94.37V6.272H89.294L88.844 9.8L88.916 9.818C89.528 9.326 90.272 9.08 91.148 9.08C92.252 9.08 93.188 9.47 93.956 10.25C94.736 11.03 95.126 11.996 95.126 13.148ZM104.75 17H102.752L99.9984 12.842L98.6484 14.174V17H96.9924V4.112H98.6484V12.05L102.464 8.18H104.588V8.252L101.15 11.672L104.75 16.928V17ZM111.593 5.696V10.232H114.257C114.929 10.232 115.499 10.016 115.967 9.584C116.435 9.14 116.669 8.594 116.669 7.946C116.669 7.346 116.447 6.824 116.003 6.38C115.571 5.924 115.025 5.696 114.365 5.696H111.593ZM111.593 17H109.937V4.112H114.329C115.445 4.112 116.393 4.484 117.173 5.228C117.965 5.96 118.361 6.866 118.361 7.946C118.361 8.834 118.067 9.626 117.479 10.322C116.903 11.006 116.171 11.444 115.283 11.636L115.247 11.69L118.865 16.928V17H116.903L113.429 11.78H111.593V17ZM123.839 17.288C122.543 17.288 121.475 16.844 120.635 15.956C119.795 15.068 119.375 13.946 119.375 12.59C119.375 11.246 119.783 10.13 120.599 9.242C121.415 8.342 122.459 7.892 123.731 7.892C125.039 7.892 126.077 8.318 126.845 9.17C127.625 10.01 128.015 11.192 128.015 12.716L127.997 12.896H121.067C121.091 13.76 121.379 14.456 121.931 14.984C122.483 15.512 123.143 15.776 123.911 15.776C124.967 15.776 125.795 15.248 126.395 14.192L127.871 14.912C127.475 15.656 126.923 16.238 126.215 16.658C125.519 17.078 124.727 17.288 123.839 17.288ZM121.193 11.528H126.251C126.203 10.916 125.951 10.412 125.495 10.016C125.051 9.608 124.451 9.404 123.695 9.404C123.071 9.404 122.531 9.596 122.075 9.98C121.631 10.364 121.337 10.88 121.193 11.528ZM133.638 17H131.982L128.418 8.18H130.218L132.81 15.02H132.846L135.474 8.18H137.238L133.638 17ZM140.461 5.138C140.461 5.462 140.347 5.738 140.119 5.966C139.891 6.194 139.615 6.308 139.291 6.308C138.967 6.308 138.691 6.194 138.463 5.966C138.235 5.738 138.121 5.462 138.121 5.138C138.121 4.814 138.235 4.538 138.463 4.31C138.691 4.082 138.967 3.968 139.291 3.968C139.615 3.968 139.891 4.082 140.119 4.31C140.347 4.538 140.461 4.814 140.461 5.138ZM140.119 8.18V17H138.463V8.18H140.119ZM146.146 17.288C144.85 17.288 143.782 16.844 142.942 15.956C142.102 15.068 141.682 13.946 141.682 12.59C141.682 11.246 142.09 10.13 142.906 9.242C143.722 8.342 144.766 7.892 146.038 7.892C147.346 7.892 148.384 8.318 149.152 9.17C149.932 10.01 150.322 11.192 150.322 12.716L150.304 12.896H143.374C143.398 13.76 143.686 14.456 144.238 14.984C144.79 15.512 145.45 15.776 146.218 15.776C147.274 15.776 148.102 15.248 148.702 14.192L150.178 14.912C149.782 15.656 149.23 16.238 148.522 16.658C147.826 17.078 147.034 17.288 146.146 17.288ZM143.5 11.528H148.558C148.51 10.916 148.258 10.412 147.802 10.016C147.358 9.608 146.758 9.404 146.002 9.404C145.378 9.404 144.838 9.596 144.382 9.98C143.938 10.364 143.644 10.88 143.5 11.528ZM164.152 8.18L161.308 17H159.616L157.42 10.232L155.242 17H153.568L150.724 8.18H152.452L154.414 14.84H154.432L156.61 8.18H158.32L160.498 14.84H160.516L162.46 8.18H164.152ZM171.981 14.552C171.981 15.32 171.645 15.968 170.973 16.496C170.301 17.024 169.455 17.288 168.435 17.288C167.547 17.288 166.767 17.06 166.095 16.604C165.423 16.136 164.943 15.524 164.655 14.768L166.131 14.138C166.347 14.666 166.659 15.08 167.067 15.38C167.487 15.668 167.943 15.812 168.435 15.812C168.963 15.812 169.401 15.698 169.749 15.47C170.109 15.242 170.289 14.972 170.289 14.66C170.289 14.096 169.857 13.682 168.993 13.418L167.481 13.04C165.765 12.608 164.907 11.78 164.907 10.556C164.907 9.752 165.231 9.11 165.879 8.63C166.539 8.138 167.379 7.892 168.399 7.892C169.179 7.892 169.881 8.078 170.505 8.45C171.141 8.822 171.585 9.32 171.837 9.944L170.361 10.556C170.193 10.184 169.917 9.896 169.533 9.692C169.161 9.476 168.741 9.368 168.273 9.368C167.841 9.368 167.451 9.476 167.103 9.692C166.767 9.908 166.599 10.172 166.599 10.484C166.599 10.988 167.073 11.348 168.021 11.564L169.353 11.906C171.105 12.338 171.981 13.22 171.981 14.552Z" fill="#A79997"/>
                           </svg>
                               <button className={'button'}>+</button>
                       </div>
                   </div>
                   <div className="Vive">
                       <button>View All Places</button>
                   </div>
               </div>
               <div className="col-4">
                   <img className={'ima'} src={place33} alt="place33"/>
                   <div className="text-card">
                       <h5>Santorini, Oia Greece</h5>
                      <div className="div">
                          <span  className={'text-fot__span'} >2000$</span>
                          <svg width="173" height="22" viewBox="0 0 173 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 4L8.5716 8.83688H13.6574L9.5429 11.8262L11.1145 16.6631L7 13.6738L2.8855 16.6631L4.4571 11.8262L0.342604 8.83688H5.4284L7 4Z" fill="#FFC01E"/>
                              <path d="M23 4L24.5716 8.83688H29.6574L25.5429 11.8262L27.1145 16.6631L23 13.6738L18.8855 16.6631L20.4571 11.8262L16.3426 8.83688H21.4284L23 4Z" fill="#FFC01E"/>
                              <path d="M39 4L40.5716 8.83688H45.6574L41.5429 11.8262L43.1145 16.6631L39 13.6738L34.8855 16.6631L36.4571 11.8262L32.3426 8.83688H37.4284L39 4Z" fill="#FFC01E"/>
                              <path d="M56 4L57.5716 8.83688H62.6574L58.5429 11.8262L60.1145 16.6631L56 13.6738L51.8855 16.6631L53.4571 11.8262L49.3426 8.83688H54.4284L56 4Z" fill="#FFC01E"/>
                              <path d="M72 4L73.5716 8.83688H78.6574L74.5429 11.8262L76.1145 16.6631L72 13.6738L67.8855 16.6631L69.4571 11.8262L65.3426 8.83688H70.4284L72 4Z" fill="#FFC01E"/>
                              <path d="M95.126 13.148C95.126 14.324 94.718 15.308 93.902 16.1C93.086 16.892 92.078 17.288 90.878 17.288C89.918 17.288 89.048 16.988 88.268 16.388C87.488 15.788 86.972 14.978 86.72 13.958L88.196 13.364C88.376 14.084 88.7 14.654 89.168 15.074C89.648 15.494 90.206 15.704 90.842 15.704C91.61 15.704 92.234 15.47 92.714 15.002C93.206 14.522 93.452 13.91 93.452 13.166C93.452 12.41 93.206 11.792 92.714 11.312C92.234 10.832 91.616 10.592 90.86 10.592C89.984 10.592 89.294 10.946 88.79 11.654L87.116 10.934L87.908 4.688H94.37V6.272H89.294L88.844 9.8L88.916 9.818C89.528 9.326 90.272 9.08 91.148 9.08C92.252 9.08 93.188 9.47 93.956 10.25C94.736 11.03 95.126 11.996 95.126 13.148ZM104.75 17H102.752L99.9984 12.842L98.6484 14.174V17H96.9924V4.112H98.6484V12.05L102.464 8.18H104.588V8.252L101.15 11.672L104.75 16.928V17ZM111.593 5.696V10.232H114.257C114.929 10.232 115.499 10.016 115.967 9.584C116.435 9.14 116.669 8.594 116.669 7.946C116.669 7.346 116.447 6.824 116.003 6.38C115.571 5.924 115.025 5.696 114.365 5.696H111.593ZM111.593 17H109.937V4.112H114.329C115.445 4.112 116.393 4.484 117.173 5.228C117.965 5.96 118.361 6.866 118.361 7.946C118.361 8.834 118.067 9.626 117.479 10.322C116.903 11.006 116.171 11.444 115.283 11.636L115.247 11.69L118.865 16.928V17H116.903L113.429 11.78H111.593V17ZM123.839 17.288C122.543 17.288 121.475 16.844 120.635 15.956C119.795 15.068 119.375 13.946 119.375 12.59C119.375 11.246 119.783 10.13 120.599 9.242C121.415 8.342 122.459 7.892 123.731 7.892C125.039 7.892 126.077 8.318 126.845 9.17C127.625 10.01 128.015 11.192 128.015 12.716L127.997 12.896H121.067C121.091 13.76 121.379 14.456 121.931 14.984C122.483 15.512 123.143 15.776 123.911 15.776C124.967 15.776 125.795 15.248 126.395 14.192L127.871 14.912C127.475 15.656 126.923 16.238 126.215 16.658C125.519 17.078 124.727 17.288 123.839 17.288ZM121.193 11.528H126.251C126.203 10.916 125.951 10.412 125.495 10.016C125.051 9.608 124.451 9.404 123.695 9.404C123.071 9.404 122.531 9.596 122.075 9.98C121.631 10.364 121.337 10.88 121.193 11.528ZM133.638 17H131.982L128.418 8.18H130.218L132.81 15.02H132.846L135.474 8.18H137.238L133.638 17ZM140.461 5.138C140.461 5.462 140.347 5.738 140.119 5.966C139.891 6.194 139.615 6.308 139.291 6.308C138.967 6.308 138.691 6.194 138.463 5.966C138.235 5.738 138.121 5.462 138.121 5.138C138.121 4.814 138.235 4.538 138.463 4.31C138.691 4.082 138.967 3.968 139.291 3.968C139.615 3.968 139.891 4.082 140.119 4.31C140.347 4.538 140.461 4.814 140.461 5.138ZM140.119 8.18V17H138.463V8.18H140.119ZM146.146 17.288C144.85 17.288 143.782 16.844 142.942 15.956C142.102 15.068 141.682 13.946 141.682 12.59C141.682 11.246 142.09 10.13 142.906 9.242C143.722 8.342 144.766 7.892 146.038 7.892C147.346 7.892 148.384 8.318 149.152 9.17C149.932 10.01 150.322 11.192 150.322 12.716L150.304 12.896H143.374C143.398 13.76 143.686 14.456 144.238 14.984C144.79 15.512 145.45 15.776 146.218 15.776C147.274 15.776 148.102 15.248 148.702 14.192L150.178 14.912C149.782 15.656 149.23 16.238 148.522 16.658C147.826 17.078 147.034 17.288 146.146 17.288ZM143.5 11.528H148.558C148.51 10.916 148.258 10.412 147.802 10.016C147.358 9.608 146.758 9.404 146.002 9.404C145.378 9.404 144.838 9.596 144.382 9.98C143.938 10.364 143.644 10.88 143.5 11.528ZM164.152 8.18L161.308 17H159.616L157.42 10.232L155.242 17H153.568L150.724 8.18H152.452L154.414 14.84H154.432L156.61 8.18H158.32L160.498 14.84H160.516L162.46 8.18H164.152ZM171.981 14.552C171.981 15.32 171.645 15.968 170.973 16.496C170.301 17.024 169.455 17.288 168.435 17.288C167.547 17.288 166.767 17.06 166.095 16.604C165.423 16.136 164.943 15.524 164.655 14.768L166.131 14.138C166.347 14.666 166.659 15.08 167.067 15.38C167.487 15.668 167.943 15.812 168.435 15.812C168.963 15.812 169.401 15.698 169.749 15.47C170.109 15.242 170.289 14.972 170.289 14.66C170.289 14.096 169.857 13.682 168.993 13.418L167.481 13.04C165.765 12.608 164.907 11.78 164.907 10.556C164.907 9.752 165.231 9.11 165.879 8.63C166.539 8.138 167.379 7.892 168.399 7.892C169.179 7.892 169.881 8.078 170.505 8.45C171.141 8.822 171.585 9.32 171.837 9.944L170.361 10.556C170.193 10.184 169.917 9.896 169.533 9.692C169.161 9.476 168.741 9.368 168.273 9.368C167.841 9.368 167.451 9.476 167.103 9.692C166.767 9.908 166.599 10.172 166.599 10.484C166.599 10.988 167.073 11.348 168.021 11.564L169.353 11.906C171.105 12.338 171.981 13.22 171.981 14.552Z" fill="#A79997"/>
                          </svg>
                          <button className={'button'}>+</button>
                      </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Midle;