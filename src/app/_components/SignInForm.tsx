'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm(){
    const [email,setEmail]=useState<null| string>('')
    async function signInWithEmail(){
        const signInResult = await signIn('email',{
            callbackUrl : `${window.location.origin}`,
            redirect: false

        })
    }
    return (
    <form action={signInWithEmail}>
    <div className="flex flex-col gap-y-2 mt-4">
        <Label>Email</Label>
        <Input
        onChange={(e)=>setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="example@gmail.com"
        ></Input>
      </div>
      <Button type="submit" variant='secondary'>Click to sign in with Email </Button>
      </form>
    )
}