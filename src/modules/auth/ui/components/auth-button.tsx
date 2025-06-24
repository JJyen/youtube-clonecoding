import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  //TODO: 인증 상태 추가
  return (
    <Button
      variant={"outline"}
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 
      shadow-none border-blue-500/20 rounded-full [&_svg]:size-5"
    >
      <UserCircleIcon />
      Sign in
    </Button>
  );
};
