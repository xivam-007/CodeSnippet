import EditSnippetForm from '@/components/EditSnippetForm'
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import React from 'react'

const EditPage = async ({ params, }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await params).id)
    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    });

    if (!snippet) notFound();
    return (
        <EditSnippetForm snippet={snippet} />
    )
}

export default EditPage