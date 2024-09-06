"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[6134],{1597:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(4848),t=n(8453);const a={},o="RDK Camera Documentation",s={id:"my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/rdk-camera-documentation",title:"RDK Camera Documentation",description:"------------------------------------------------------------------------",source:"@site/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/rdk-camera-documentation.md",sourceDirName:"my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation",slug:"/my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/",permalink:"/docx/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/rdk-camera-documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RDK Camera Architecture",permalink:"/docx/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-architecture/"},next:{title:"RDK Camera Architecture",permalink:"/docx/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/rdk-camera-architecture/"}},d={},c=[{value:"Key Features",id:"key-features",level:2},{value:"Overall Service Offerings",id:"overall-service-offerings",level:2},{value:"RDK Media Streamer(RMS)",id:"rdk-media-streamerrms",level:3},{value:"Mediastreamer",id:"mediastreamer",level:3},{value:"<strong>CVR(Continuous Video Recording)\u200b</strong>",id:"cvrcontinuous-video-recording",level:3},{value:"Pipewire",id:"pipewire",level:3},{value:"KVS SDK",id:"kvs-sdk",level:3},{value:"Thumbnail",id:"thumbnail",level:3},{value:"rtmessage",id:"rtmessage",level:3},{value:"HttpClients",id:"httpclients",level:3},{value:"ConfigMgr",id:"configmgr",level:3}];function l(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"rdk-camera-documentation",children:"RDK Camera Documentation"})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h1,{id:"what-is-rdk-camerardk-c",children:"What is RDK Camera(RDK-C)?"}),"\n",(0,r.jsx)(i.p,{children:"RDK-C provides a common set of software components to build IP-based video cameras with standard functions, such as live streaming and continuous recording. RDK accelerates the deployment of next-gen IP camera products and services while simplifying the customization of the application and user experience."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Configuration management : config is fetched from cloud via polling which is triggered in regular interval(can also be forced) , once the config is fetched it is parsed and saved for respective feature"}),"\n",(0,r.jsx)(i.li,{children:"Resolution : Supported resolutions - 480p,720p, and 1080p"}),"\n",(0,r.jsx)(i.li,{children:"Bit rate : 115200"}),"\n",(0,r.jsx)(i.li,{children:"Recording settings : 24/7 live recording with 720p resolution"}),"\n",(0,r.jsx)(i.li,{children:"Wi-Fi : supports 2.4GHZ and 5GHZ"}),"\n",(0,r.jsx)(i.li,{children:"Live video : 24/7 supported with 2way audio options enabled"}),"\n",(0,r.jsx)(i.li,{children:"Thumbnail : SmartThumbnail - Getting YUV frames and convert that into JPEG image for the thumbnail based on the motion detection from video analytic engine"}),"\n",(0,r.jsx)(i.li,{children:"24/7 video recording : CVR module which use amazon kinesis video to handle this feature"}),"\n",(0,r.jsx)(i.li,{children:"Firmware upgrade, RDK feature control, and Log upload through XCONF Server"}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"overall-service-offerings",children:"Overall Service Offerings"}),"\n",(0,r.jsx)(i.p,{children:"Below illustration depicts the service offerings by RDK Camera :"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"ovrallserviceofferingsrdkc",src:n(5476).A+"",width:"2162",height:"940"})}),"\n",(0,r.jsx)(i.p,{children:"Let us understand the components present in above diagram:"}),"\n",(0,r.jsx)(i.h3,{id:"rdk-media-streamerrms",children:"RDK Media Streamer(RMS)"}),"\n",(0,r.jsx)(i.p,{children:"RMS (RDK Media Streamer) is a versatile media server designed to deliver a wide range of live and on-demand content to various screens. It acts as a multi-format, multi-protocol server that can distribute media-rich content across different platforms and screens. With the capability to ingest a live H.264 video stream from various encoders like MPEG-TS, RTMP, or RTP, RMS can transform and broadcast the stream simultaneously to different endpoints such as PCs, Macs, mobile phones, tablets, and TVs. It utilizes WebRTC/RTSP streaming protocol for seamless end-to-end streaming."}),"\n",(0,r.jsx)(i.h3,{id:"mediastreamer",children:"Mediastreamer"}),"\n",(0,r.jsx)(i.p,{children:"Mediastreamer facilitates the streaming of captured media content from a camera by utilizing HTTP streaming via the Mongoose server. It leverages the gstreamer media framework to stream H264 encoded content to the Mongoose server. The resulting output from the media streamer can be directed as input to RDK Mediastreamer (RMS) or the Continuous Video Recording (CVR) modules for further processing or recording."}),"\n",(0,r.jsx)(i.h3,{id:"cvrcontinuous-video-recording",children:(0,r.jsx)(i.strong,{children:"CVR(Continuous Video Recording)\u200b"})}),"\n",(0,r.jsx)(i.p,{children:"Continuous Video Recording feature to handle 24/7 live video recording on a resolution of 720p.\r\nCVR functionality is enabled through the utilization of Kinesis Video Streams Producer libraries. These libraries allow for seamless installation and configuration on devices, providing a user-friendly solution for securely connecting and effectively streaming video content in various modes, such as real-time streaming, buffered streaming with a slight delay, or uploading media retrospectively."}),"\n",(0,r.jsx)(i.h3,{id:"pipewire",children:"Pipewire"}),"\n",(0,r.jsx)(i.p,{children:"PipeWire offers the capability for multiple applications to access video data through it, functioning as an audio and video server. In PipeWire, applications and devices are depicted as nodes, each equipped with input and output ports to facilitate media sharing among nodes. Additionally, a session manager is provided to configure nodes, ports, and establish connections between different nodes, enhancing the overall management of the audio and video streaming process."}),"\n",(0,r.jsx)(i.h3,{id:"kvs-sdk",children:"KVS SDK"}),"\n",(0,r.jsx)(i.p,{children:"The KVS SDK comprises the Amazon Kinesis Video Streams(KVS) Producer libraries, which are user-friendly components integrated within the Kinesis Video Streams Producer SDK. These libraries are utilized by clients to develop on-device applications that securely connect to Kinesis Video Streams, enabling the real-time streaming of video and other media data for instant viewing through console or client applications. Media data can be streamed in real time, with a slight delay after buffering, or uploaded retrospectively as after-the-fact media uploads. Upon establishing a Kinesis Video Streams, data can be transmitted to the stream using the SDK to create custom application code that extracts video data from the source and uploads it to Kinesis Video Streams, referred to as producer applications.\r\nKinesis Video Stream SDK is opensourced from Amazon AWS .\r\nCVR module uses KVS stack for 24/7 live recording as its prepare a clip and send it to the AWS Cloud.\r\nIn UserSpace, from application they can see the video clips recorded with the thumbnails. When user clicks it, it fetches from the AWS Cloud and provide that clip."}),"\n",(0,r.jsx)(i.h3,{id:"thumbnail",children:"Thumbnail"}),"\n",(0,r.jsx)(i.p,{children:"The RDK-C Thumbnail feature offers real-time thumbnails and generates thumbnails based on motion events. It includes two types of thumbnails: Next-Gen Thumbnail and Smart Thumbnail.\r\nThumbnail module is responsible for uploading the thumbnails with timestamp created from video analytics using Camera Feed Data."}),"\n",(0,r.jsx)(i.h3,{id:"rtmessage",children:"rtmessage"}),"\n",(0,r.jsx)(i.p,{children:"The rtmessage tool offers basic messaging functionalities over Unix domain or TCP sockets, providing support for remote procedure calls (RPC) and event capabilities."}),"\n",(0,r.jsx)(i.h3,{id:"httpclients",children:"HttpClients"}),"\n",(0,r.jsx)(i.p,{children:"It is a curl based library for creating to handle HTTP protocol.\r\nThe HttpClients module in RDK-C offers APIs specifically designed for performing REST operations, enhancing the capability for seamless interaction with RESTful services."}),"\n",(0,r.jsx)(i.h3,{id:"configmgr",children:"ConfigMgr"}),"\n",(0,r.jsx)(i.p,{children:"ConfigMgr streamlines the process of handling device settings and user-related management tasks i.e. managing the configurations requested from the cloud(CVR, live video, KVS, Thumbnail, Smart Thumbnail)"}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h1,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"User Guides"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Architecture:\r\n\xa0\r\nFor RDK-C architecture details and structuring of RDK-C Components, follow\r\n\xa0\r\n",(0,r.jsx)(i.a,{href:"/docx/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/rdk-camera-architecture/",children:"Architecture"})]}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5476:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ovrallserviceofferingsrdkc-e05172c708bad6be3d90ef211c06b0eb.png"},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var r=n(6540);const t={},a=r.createContext(t);function o(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);