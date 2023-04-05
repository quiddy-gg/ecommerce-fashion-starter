import Image from "next/image"
import Link from "next/link"


export const Main = () => {
    return (
        <>
            <div className="flex
            flex-row
            flex-wrap
            items-center
            justify-center
            w-full
            h-full
            
            max-lg:flex-col">
                <div className="h-full
                w-[50%]
                relative
                
                max-lg:w-full">
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
                    <Image src="/../public/main/cover1.jpg" alt="" width={2000} height={2000} className="object-cover" />
                </div>

                <div className="h-full
                w-[50%]
                relative
                
                max-lg:w-full">
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
                    <Image src="/../public/main/cover2.jpg" alt="" width={2000} height={2000} className="object-cover" />
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