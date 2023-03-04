import Image from 'next/image'

export const HeroContent = () => {
    return (
        <>
            <div className="flex
            flex-row
            w-full
            h-full
            items-center
            justify-center
            text-white
            
            max-lg:flex-col-reverse
            max-lg:gap-10">
                <div className="h-full
                w-[50%]
                relative
                flex
                flex-col
                justify-center
                items-center
                
                max-lg:w-full
                max-lg:pb-12">

                    <div className='text-left
                    h-full
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4'>
                        <h3 className='font-bold
                    text-3xl
                    w-[60%]
                    
                    max-lg:w-[50%]'>Jebać Disa</h3>
                        <p className='max-w-[60%]
                        
                        max-lg:max-w-[50%]'>Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. <br /> <br />

                            Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. </p>
                    </div>
                </div>
                <div className="h-full
                w-[50%]
                relative
                
                max-lg:w-full">
                    <div className="absolute
                    w-full
                    h-full
                    bg-black/60
                    
                    shadow-[0_0_100px_0_rgba(11,109,180,0.3)]">
                    </div>
                    <Image src="/../public/main/cover1.jpg" alt="" width={2000} height={2000} className="object-cover" />
                </div>
            </div>

            <div className="flex
            flex-row-reverse
            w-full
            h-full
            items-center
            justify-center
            text-white
            
            max-lg:flex-col-reverse
            max-lg:gap-10">
                <div className="h-full
                w-[50%]
                relative
                flex
                flex-col
                justify-center
                items-center
                
                max-lg:w-full
                max-lg:pb-12">

                    <div className='text-left
                    h-full
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4'>
                        <h3 className='font-bold
                    text-3xl
                    w-[60%]
                    
                    max-lg:w-[50%]'>Jebać Disa</h3>
                        <p className='max-w-[60%]
                        
                        max-lg:max-w-[50%]'>Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. <br /> <br />

                            Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. Na stole stała misa jebać kurwa disa, zwisa, orka, syna diabła jebanego. </p>
                    </div>
                </div>
                <div className="h-full
                w-[50%]
                relative
                
                max-lg:w-full">
                    <div className="absolute
                    w-full
                    h-full
                    bg-black/60
                    
                    shadow-[0_0_100px_0_rgba(11,109,180,0.3)]">
                    </div>
                    <Image src="/../public/main/cover2.jpg" alt="" width={2000} height={2000} className="object-cover" />
                </div>
            </div>
        </>
    )
}