"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { useLogoutMutation } from '@/Data/api/Auth/auth';


const LogoutPage = () => {
  const router = useRouter();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    const handleLogout = async () => {
      const result = await logout();
      if (!result.error) {
        router.push("/menu");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have been logged out',
          showConfirmButton: false,
          timer: 1500,
        });
      } 
    };

    handleLogout();
  }, [logout, router]);

  return <p>Logging out...</p>;
};

export default LogoutPage;
