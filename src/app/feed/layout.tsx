// Layout컴포넌트는 props로 항상 children을 가진다
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <p>layout</p>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
