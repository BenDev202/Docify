"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
// import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

export const Editor = () => {
    const editor = useEditor({
        editorProps: {
            attributes: {
                style: "padding-left: 56px; padding-right: 56px;",
                class: "focus:outline-none print:border-0 border bg-white border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
            },
        },
        extensions: [
            StarterKit,
            // Table,
            TableHeader,
            TableCell,
            TableRow,
            TaskItem.configure({
                nested: true,
            }),
            TaskList,
        ],
        content: `<table>
        <tbody>
        <tr>
        <th>Name</th>
        <th colspan="3">Description</th>
        </tr>
        <tr>
        <td>Cyndi Lauper</td>
        <td>Singer</td>
        <td>Songwriter</td>
        <td>Actress</td>
        </tr>
        </tbody>
        </table>`
    })
    return (
        <div className='size-full overflow-x-auto bg-[#f9fbfd] px-4 print:bg-white print:p-0 print:overflow-visible'>
            <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
            <EditorContent editor={editor} />
            </div>
        </div>
    );
};