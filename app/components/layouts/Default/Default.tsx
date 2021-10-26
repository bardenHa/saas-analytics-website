import NavBar from '@module/NavBar/NavBar';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <main className="h-screen bg-base">
    <div className="container h-full mx-auto overflow-hidden">
      <NavBar />
      {children}
    </div>
  </main>
);

export default Default;
