// 'use client';

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function DashboardPage() {
  // const router = useRouter();
  // const [currentUserRole, setCurrentUserRole] = useState<string | null>(null);
  // const storedUser = useAppSelector((state: RootState) => state.auth.userInfo);
  // useEffect(() => {
  //   setCurrentUserRole(storedUser?.role as string);
  // }, [storedUser]);
  // console.log(currentUserRole);

  return <div>Loading...</div>;
}

export default DashboardPage;