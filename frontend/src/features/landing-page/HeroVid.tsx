import Image from "next/image"

export const HeroVid = () => {
    return (
        <>
            <div className="w-full
        h-full
        relative
        flex
        overflow-hidden
        mt-16">
                <Image src="/../public/main/tech.jpg" alt="" width={2000} height={2000} className="object-cover
                
                max-lg:hidden" />
                <Image src="/../public/main/tech-horizontal.png" alt="" width={2000} height={2000} className="object-cover
                
                lg:hidden" />
            </div>
        </>
    )
}