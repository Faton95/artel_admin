import React, { useState } from 'react';
import { EditorState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function NewsEditor() {

    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';

    const [news, setNews] = useState(() => EditorState.createEmpty(),)
    const contentBlock = convertFromHTML('<p>Hey this <strong>editor</strong> rocks 😀</p>');

    console.log("news", contentBlock)
    const onEditorStateChange = (news) => {
        setNews(news)

    };

    return (
        <div>
            <Editor
                editorState={news}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    )
}
