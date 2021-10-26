import NavBar from '@module/NavBar/NavBar';
import Footer from '@module/Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <main className="bg-base-color">
    <div className="container mx-auto">
      <NavBar />
      {children}
      <Footer />
    </div>
  </main>
);

export default Default;
