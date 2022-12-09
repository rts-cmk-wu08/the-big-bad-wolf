import "./chat.scss"
import { useState, useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";




const Chat = () => {

const [chatFunction, setChatFunction] = useState(false);

const chatBtnActive = () => {
    setChatFunction(current => !current);

};
useEffect(() => {
    console.log("chatFunction is: ", chatFunction)
}, [chatFunction]);


    return ( 
    <>
    <article className="chat">
        <div className={`chat__popup ${chatFunction ? "chat__popup--visible" : ""}`}>
            <div className="chat__top">
                <div className="black__cirkel"></div>
                <div className="chat-top__text">
                    <p>Chatting with</p>
                    <h3>Support offline</h3>
                </div>
            </div>
            <p className="chat__msg">Hello, our livechat are offline at the moment. We will come back to ypu ASAP.</p>
            <div className="chat__bottom">
                <textarea name="" id="" cols="30" rows="10" placeholder="Write a message..."></textarea>
                <input type="submit" value="Send" />
            </div>
        </div>

        <button onClick={chatBtnActive} className="chat__btn" >{chatFunction ? <FaTimes className="chat__icon"/> : <FiMessageCircle className="chat__icon"/>}</button>
    </article>    
    
    </> 
    );
}
 
export default Chat;








// import React from "react";
// import ChatBot from "react-simple-chatbot";
// import { Segment } from "semantic-ui-react";

// function Chat() {

//     const steps = [
//         {
//             id: 'Greet',
//             message: 'Hello, Welcome to our webshop!',
//             trigger: 'Ask Name'
//         },
//         {
//             id: 'Ask Name',
//             message: 'Please enter your name',
//             trigger: 'waiting1'
//         },
//         {
//             id: 'waiting1',
//             user: true,
//             trigger: 'Name'
//         },
//         {
//           id: 'Name',
//           message: '"Hi {previousValue}, Please select your issue',
//           trigger: 'issues'
//         },
//         {
//             id: 'issues',
//             options: [
//                 {value: 'React', label: 'React', trigger: 'React'}, 
//                 {value: 'Angular', label: 'Angular', trigger: 'Angular'},
//             ],
//         },
//         {
//            id: 'React',
//            message: 'Thank you for telling your React issue',
//            end: true
//         },
//         {
//             id: 'Angular',
//             message: 'Thank you for telling your Angular issue',
//             end: true
//         }
//     ]

//     return <>
//     <Segment floated="right">
//         <ChatBot steps={steps}></ChatBot>
//     </Segment>
//     </>
// }

// export default Chat;
// 