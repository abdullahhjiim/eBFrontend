import ProductDetailsArea from "@/components/product-details/product-details-area";
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";

export const metadata = {
  title: "Tiyapakhi - Product Details Page",
};

export default function ProductDetailsPage({ params }) {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea id={params.id} />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
