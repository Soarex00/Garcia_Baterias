import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useForm } from "react-hook-form";


export function Component() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your Name</Label>
        </div>
        <TextInput id="name" type="text" placeholder="John Doe" required shadow {...register("name")} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="number">Your Number</Label>
        </div>
        <TextInput id="number" type="text" placeholder="(123) 456-7890" required shadow {...register("number")} />
      </div>
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password">Repeat Password</Label>
        </div>
        <TextInput id="repeat-password" type="password" required shadow {...register("repeatPassword")} />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" {...register("agree")} />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Register New Account</Button>
    </form>
    </>
  );
}
export default function Cadastro() {
  return (<>
    <Component />
  </>);
}
