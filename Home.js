import React from 'react';

import JoinedChatList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';

import { fetchChats } from '../api/chats';
import { useEffect } from 'react';



export default function Home() {
useEffect(()=>{
  fetchChats()
  // .then(chats =>{
  //   debugger
  // });
},[])

    return (
       <div className="row no-gutters fh">
            <div className="col-3 fh">
             <JoinedChatList/>
            </div>
            <div className="col-9 fh">
            <ViewTitle text='Choose your channel'/>
             <AvailableChatsList/>
            </div>
          </div>
        
      )
}