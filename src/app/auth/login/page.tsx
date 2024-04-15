"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type LoginProps = {};

const Login = (props: LoginProps) => {
  function handleFacebookAuth() {
    console.log("FaceBook auth");
  }
  function handleGoogleAuth() {
    console.log("google auth");
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-full max-w-md rounded-none sm:rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-extrabold">Auction Hub</CardTitle>
          <h4>Log in into your Auction Hub account</h4>
        </CardHeader>
        <hr />
        <CardContent className="flex flex-col gap-4 px-12 py-8">
          <Button variant="outline" onClick={handleGoogleAuth}>
            Continue with Google
          </Button>
          <Button
            className="bg-blue-600 text-primary hover:text-background"
            onClick={handleFacebookAuth}
          >
            Continue with Facebook
          </Button>
          <p className="text-sm text-gray-500 text-center">
            Don't have an Account?{" "}
            <Link className="text-blue-500" href="/auth/register">
              Create Account
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
