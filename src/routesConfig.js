 import New from "./pages/new";

 import RTI from "./pages/rti";
import IEC from "./pages/iec";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import NewNotification from "./pages/new_notification";
import Guidelines from "./pages/guidelines";
import Nctp from "./pages/Nctp";
import AboutUs from "./pages/aboutus";
import Read1 from "./pages/read1";
import Read1a from "./pages/read1a";
import Read1b from "./pages/read1b";
import Read1c from "./pages/read1c";
import Publications from "./pages/publications";
import Faq from "./pages/faq";
import Downloads from "./pages/downloads";
import Eligibility from "./pages/eligibility";
const routes = [
  { path: "/Home", component: Home, name: "Home" },
  { path: "/Register", component: Register, name: "Register" },
  {path: "/Login", component: Login, name: "Login" },
  { path: "/Applicant/Registration/WhatsNew", component: New, name: "What's New" },
  { path: "/Applicant/Registration/Guidelines", component: Guidelines, name: "Guidelines" },
  { path: "/Applicant/Registration/NCTP", component: Nctp, name: "Nctp" },
   { path: "/Applicant/Registration/RTI", component: RTI, name: "RTI" },
//   { path: "/Applicant/Registration/CPGRAMS", component: CPGRAMS, name: "CPGRAMS" },
  { path: "/Applicant/Registration/IECMaterial", component: IEC, name: "IEC Material" },
//   { path: "/Applicant/Registration/ParliamentBusiness", component: ParliamentBusiness, name: "Parliament Business" },
//   { path: "/Applicant/Registration/Activity_Video", component: ActivityVideo, name: "Video" },
//   { path: "/Applicant/Registration/Gallery", component: Gallery, name: "Gallery" },
 { path: "/Applicant/Registration/Publications", component: Publications, name: "Publications" },
  { path: "/Applicant/Registration/Downloads", component: Downloads, name: "Downloads" },
  { path: "/Applicant/FAQ/Index", component: Faq, name: "Faq" },
{path:"Applicant/Registration/Notification",component:NewNotification,name:"Notification"},
{path:"Applicant/Registration/AboutUs",component:AboutUs,name:"About Us"},
{path:"read1",component:Read1,name:"Read1"},
{path:"read1a",component:Read1a,name:"Read1a"},
{path:"read1b",component:Read1b,name:"Read1b"},
{path:"read1c",component:Read1c,name:"Read1c"},
{path:"/eligibility",component:Eligibility,name:"Eligibility"},
];

export default routes;
