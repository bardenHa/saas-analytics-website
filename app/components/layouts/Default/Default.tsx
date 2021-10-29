import NavBar from '@module/NavBar/NavBar';
import Footer from '@module/Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <main className="h-screen overflow-x-hidden bg-base-color">
    <NavBar />
    <div className="container py-6 mx-auto md:pb-12">
      {children}
      <Footer />
    </div>
  </main>
);

export default Default;
