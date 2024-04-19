import { PrismaClient } from "@repo/db/client"
const client = new PrismaClient;

export default function Page(): JSX.Element {
  return (
    <>
    <div className="bg-red-700">hello user-app</div>
    </>
  )
}