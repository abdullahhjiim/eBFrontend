import OrderArea from "@/components/order/order-area";
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";

export const metadata = {
  title: "Shofy - Order Page",
};

export function generateStaticParams() {
  return [{ id: "1" }];
}

export default function OrderPage({ params }) {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <OrderArea orderId={params.id} />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
