"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[6423],{3881:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=i(4848),t=i(8453);const a={},s="Architecture",o={id:"my-documentation/docs/my-documentation/versioned_docs/version-0.1.0/architecture/architecture",title:"Architecture",description:"------------------------------------------------------------------------",source:"@site/docs/my-documentation/docs/my-documentation/versioned_docs/version-0.1.0/architecture/architecture.md",sourceDirName:"my-documentation/docs/my-documentation/versioned_docs/version-0.1.0/architecture",slug:"/my-documentation/docs/my-documentation/versioned_docs/version-0.1.0/architecture/",permalink:"/docx/docs/my-documentation/docs/my-documentation/versioned_docs/version-0.1.0/architecture/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/my-documentation/docs/my-documentation/versioned_docs/version-0.1.0/architecture/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RDK Camera Documentation",permalink:"/docx/docs/my-documentation/docs/my-documentation/docs/rdk-camera-documentation/"},next:{title:"Device Management",permalink:"/docx/docs/my-documentation/docs/my-documentation/versioned_docs/version-0.1.0/device-management/"}},c={},l=[{value:"Applications",id:"applications",level:2},{value:"Application Platform",id:"application-platform",level:2},{value:"Middleware",id:"middleware",level:2},{value:"HAL",id:"hal",level:2},{value:"SOC",id:"soc",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"RDK Video Architecture is designed to enable service providers and device manufacturers to develop and deploy innovative video applications, services, and user experiences. It consists of several key components that work together seamlessly to provide a robust video platform."}),"\n",(0,r.jsx)(n.p,{children:"By leveraging the pluggable architecture of RDK, a variety of target device profiles can be supported, ranging from a basic IP streaming-only STB to a full-fledged RDK TV.\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDKV+IP",children:"RDK-V IP STB"}),"\r\n\xa0\r\nprovides a common method to manage video playback functions. The IP client device serves as an interface and receives video content from an in-home media gateway device or from an external media server. It will have only IP based data streaming without any display of its own Tuner capabilities."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDKV+Hybrid",children:"RDK-V Hybrid STB"}),"\r\n\xa0\r\nis an IP STB device along with capabilities such as tuning, conditional access, and stream management with which we can manage complex video functions ."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK+TV",children:"RDK-V IP TV"}),"\r\n\xa0\r\nis a smart TV profile powered by RDK Video stack that brings all your favorite apps, live channels, and On Demand contents together in one place."]}),"\n",(0,r.jsxs)(n.li,{children:["RDK Hybrid TV is a combination of\r\n\xa0\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK+TV",children:"RDK TV"}),"\r\n\xa0\r\nplus\r\n\xa0\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDKV+Hybrid",children:"Hybrid\r\n\xa0"}),"\r\ncapabilities\r\n\xa0\r\nsuch as tuning, conditional access etc."]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"evolution-of-rdk",children:"Evolution of RDK"}),"\n",(0,r.jsxs)(n.p,{children:["From RDK6, RDK shifted from quarterly to annual release cycles, prioritizing quality through meticulous planning and comprehensive certification for improved user experience. This annual RDK Video release aims to synchronize RDK-V with standard industry release practices while comprehensively addressing shared challenges within the community. This approach facilitates the smoother and more consistent adoption of newly contributed features, utilizing the latest releases from technology partners. By aligning with SoC partners, the release enables better resource planning to support core RDK platforms. Furthermore, the RDK video release aligns with SoC, OEM, and App releases, fostering a more cohesive and efficient ecosystem. The first annual release is RDK6 and its release notes can be accessed from\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK6+Release+Notes",children:"here"}),"\r\n\xa0."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"videoreleases",src:i(4607).A+"",width:"1762",height:"462"})}),"\n",(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"architecture-details",children:"Architecture Details"}),"\n",(0,r.jsx)(n.p,{children:"Below is an illustrative representation of the RDK Video software stack, depicting the various components and their interactions."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"videoarchitecture",src:i(6504).A+"",width:"1482",height:"708"})}),"\n",(0,r.jsx)(n.p,{children:"At its core, RDK consists of five main stack levels, each serving a specific purpose in the overall architecture. These levels are as follows:"}),"\n",(0,r.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,r.jsxs)(n.p,{children:["The Application Layer primarily focuses on the end-user experience. This layer contains applications that provide various services, content, and features to the users. While the RDK ecosystem is continuously evolving, supported applications typically include popular\r\n",(0,r.jsx)(n.strong,{children:"OTT services"}),"\r\nlike Netflix, Amazon Prime Video, and YouTube, alongside native broadcaster applications and other services."]}),"\n",(0,r.jsx)(n.h2,{id:"application-platform",children:"Application Platform"}),"\n",(0,r.jsxs)(n.p,{children:["The Application Platform Layer in the RDK ecosystem offers essential tools for developers to create applications. It includes components like a\r\n",(0,r.jsx)(n.strong,{children:"UI framework"}),"\r\n,\r\n",(0,r.jsx)(n.strong,{children:"HTML5"}),"\r\nrendering engine, and a\r\n",(0,r.jsx)(n.strong,{children:"JavaScript runtime"}),"\r\n. Acting as middleware, this layer facilitates communication between applications and core RDK services. In the RDK Video framework,\r\n",(0,r.jsx)(n.a,{href:"https://rdkcentral.github.io/firebolt/apis/latest/",children:"Firebolt\xae"}),"\r\nhandles UI rendering and user input, enabling extensive customization.\r\n",(0,r.jsx)(n.a,{href:"https://lightningjs.io/docs/#/what-is-lightning/index",children:"Lightning\u2122"}),"\r\n, an open-source JavaScript platform, manages the application lifecycle and integrates components using WebGL for rendering. Together,\r\n",(0,r.jsx)(n.a,{href:"https://rdkcentral.github.io/firebolt/apis/latest/",children:"Firebolt\xae"}),"\r\nand\r\n",(0,r.jsx)(n.a,{href:"https://lightningjs.io/docs/#/what-is-lightning/index",children:"Lightning\u2122"}),"\r\nform a robust foundation for seamless and efficient application development in the RDK Video ecosystem."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Firebolt\r\n\xae\r\n1.0(Ripple) -"}),"\r\nFirebolt\xae 1.0 (Ripple) streamlines RDK app integration with standardized rules. Ripple, its open-source Rust-based Application gateway, facilitates dynamic extensions and serves as a Firebolt\xae Gateway. RDK 6 is Firebolt\xae 1.0-certified, with a comprehensive test suite for compliance."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Security -"}),"\r\nThe Application Platform Layer ensures robust security with Dobby-managed\r\n",(0,r.jsx)(n.strong,{children:"containerization"}),"\r\n, leveraging Linux kernel features for process isolation.\r\n",(0,r.jsx)(n.strong,{children:"Downloadable Application Containers (DAC)"}),"\r\nenable secure running of binary applications on STBs without modification, ensuring compatibility across RDK 6 devices. Access Control is enforced through\r\n",(0,r.jsx)(n.strong,{children:"AppArmor"}),"\r\n, a proactive Linux security system. RDKM's open-sourced AppArmor profile generator tool for RDK 6 provides fine-grained control over process resources, contributing to a secure environment."]}),"\n",(0,r.jsx)(n.h2,{id:"middleware",children:"Middleware"}),"\n",(0,r.jsxs)(n.p,{children:["Serving as a vital bridge between the Application Platform Layer and the hardware(HAL), the RDK Middleware Layer incorporates essential components that are pivotal for the seamless operation of the RDK platform.\r\nCore to this layer are\r\n",(0,r.jsx)(n.strong,{children:"RDK services"}),"\r\n, providing JSON-RPC services for interactive applications.\r\nIn the realm of security,\r\n",(0,r.jsx)(n.strong,{children:"iCrypto"}),"\r\nhandles critical cryptographic operations, ensuring secure communication and data protection.\r\n",(0,r.jsx)(n.strong,{children:"Rialto"}),"\r\noffers a secure solution for AV pipelines in containerized applications, and the\r\n",(0,r.jsx)(n.strong,{children:"Window Manager"}),"\r\norchestrates GUI layout.\r\n",(0,r.jsx)(n.strong,{children:"Device management"}),"\r\nenables streamlined operations in RDK deployments, including bulk operations and firmware downloads. XCONF integration revolutionizes code downloads for a smoother deployment experience. Log uploads aid comprehensive debugging, offering insights into system performance. RDK Feature Control (RFC) enables dynamic feature management for enhanced flexibility. Telemetry systematically collects essential data insights, while WebPA ensures secure communication between cloud servers and RDK devices. The Media Player, crucial for local rendering devices, manages various pipeline functions, supporting IP and QAM playback. The\r\n",(0,r.jsx)(n.strong,{children:"Open Content Decryption Module(OCDM)"}),"\r\nenforces Digital Rights Management (DRM) policies. Together with other RDK elements, these components ensure the efficient and secure functioning of the RDK platform."]}),"\n",(0,r.jsx)(n.h2,{id:"hal",children:"HAL"}),"\n",(0,r.jsxs)(n.p,{children:["In the RDK video stack, the HAL Layer(Hardware Abstraction Layer) plays a vital role in facilitating communication between the video application software and hardware components like the GPU, video encoding/decoding hardware, and audio devices. It provides a standardized framework for functions, data structures, and protocols, enabling efficient hardware resource utilization. The HAL layer manages\r\n",(0,r.jsx)(n.strong,{children:"hardware initialization"}),"\r\n,\r\n",(0,r.jsx)(n.strong,{children:"memory allocation"}),"\r\n,\r\n",(0,r.jsx)(n.strong,{children:"input/output operations"}),"\r\n, and\r\n",(0,r.jsx)(n.strong,{children:"hardware-specific events"}),"\r\n, shielding software developers from hardware complexities and allowing them to prioritize user experience and functionality."]}),"\n",(0,r.jsxs)(n.p,{children:["RDK provides a set of HAL APIs that abstract the platform from RDK. Vendors need to implement the HAL APIs to meet the HAL Specifications. With the help of the HAL API Specification for different RDK Components, vendors can successfully port RDK to their platform. Depending on the device profile\r\n(\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDKV+IP",children:"IP STB"}),"\r\n,\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK+TV",children:"IP TV"}),"\r\n,\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDKV+Hybrid",children:"Hybrid STB"}),"\r\netc. ), vendors may choose the relevant components and perform the port by implementing the HAL layer. Detailed information about vendor porting guide will be available soon."]}),"\n",(0,r.jsx)(n.h2,{id:"soc",children:"SOC"}),"\n",(0,r.jsxs)(n.p,{children:["The System on Chip (SOC) Layer forms the foundational interface between hardware components, ensuring system security and reliability. It incorporates various crucial elements such as\r\n",(0,r.jsx)(n.strong,{children:"DRM Libraries ,"}),"\r\nwhich\r\nmanages digital rights and secure content delivery to prevent unauthorized access and distribution.\r\n",(0,r.jsx)(n.strong,{children:"Trusted Applications (Apps TA)"}),"\r\nguarantee the secure execution of sensitive operations and protect critical data from unauthorized access. The\r\n",(0,r.jsx)(n.strong,{children:"Secure Store"}),"\r\noversees the storage of DRM keys and Apps triplets, maintaining the confidentiality and integrity of vital data. Additionally,\r\n",(0,r.jsx)(n.strong,{children:"MFR Libraries"}),"\r\nmanage hardware functionality, providing access to specific hardware features and capabilities, thereby contributing to the overall security and functionality of the system."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"application-scenario",children:"Application Scenario"}),"\n",(0,r.jsx)(n.p,{children:"Consider the use case of a user accessing a streaming application like Youtube on an RDK Video-supported device. The user interacts with the application through the Application Layer, selecting content and initiating playback. The Application Platform Layer, utilizing the Firebolt\r\n\xae\r\nand Lightning\u2122 frameworks, manages the user interface and application lifecycle.\r\nThe RDK Layer ensures seamless communication between the application and the hardware, managing services, cryptographic operations, inter-component communication, window management, and content decryption through OpenCDM.\r\nThe RDK HAL Layer then utilizes the Gstreamer media pipeline to decode and render the video content, ensuring a smooth and high-quality viewing experience.\r\nFinally, the SOC Layer provides a secure environment for the entire system, safeguarding the hardware, managing DRM policies, and securing sensitive data, ensuring a secure and reliable video streaming experience for the user."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"useful-links",children:"Useful Links"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"RDK Video:"})}),"\n",(0,r.jsxs)(n.p,{children:["You can find an overview of the RDK Video platform, detailing its key features and functionalities at\xa0\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK+Video+Documentation",children:"RDK Video Documentation"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Application Development:"})}),"\n",(0,r.jsxs)(n.p,{children:["Developers interested in RDK application development using Firebolt\r\n\xae\r\ncan refer\r\n",(0,r.jsx)(n.a,{href:"https://rdkcentral.github.io/firebolt/apis/latest/",children:"Firebolt\xae"}),"\r\nand"]}),"\n",(0,r.jsxs)(n.p,{children:["Developers interested in RDK application development using Lightning\u2122 can refer\r\n",(0,r.jsx)(n.a,{href:"https://lightningjs.io/docs/#/what-is-lightning/index",children:"Lightning\u2122 Framework"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Security:"})}),"\n",(0,r.jsxs)(n.p,{children:["To understand the\r\nsecurity features in the RDK, please refer\r\n",(0,r.jsx)(n.a,{href:"https://wiki.rdkcentral.com/display/RDK/RDK-Security",children:"RDK Security"}),"\r\n."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6504:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/videoarchitecture-65789b88139b0cd9907bd6220c5af161.png"},4607:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/videoreleases-ccf553aedb89e358ec21178e4dd85354.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);