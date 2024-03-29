import {
  Form,
  //Hero,
  Services,
  Product,
  Equipment,
  OurProcesses,
  Recipes,
} from "@/pages/(page-lib)/components";
import { type NextPageWithLayout } from "@/pages/_app.page";
import Head from "next/head";
import { Navbar, Footer } from "@/pages/(page-lib)/layouts";

const Home: NextPageWithLayout = () => (
  <>
    <Product />
    <Services />
    <Equipment />
    <OurProcesses />
    <Recipes />
    <Form />
  </>
);

Home.getLayout = (page) => (
  <>
    <Head>
      <title>Almidones El Mana</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="content" />
      <link rel="icon" type="image/svg" href="/images/Yuca.png" />
    </Head>

    <Navbar />
    {page}
    <Footer />
  </>
);

export default Home;
