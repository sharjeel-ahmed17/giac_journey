import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="py-8">
            <div className='flex justify-center mb-8 gap-14'>
                <IoLogoFacebook size={36} />
                <FaInstagram size={36} />
                <FaTwitter size={36} />
                <FaLinkedin size={36} />
                {/* <FaLinkedin size={36} color /> */}

            </div>
            <p className="text-center text-[22px] font-medium leading-[3.32px]">Copyright ©2020 All rights reserved </p>
        </footer>
    )
}

export default Footer
