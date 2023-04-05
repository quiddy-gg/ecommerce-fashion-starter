import { client } from '../../apollo-client'
import { HeroVid } from '@/features/landing-page/HeroVid'
import { Main } from '@/features/landing-page/Main'
import { HeroContent } from '@/features/landing-page/HeroContent'
import { FetchProductDocument, FetchProductQuery } from '../../saleor/api'
import { MainProduct } from '@/features/product/MainProduct'

const getData = async () => {
  const { data, error } = await client.query<FetchProductQuery>({
    query: FetchProductDocument, variables: { id: 'UHJvZHVjdDoxNTI=' }
  })


  return data
}



export default async function Home() {

  console.log(await (getData()));

  return (
    <>
      <HeroVid />
      <Main />
      <HeroContent />

    </>
  )
}
