import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const createSnippet = () => {
    async function createSnippet(formData: FormData) {
        'use server'
        const title = formData.get('title') as string;
        const code = formData.get('code')as string;
        const explanation = formData.get('explanation')as string;

        await prisma.snippet.create({
            data: {
                title,
                code,
                explanation,
            }
        });

        redirect('/');
    }

    return (
        <form className='my-4' action={createSnippet}>
            <div className='mb-4'>
                <Label>Title</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div className='mb-4'>
                <Label>Code</Label>
                <Textarea name='code' id='code' />
            </div>
            <div className='mb-4'>
                <Label>Explanation</Label>
                <Textarea name='explanation' id='explanation' />
            </div>
            <div className='mb-4'>
                <Button>Add Snippet</Button>
            </div>

        </form>

    )
}

export default createSnippet