'use client'
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { Button } from './ui/button';
import { saveSnippet } from '@/actions';

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code);
    const [explanation, setExplanation] = useState(snippet.explanation);

    const changeEventHandler = (value: string = '') => {
        setCode(value);
    }

    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code, explanation);

    return (
        <div>
            <form action={saveSnippetAction} className='flex justify-between items-center m-2'>
                <h1 className='font-bold text-2xl'>Edit Snippet</h1>
                <Button type='submit'>Save</Button>
            </form>
            <Editor height="90vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={code}
                onChange={changeEventHandler}
                />

        </div>

    )
}

export default EditSnippetForm