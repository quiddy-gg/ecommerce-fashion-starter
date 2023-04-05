import Image from "next/image"
import Link from "next/link"

export const AboutMain = () => {
    return (
        <>
            <div className="flex
            flex-col
            gap-60">
                <Image src="/../public/about/about_desktop.png" alt="" width={2000} height={2000} className="-mt-20
            
            max-lg:hidden"></Image>
                <Image src="/../public/about/about_mobile.png" alt="" width={1000} height={2000} className="lg:hidden"></Image>
                <div className="flex
            flex-row
            justify-evenly
            items-center
            gap-10  
            
            max-lg:flex-col">
                    <div className="flex
                flex-col
                items-center
                justify-center
                gap-4
                text-center
                text-white
                px-10">
                        <div className="relative">
                            <div className="bg-black/60
                        w-full
                        h-full
                        absolute
                        rounded-lg"></div>
                            <Image src="/../public/about/glitch-cover.png" alt="" width={500} height={500} className="rounded-lg"></Image>
                        </div>
                    </div>
                    <div className="flex
                flex-col
                items-center
                justify-center
                gap-4
                text-center
                text-white">
                        <h1 className="font-bold
                    text-4xl">
                            Jebać Disa Zwisa
                        </h1>
                        <p className="max-w-[400px]">
                            Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego.
                            Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego.
                        </p>
                    </div>
                </div>

                <div className="flex
            flex-row
            justify-evenly
            items-center
            gap-10
            
            max-lg:flex-col">
                    <div className="flex
                flex-col
                items-center
                justify-center
                gap-4
                text-center
                text-white
                px-10">
                    </div>
                    <div className="flex
                flex-col
                items-center
                justify-center
                gap-4
                text-center
                text-white">
                        <h1 className="font-bold
                    text-4xl">
                            Jebać Disa Zwisa
                        </h1>
                        <p className="max-w-[400px]">
                            Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego.
                            Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="bg-black/60
                        w-full
                        h-full
                        absolute
                        rounded-lg"></div>
                        <Image src="/../public/about/glitch-cover.png" alt="" width={500} height={500} className="rounded-lg"></Image>
                    </div>
                </div>

                <div className="h-full
                w-full
                relative
                z-50">
                    <div className="absolute
                    w-full
                    h-full
                    flex
                    flex-col
                    items-center
                    justify-center
                    bg-black/80
                    gap-4">
                        <h2 className="cursor-default
                        text-4xl
                        text-white
                        font-bold
                        text-center
                        
                        max-sm:text-2xl">Women’s techwear <br /> outfit</h2>
                        <Link href="../product/[id]?id"><button className="w-40
                        h-12
                        text-white
                        font-bold
                        bg-gradient-to-br
                        from-[#364665]
                        to-[#05080f]
                        rounded-sm
                        
                        max-sm:w-32
                        max-sm:h-10">Discover</button></Link>
                    </div>
                    <Image src="/../public/main/cover-wide.jpg" alt="" width={2000} height={2000} className="object-cover
                    
                    max-lg:hidden" />
                    <Image src="/../public/main/cover-wide-horizontal.jpg" alt="" width={2000} height={2000} className="object-cover
                    
                    lg:hidden" />
                </div>

            </div>
        </>
    )
}