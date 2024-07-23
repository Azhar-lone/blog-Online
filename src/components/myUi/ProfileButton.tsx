import React from "react";

//import Icons
import { User, Upload, LayoutDashboard } from "lucide-react";

//shadcn  components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Icons
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings } from "lucide-react";

// context

const ProfileButton: React.FC = () => {


  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>
            {user.userName.charAt(0).toUpperCase()}
          </AvatarFallback>
          <AvatarImage src={user.profilePic} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onClick={() => navigate(`/${user.userName}`)}
        >
          <User /> Profile
        </DropdownMenuItem>
        {((user && user.role == "seller") || user.role === "admin") && (
          <DropdownMenuItem
            className="gap-2 cursor-pointer"
            onClick={() => navigate(`/products/upload`)}
          >
            <Upload /> Upload Product
          </DropdownMenuItem>
        )}

        {user && user.role === "admin" && (
          <DropdownMenuItem
            className="gap-2 cursor-pointer"
            onClick={() => navigate(`/admin`)}
          >
            <LayoutDashboard /> Admin DashBoard
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          <Settings /> Account Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
