type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <main className="h-screen bg-red-500">
    <div className="container h-full mx-auto">{children}</div>
  </main>
);

export default Default;
