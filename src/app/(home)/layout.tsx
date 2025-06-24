import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

// Layout컴포넌트는 props로 항상 children을 가진다
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;
