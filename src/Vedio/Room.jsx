import React from "react";
import { useParams } from "react-router";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage=()=>{

    const {RoomId}=useParams()
    const myMeeting=async (element)=>{
        const appID=1900162513;
        const serverSecret="6b7c4babad94cf2d47a5887f6902fcfa"
        const kitToken=
            ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,RoomId,Date.now().toString(),"manish")
        

            const zc=ZegoUIKitPrebuilt.create(kitToken)
            zc.joinRoom({
                container:element,
                sharedLinks:[{
                    name:'Copy Link',
                    url:`http://localhost:3000/Room/${RoomId}`

                }],
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall,

                },
                showScreenSharingButton:false,

            })
        
            
    }
    return(

<div className="">
    <div ref={myMeeting}/>
</div>        )
}

export default RoomPage