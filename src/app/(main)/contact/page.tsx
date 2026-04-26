import Image from "next/image"

import emailIcon from "@/../public/email.webp"
import linkedinIcon from "@/../public/linkedin.webp"
import githubIcon from "@/../public/github.png"
import phoneIcon from "@/../public/phone.jpeg"

const contactList = [
  {
    name: "Email",
    detail: "linuxkali717@gmail.com",
    icon: emailIcon,
  },
  {
    name: "Phone",
    detail: "+251 960905492",
    icon: phoneIcon,
  },
  {
    name: "Github",
    detail: "https://github.com/L1TerminalFault",
    icon: githubIcon,
  },
  {
    name: "LinkedIn",
    detail: "https://www.linkedin.com/in/kaleab-mengesha-901480348",
    icon: linkedinIcon,
  },
]

export default function Contact() {
  return <div className="flex slide-to-left flex-col gap-4 w-full h-full items-center p-20 pt-38">
  <div className="flex flex-col gap-4 w-full max-w-200 h-full">
  {contactList.map((eachItem) => <div key={eachItem.name} className="flex max-w-200 backdrop-blur-3xl items-center gap-6 rounded-full bg-white/6 p-5 px-8">
		     <div>
		       <Image
		         alt=""
		         src={eachItem.icon}
			 className="size-10 rounded-full overflow-hidden"
		       />
		     </div>
		     <div className='flex flex-col gap-3'>
		       <div className="text-lg text-gray-100">{eachItem.name}</div>
		       <div className="text-gray-300">{eachItem.detail}</div>
		     </div>
		   </div>)}
		   </div>
  </div>;
}
