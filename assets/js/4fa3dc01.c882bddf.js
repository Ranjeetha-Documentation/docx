"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[9431],{8707:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var n=a(4848),r=a(8453);const t={},o="RDK Camera Architecture",s={id:"my-documentation/versioned_docs/version-0.1.0/rdk-camera-architecture/rdk-camera-architecture",title:"RDK Camera Architecture",description:"------------------------------------------------------------------------",source:"@site/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-architecture/rdk-camera-architecture.md",sourceDirName:"my-documentation/versioned_docs/version-0.1.0/rdk-camera-architecture",slug:"/my-documentation/versioned_docs/version-0.1.0/rdk-camera-architecture/",permalink:"/docx/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-architecture/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-architecture/rdk-camera-architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Markdown page example",permalink:"/docx/docs/my-documentation/versioned_docs/version-0.1.0/pages/markdown-page"},next:{title:"RDK Camera Documentation",permalink:"/docx/docs/my-documentation/versioned_docs/version-0.1.0/rdk-camera-documentation/"}},c={},l=[{value:"Application",id:"application",level:2},{value:"Application Platform",id:"application-platform",level:2},{value:"RDK Middleware",id:"rdk-middleware",level:2},{value:"RDK HAL",id:"rdk-hal",level:2},{value:"SOC",id:"soc",level:2}];function d(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"rdk-camera-architecture",children:"RDK Camera Architecture"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.p,{children:"RDK-C provides a common set of software components to build IP-based video cameras with standard functions, such as live streaming, continuous video recording and Normal Thumbnail. RDK accelerates the deployment of next-gen IP camera products and services, while simplifying the customization of the application and user experience."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h1,{id:"architecture-details",children:"Architecture Details"}),"\n",(0,n.jsx)(i.p,{children:"Below is an illustrative representation of the RDK Camera software stack, depicting the various components and their interactions."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"rdkcameraarchitecture",src:a(2251).A+"",width:"1482",height:"708"})}),"\n",(0,n.jsx)(i.p,{children:"At its core, RDK Camera consists of five main stack levels, each serving a specific purpose in the overall architecture. These levels are as follows:"}),"\n",(0,n.jsx)(i.h2,{id:"application",children:"Application"}),"\n",(0,n.jsx)(i.p,{children:"VLC and KVS applications are sophisticated blends of continuous video recording (CVR). VLC is capable of ingesting a single live H.264 video stream from RMS. On the other hand, KVS (Kinesis Video Streams) offers CVR support. With KVS, you only pay for what you upload from the CVR application."}),"\n",(0,n.jsx)(i.h2,{id:"application-platform",children:"Application Platform"}),"\n",(0,n.jsx)(i.p,{children:"The application platform is a robust system incorporating RMS , CVR , and WEBRTC technologies. RMS provides network live streaming. The incorporation of CVR allows continuous video recording, providing users with uninterrupted access to recorded content. Additionally, the platform leverages WEBRTC for high-quality real-time communication over the web. Thumbnail previews are integrated, offering users a quick and convenient way to navigate and preview content, enhancing the overall user experience."}),"\n",(0,n.jsx)(i.h2,{id:"rdk-middleware",children:"RDK Middleware"}),"\n",(0,n.jsx)(i.p,{children:"The RDK middleware is a powerful framework that integrates various functionalities, including libcamera for camera support, OpenCV for computer vision capabilities, PipeWire for multimedia handling, WirePlumber for audio management, and RDK services for comprehensive service integration. Libcamera ensures efficient camera functionality within the middleware, while OpenCV enhances computer vision capabilities for applications. PipeWire facilitates seamless multimedia handling, offering a versatile solution for audio and video processing. WirePlumber ensures effective audio management within the middleware. RDK services provide a comprehensive suite of services, creating a robust and extensible middleware framework with broad functionality and support for diverse applications."}),"\n",(0,n.jsx)(i.h2,{id:"rdk-hal",children:"RDK HAL"}),"\n",(0,n.jsx)(i.p,{children:"The RDK Hardware Abstraction Layer (HAL) is a crucial component that interfaces with hardware-specific functionalities in the RDK environment. RDK HAL leverages the libcamera pipeline for efficient camera integration, enabling streamlined communication between the hardware and higher-level software components. Additionally, it utilizes libv4l2, providing a standardized interface for video capture devices. The combination of RDK HAL, the libcamera pipeline, and libv4l2 ensures seamless integration and optimal utilization of hardware resources, enhancing the overall performance and functionality of RDK-based systems"}),"\n",(0,n.jsx)(i.h2,{id:"soc",children:"SOC"}),"\n",(0,n.jsx)(i.p,{children:"The System-on-Chip (SoC) functionalities encompass a range of capabilities crucial for system operation. The Linux kernel serves as the core operating system, providing a stable foundation for software applications. SoC functionalities include camera and video drivers that facilitate communication between the hardware and software layers, enabling the utilization of imaging devices."}),"\n",(0,n.jsx)(i.p,{children:"Moreover, Image Signal Processing (ISP) plays a pivotal role in enhancing and refining image quality. Integrated into the SoC, ISP manages tasks such as color correction, noise reduction, and other image processing operations to optimize the output from imaging sensors."}),"\n",(0,n.jsx)(i.p,{children:"In summary, the SoC functionalities involve the orchestration of the Linux kernel, camera and video drivers, and ISP, collectively ensuring efficient communication with hardware components and enabling advanced image processing capabilities."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h1,{id:"application-scenario",children:"Application Scenario"}),"\n",(0,n.jsx)(i.p,{children:"In this application scenario, the user aims to achieve smooth playback of live streaming content using the VLC media player, which operates at the application layer. To accomplish this, a multi-layered architecture is employed. At the application platform layer, the RMS (RDK Media Streamer) component takes charge of managing the streaming process. Within the RDK (Reference Design Kit) ecosystem, RMS utilizes Pipewire, a middleware layer that facilitates the streaming functionality. Pipewire, in turn, relies on the capabilities of libv4l2 at the RDK HAL (Hardware Abstraction Layer) level. At the HAL layer, the libv4l2 component interfaces with the camera driver embedded in the SOC. This integrated system ensures a seamless and coordinated flow of live streaming content, starting from the hardware level camera driver and reaching the VLC media player at the application layer. Throughout this process, RMS acts as a crucial intermediary component within the RDK framework."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h1,{id:"useful-links",children:"Useful Links"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["To know about the\xa0\r\navailable RDK-C components and its source code repo paths refer\r\n",(0,n.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK-C+Components+List",children:"Components List"})]}),"\n",(0,n.jsxs)(i.li,{children:["For\r\nbringing up and validation of Continuous video recording functionality in RPI refer\r\n",(0,n.jsx)(i.a,{href:"https://wiki.rdkcentral.com/pages/viewpage.action?pageId=103583530",children:"CVR"})]}),"\n",(0,n.jsxs)(i.li,{children:["For video playback with WebRTC follow\r\n",(0,n.jsx)(i.a,{href:"https://wiki.rdkcentral.com/pages/viewpage.action?pageId=193144864",children:"WebRTC"})]}),"\n",(0,n.jsxs)(i.li,{children:["For\r\nbringing up and validation of Normal Thumbnail functionality in RPI refer\r\n",(0,n.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK-C++Normal+Thumbnail",children:"Thumbnail"})]}),"\n",(0,n.jsxs)(i.li,{children:["To know more about libcamera for camera support refer\r\n",(0,n.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK-C+%3A+Libcamera",children:"Libcamera"})]}),"\n",(0,n.jsxs)(i.li,{children:["To know more about pipeWire, how it handles multimedia refer\r\n",(0,n.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK-C+%3A+PipeWire",children:"PipeWire"})]}),"\n",(0,n.jsxs)(i.li,{children:["To know about RDK-C RPI build guides refer\r\n",(0,n.jsx)(i.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK-C",children:"RDK-C RPI"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2251:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/rdkcameraarchitecture-ea88e235b8ef19e69fd01cc25d7f345a.png"},8453:(e,i,a)=>{a.d(i,{R:()=>o,x:()=>s});var n=a(6540);const r={},t=n.createContext(r);function o(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);