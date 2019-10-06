import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client';
import Message from './Message';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      currentRoom: {},
      currentUser: {},
      chatInput: ''
    }
    this.setChatInput = this.setChatInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  setChatInput(){
    this.setState({
      chatInput: event.target.value
    });
  }
  sendMessage(){
    if(this.state.chatInput){
      this.state.currentUser.sendMessage({
        text: this.state.chatInput,
        roomId: this.state.currentRoom.id,
      })
    }
    this.setState({ chatInput: '' })
  }
  _handleKeyPress(e){
                      if(e.key === 'Enter'){
                        this.sendMessage();
                      }
  }
  componentDidMount(){
    const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:64e2f4de-4e44-411c-84a2-380a6ba4bf1b',
          userId: this.props.currentUsername,
          tokenProvider: new Chatkit.TokenProvider({
            url: '65b346e7-faf2-4fa4-bfb4-ff65338ba091:ZPvP19UXrVyP73tOn8zW78mRMGMqs369po1g2wza/DM=',
          }),
    })
    chatManager
    .connect()
    .then(currentUser => {
      this.setState({ currentUser })
      return currentUser.subscribeToRoom({
        roomId: '123',
        hooks: {
          onMessage: message => {
            let newMessages = this.state.messages;
            newMessages.push(<Message
                                        key={
                                          this.state.messages.length
                                        }
                                      senderId={
                                        message.senderId
                                      }
                                    text={ message.text
                                    }/>)
          },
        },
      })
    })
    .then(currentRoom => {
      this.setState({ currentRoom })
    })
    .catch(error => console.error('error', error))
  }
  render() {
    return (
      <div>
        <h1>This is the Chat Component</h1>
      </div>
    )
  }
}

export default Chat;
