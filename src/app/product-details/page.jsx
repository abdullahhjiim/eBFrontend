import ProductDetailsArea from "@/components/product-details/product-details-area";
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";

export const metadata = {
  title: "Tiyapakhi - Product Details Page",
};

export default function ProductDetailsPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea id="6431364df5a812bd37e765ac" />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
