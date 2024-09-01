"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import image from '../../../assets/login/login.svg';
import { useSignupMutation } from '@/Data/api/Auth/auth';
import { setUser } from '@/Data/Store/store';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    const result = await signup(data);
    if (result) {
      dispatch(setUser(result.data));
      router.push("/menu");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your signup is successful',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.error.message,
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <Image src={image} alt='img' />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-2xl text-center font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                placeholder="name" 
                className="input input-bordered" 
                {...register('name', { required: 'Name is required' })} 
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="email" 
                className="input input-bordered" 
                {...register('email', { required: 'Email is required' })} 
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="password" 
                className="input input-bordered" 
                {...register('password', { required: 'Password is required' })} 
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Register" />
            </div>
          </form>
          <p className="my-4 text-center">Already have an account? <Link href="/login" className="text-orange-500">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
