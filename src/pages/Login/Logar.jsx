import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useForm } from "react-hook-form";


export function Component() {
  const { register, handleSubmit, formState: { errors } } = useForm();
    
  return (
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Your Email</Label>
          </div>
          <TextInput id="email" type="email" placeholder="name@gmail.com" required shadow {...register("email")} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password">Your Password</Label>
          </div>
          <TextInput id="password" type="password" required shadow {...register("password")} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" {...register("remember")} />
          <Label htmlFor="remember" className="flex">
            Remember me
          </Label>
        </div>
        <Button type="submit">Log In</Button>
      </form>
    );
}

