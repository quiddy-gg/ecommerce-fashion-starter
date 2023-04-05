//@ts-nocheck

import Image from "next/image"
import React from "react"
import styles from "./product.module.css"

interface MainProductProps {
    name: string;
    description: string;
    currency: string;
    price: string;
    image: string;
    image_alt: string;
}

export const MainProduct = ({ name, description, price, currency, image, image_alt }: MainProductProps) => {

    return (
        <>

            

            <div className="flex
            flex
            flex-row
            items-center
            justify-evenly
            px-6
            mt-20
            gap-10

            max-lg:flex-col
            max-lg:px-0">
                <div className="flex
                flex-col
                gap-6
                overflow-hidden
                
                max-lg:flex-row
                max-lg:overflow-scroll
                max-lg:overflow-y-hidden
                max-lg:snap-x
                max-lg:px-16">
                    <Image src={image} alt={image_alt} width={700} height={2000} className="object-cover
                    rounded-sm
                    
                    max-lg:snap-center
                    max-lg:shrink-0" />
                    <Image src="/../public/main/cover2.jpg" alt="" width={700} height={2000} className="object-cover
                    rounded-sm
                    
                    max-lg:snap-center
                    max-lg:shrink-0" />
                    <Image src="/../public/main/cover2.jpg" alt="" width={700} height={2000} className="object-cover
                    rounded-sm
                    
                    max-lg:snap-center
                    max-lg:shrink-0" />
                    <Image src="/../public/main/cover2.jpg" alt="" width={700} height={2000} className="object-cover
                    rounded-sm
                    
                    max-lg:snap-center
                    max-lg:shrink-0" />
                </div>
                <div className="sticky
                top-20
                self-start
                flex
                flex-col
                max-w-[400px]
                gap-2
                
                max-lg:self-center
                max-lg:px-8">
                    <h2 className="text-white
                    font-bold
                    text-3xl
                    tracking-wider
                    
                    max-lg:self-center">{name}</h2>
                    <p className="text-white/70
                    font-medium
                    mb-6
                    text-xl
                    
                    max-lg:self-center">{price}{currency}</p>
                    <div className="flex
                    flex-col
                    gap-2">
                        <p className="text-white
                        text-xl">Size:</p>
                        <ul className={styles.sizes_list}>
                            <li>
                                <input type="checkbox" name="check-size" id="size-xs" className={styles.check_size} />
                                <label htmlFor="size-xs" className={styles.check_label}>XS</label>
                            </li>
                            <li>
                                <input type="checkbox" name="check-size" id="size-s" className={styles.check_size} />
                                <label htmlFor="size-s" className={styles.check_label}>S</label>
                            </li>
                            <li>
                                <input type="checkbox" name="check-size" id="size-m" className={styles.check_size} />
                                <label htmlFor="size-m" className={styles.check_label}>M</label>
                            </li>
                            <li>
                                <input type="checkbox" name="check-size" id="size-l" className={styles.check_size} />
                                <label htmlFor="size-l" className={styles.check_label}>L</label>
                            </li>
                            <li>
                                <input type="checkbox" name="check-size" id="size-xl" className={styles.check_size} />
                                <label htmlFor="size-xl" className={styles.check_label}>XL</label>
                            </li>
                            <li>
                                <input type="checkbox" name="check-size" id="size-xxl" className={styles.check_size} />
                                <label htmlFor="size-xxl" className={styles.check_label}>XXL</label>
                            </li>
                        </ul>
                        <p className="text-white
                        cursor-pointer">Not sure about the size?</p>
                        <button className="bg-white
                        w-full
                        h-10
                        font-semibold
                        rounded-sm
                        transition-all
                        duration-300
                        
                        hover:rounded-md
                        hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
                        hover:bg-white/80">ADD TO CART</button>
                        <p className="text-white">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}