"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[2769],{2085:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var o=i(4848),a=i(8453);const t={},r="Device Management",s={id:"my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/device-management/device-management",title:"Device Management",description:"------------------------------------------------------------------------",source:"@site/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/device-management/device-management.md",sourceDirName:"my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/device-management",slug:"/my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/device-management/",permalink:"/docx/docs/0.1.0/my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/device-management/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/device-management/device-management.md",tags:[],version:"0.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docx/docs/0.1.0/my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/architecture/"},next:{title:"Join RDK",permalink:"/docx/docs/0.1.0/my-documentation/versioned_docs/version-0.1.0/my-documentation/versioned_docs/version-0.1.0/join-rdk/"}},d={},c=[{value:"Device Management capabilities",id:"device-management-capabilities",level:2},{value:"Xconf/DCM",id:"xconfdcm",level:3},{value:"Log Upload",id:"log-upload",level:3},{value:"RDK Feature Control(RFC)",id:"rdk-feature-controlrfc",level:3},{value:"Telemetry",id:"telemetry",level:3},{value:"WebPA",id:"webpa",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"device-management",children:"Device Management"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Remote management of CPE devices, including monitoring, configuring, updating, and maintaining devices plays a crucial role in ensuring the smooth operation of connected devices, optimizing performance, and enhancing security and is critically important for supporting large-scale deployments.\r\nThe significance lies in its ability to horizontally scale across these profiles, allowing for the efficient sharing of the same code. This streamlined approach facilitates controlled bulk operations and data retrievals, essential for managing diverse devices at scale. The functionality extends to enabling or disabling features dynamically and facilitating firmware (code) downloads. Moreover, Device Management plays a crucial role in retrieving field matrices, ensuring a comprehensive and organized approach to overseeing and controlling devices within the specified frameworks."}),"\n",(0,o.jsx)(n.p,{children:"The below diagram depicts how device management is horizontally\r\nscaled between different RDK profiles and how the device management fits in RDK."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"devicemgmnt",src:i(7254).A+"",width:"1830",height:"656"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"device-management-capabilities",children:"Device Management capabilities"}),"\n",(0,o.jsx)(n.p,{children:"Different device management capabilities are shared across the different profiles. The key device management capabilities are:"}),"\n",(0,o.jsx)(n.h3,{id:"xconfdcm",children:"Xconf/DCM"}),"\n",(0,o.jsx)(n.p,{children:"XCONF/DCM is a pivotal device management service that enables streamlined code download in set-top-boxes (STBs), providing essential information on firmware version, download source, and download protocol. It overcomes limitations of traditional code downloads by employing the eSTB interface for code download."}),"\n",(0,o.jsx)(n.h3,{id:"log-upload",children:"Log Upload"}),"\n",(0,o.jsx)(n.p,{children:"Log Upload is an integral component in RDK deployments, allowing for debugging and maintenance. STBs store logs for a limited period, aiding in troubleshooting, field matrices, and problem urgency assessment. Controlled log uploads can be configured based on device maturity and occur at regular intervals."}),"\n",(0,o.jsx)(n.h3,{id:"rdk-feature-controlrfc",children:"RDK Feature Control(RFC)"}),"\n",(0,o.jsx)(n.p,{children:"RDK Feature Control (RFC) addresses challenges in feature deployment and rollback procedures by providing a secure channel for delivering runtime configurations. It enables quicker feature rollouts, dynamic configurations, and control over feature enable/disable states without relying on firmware reversion."}),"\n",(0,o.jsx)(n.h3,{id:"telemetry",children:"Telemetry"}),"\n",(0,o.jsx)(n.p,{children:"RDK Telemetry represents an improvement in data transfer mechanisms, moving beyond log file bundling. It involves periodic transmission of telemetry data from every RDK device and utilizes logs, system status information, and SNMP commands to enhance data transmission efficiency."}),"\n",(0,o.jsx)(n.h3,{id:"webpa",children:"WebPA"}),"\n",(0,o.jsx)(n.p,{children:"WebPA (Web Protocol Adapter) serves as a secure web protocol messaging system for bi-directional communication between cloud servers and RDK devices. It offers read/write access to device management parameters, prioritizing security and performance, and replaces traditional methods like TR-69 or SNMP."}),"\n",(0,o.jsx)(n.p,{children:"In summary, RDK Device Management encompasses XCONF/DCM, Log Upload, Telemetry, RFC, and WebPA as comprehensive tools for efficient management and monitoring of RDK-based devices, ensuring optimal performance, security, and user experience."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,o.jsx)(n.p,{children:"To know more about device management functionalities and how it is achieved, please refer below links:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/Code+Download+(Xconf,+DCM)",children:"Code Download (Xconf, DCM)"}),"\r\nXconf/DCM"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/Log+Upload",children:"Log Upload"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/Telemetry",children:"Telemetry"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK+Feature+Control+-+RFC",children:"RDK Feature Control - RFC"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},7254:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/devicemgmnt-224347f04eb0423e0e377279a91855ec.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(6540);const a={},t=o.createContext(a);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);