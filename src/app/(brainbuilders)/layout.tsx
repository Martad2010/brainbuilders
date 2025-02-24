import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="mt-16">{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
