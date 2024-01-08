import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInWithGitHub from "../_components/SignInWithGitHub";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import SignInForm from "../_components/SignInForm";
export default async function AuthRoute() {
    const session = await getServerAuthSession()
    if (session){
        return redirect('/')
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>To access your task Please sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
           <SignInForm/>
            <SignInWithGitHub/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
