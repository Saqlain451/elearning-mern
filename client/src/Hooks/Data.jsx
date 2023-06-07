import {AiFillGoogleCircle} from 'react-icons/ai'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {FaFacebook,FaSpotify,FaBitcoin} from 'react-icons/fa'
const partnerCompany = [
    {
        name : "Google",
        icon : <AiFillGoogleCircle/>
    },
    {
        name : "Amazon",
        icon : <AiFillAmazonCircle/>
    },
    {
        name : "Bitcoin",
        icon : <FaBitcoin/>
    },
    {
        name : "Facebook",
        icon : <FaFacebook/>
    },
    {
        name : "Spotify",
        icon : <FaSpotify/>
    },
]

const testimonialData = [
    {
        img:"./assets/me.webp",
        name : "Sakil Mustak",
        role : "Web Developer"
    },
    {
        img:"./assets/biplab.webp",
        name : "Biplab Shrama",
        role : "Backend Developer"
    },
    {
        img:"./assets/jyoti.webp",
        name : "Jyoti Sharma",
        role : "Game Developer"
    },
]

const faqData = [
    {
        ques:"What is online learning like?",
        ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
        ques:"Can I learn at my own pace?",
        ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
        ques:"What types of assignments do you give?",
        ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
        ques:"What are the technology requirements?",
        ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
   
]

const successData = [
    {
        num : "50000+",
        title : "Students",
        des : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
        num : "10000+",
        title : "Students Success",
        des : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
        num : "3000+",
        title : "Video Courses",
        des : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    }
]

export  {partnerCompany,testimonialData, faqData, successData};