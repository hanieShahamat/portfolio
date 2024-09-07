"use client";
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub ,faLinkedin, faTelegram, faPinterest } from '@fortawesome/free-brands-svg-icons'


const socials = [

    {icon: <FontAwesomeIcon icon={faGithub} /> ,path: "https://github.com/hanieShahamat"},
    {icon: <FontAwesomeIcon icon={faLinkedin} /> ,path: "https://www.linkedin.com/in/hanie-shahamatjoo-b40117215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B132DNSRTQweW1HBqHAPqLg%3D%3D"},
    {icon: <FontAwesomeIcon icon={faTelegram} /> ,path: ""},
    {icon: <FontAwesomeIcon icon={faPinterest} /> ,path: ""},

]

export default function Social(props:{ containerStyle:string, iconStyle:string}) {
  const {containerStyle, iconStyle} = props;
  return (
    <div className={containerStyle}>
      {socials.map((item, index)=>{
        return(
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
