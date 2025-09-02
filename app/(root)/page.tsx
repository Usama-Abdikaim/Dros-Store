import ProductList from "@/components/ProductList";
import ProductOverview from "@/components/ProductOverview";
import { sampleProducts } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  return (
    <>
      <ProductOverview {...sampleProducts[0]} />

      <ProductList
        // title="latest products"
        // products={sampleProducts} 
        // containerClassName="MT-28" 
      />
    </>
  );
}

export default Home;
