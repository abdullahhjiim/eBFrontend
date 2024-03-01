import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import LoginArea from "@/components/login-register/login-area";
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";

export const metadata = {
  title: "TiyaPakhi - Login Page",
};

export default function LoginPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Login" subtitle="Login" center={true} />
      <LoginArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
