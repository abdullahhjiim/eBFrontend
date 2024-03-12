import EmailVerifyArea from "@/components/email-verify/email-verify-area";

export const metadata = {
  title: "Shofy - Email Verify Page",
};

export function generateStaticParams() {
  return [{ token: "1" }];
}

export default function EmailVerifyPage({ params }) {
  return (
    <>
      <EmailVerifyArea token={params.token} />
    </>
  );
}
