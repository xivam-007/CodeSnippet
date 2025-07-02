import { deleteSnippet } from '@/actions';
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function showSnippet({ params }: { params: { id: string } }) {
    const snippet = await prisma.snippet.findUnique({
        where: {
            id: parseInt(params.id),
        }
    });

    if (!snippet) notFound();
    const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

    if (!snippet) {
        return <div>Snippet not found</div>
    }
    return (
        <div className='my-4'>
            <div className='flex justify-between items-center'>
                <h1 className='mb-4 font-bold text-4xl justify-between items-center'>{snippet?.title}</h1>
                <div className='flex justify-center items-center'> 
                    <Link href={`/snippet/${snippet.id}/edit`}><Button className='m-2 hover:bg-slate-600'>EDIT</Button></Link>
                    <form action={deleteSnippetAction}>
                    <Button className='bg-transparent text-black border border-black hover:bg-gray-300' type='submit'>DELETE</Button>
                    </form>
                    
                </div>
            </div>
            <div>
                <h1 className='font-semibold m-3'>Code:</h1>
                <div className='mb-4 p-4 bg-gray-200 rounded-lg'>

                    <pre>{snippet?.code}</pre>
                </div>
            </div>
            <div>
            <h1 className='font-semibold m-3'>Explanation:</h1>
                <div className='mb-4 bg-amber-200 p-4 rounded-lg'>
                    <p>{snippet?.explanation
                    }</p>
                </div>
            </div>
        </div>
    )
}