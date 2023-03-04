import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <footer className="flex
            flex-row
            justify-evenly
            items-end
            gap-10
            h-full
            w-full
            py-16
            px-10
            text-white
            font-sans
            font-thin
            text-sm
            leading-5
            bg-[#000912]/80
            z-50
            
            max-sm:flex-wrap
            max-sm:text-center">
                <ul className="flex
                flex-col
                gap-2">
                    <li><Link href="">Contact</Link></li>
                    <li><Link href="">Newsletter</Link></li>
                    <li><Link href="">Privacy policy</Link></li>
                </ul>

                <Image src="/../public/footer/quiddy.png" alt="" width={500} height={1000} className="drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]" />

                <ul className="flex
                flex-col
                gap-2">
                    <li><Link href="">Instagram</Link></li>
                    <li><Link href="">Tik-tok</Link></li>
                    <li><Link href="">GitHub</Link></li>
                </ul>
            </footer>
        </>
    )
}
