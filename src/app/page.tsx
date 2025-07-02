import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">CodeSnippet</h1>
      <div className="flex justify-between items-center">
        <h1 className="m-4 mb-10">Snippets</h1>
        <Link href={'createSnippet'}><Button>NEW</Button></Link>
      </div>
      {
        snippets.map((snippet) => (
          <div key={snippet.id} className="flex justify-between items-center m-4 mt-4 p-4 bg-gray-100 rounded-lg">
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}><Button>View</Button></Link>
          </div>
        ))
      }
    </div>
  );
}
