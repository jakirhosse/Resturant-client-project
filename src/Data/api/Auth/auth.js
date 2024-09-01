import auth from '@/firebase/firebase.config';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';


const getSerializableUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const userData = getSerializableUser(userCredential.user);
          return { data: userData };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
    }),
    signup: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const userData = getSerializableUser(userCredential.user);
          return { data: userData };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
    }),
    logout: builder.mutation({
      queryFn: async () => {
        try {
          await signOut(auth);
          return { data: 'Logged out' };
        } catch (error) {
          return { error: { message: error.message }};
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = authApi;
