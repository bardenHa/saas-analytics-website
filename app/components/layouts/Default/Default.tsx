import NavBar from '@module/NavBar/NavBar';
import Footer from '@module/Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <main className="bg-base-color">
    <div className="container pb-6 mx-auto md:pb-12">
      <NavBar />
      {children}
      <Footer />
    </div>
  </main>
);

export default Default;
