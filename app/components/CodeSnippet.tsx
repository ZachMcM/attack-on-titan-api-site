import Prism from 'prismjs'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-shell-session';

export default function CodeSnippet({language, code} : any) {
    const highlightedCode = Prism.highlight(code, Prism.languages[language], language)
    return (
        <pre className={`language-${language} rounded-lg`}>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    )
}