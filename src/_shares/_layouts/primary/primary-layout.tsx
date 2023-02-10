import Footer from "./primary-footer";
import Header from "./primary-header";

type LayoutProps = {
    children: React.ReactNode;
};

export default function PrimaryLayout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}