import { MainProduct } from '@/features/product/MainProduct'
import { FetchProductDocument, FetchProductQuery } from '../../../../saleor/api';
import { client } from '../../../../apollo-client';
import { ProductHero } from '@/features/product/ProductHero';

const getData = async () => {
    const { data } = await client.query<FetchProductQuery>({
        query: FetchProductDocument, variables: { id: 'UHJvZHVjdDoxMzI=' }
    })

    return data
}



export default async function Home() {

    const data = await getData();

    return (
        <>
            <div className="flex
        flex-col
        gap-20">
                <MainProduct name={data.product.name}
                    description={data.product.description}
                    currency={data.product.pricing.priceRange.start.currency}
                    price={data.product.pricing.priceRange.start.gross.amount}
                    image={data.product?.media[0].url} 
                    image_alt={data.product?.media[0].alt} />
                <ProductHero />
            </div>
        </>
    )
}  
