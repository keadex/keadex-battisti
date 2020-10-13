import { ComponentArchitectureCodeSnippet } from "../../model/autogenerated-graphql-strapi";
import styles from "./code-snippet.module.scss";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GITHUB_MASTER_BASEURL } from '../../core/app.constants';
import sanitizeHtml from 'sanitize-html';
import { mySanitizeHtml } from "../../helper/generic-helper";

//------------------ TYPES
interface CodeSnippetProps {
  codeSnippet: ComponentArchitectureCodeSnippet;
}


//------------------ COMPONENT
export const CodeSnippet : React.FC<CodeSnippetProps> = (props:CodeSnippetProps) => {
  
  //----- render
  return (
    <div className={"mt-4"}>
      {props.codeSnippet.description && (<div dangerouslySetInnerHTML={{__html: mySanitizeHtml(sanitizeHtml, sanitizeHtml.defaults, props.codeSnippet.description)}} />)}
      <div className={`mt-2 w-100 text-left text-md-right mt-3 mt-md-0 ${styles["code-snippet__file-path"]}`}><a href={props.codeSnippet.fileLink??GITHUB_MASTER_BASEURL+props.codeSnippet.filePath} target="_blank">{props.codeSnippet.filePath!.substr(props.codeSnippet.filePath!.lastIndexOf("/")+1, props.codeSnippet.filePath!.length)}</a></div>
      <SyntaxHighlighter language={props.codeSnippet.language} style={darcula} showLineNumbers customStyle={{background: 'rgb(29,29,29)'}}>
        {props.codeSnippet.code}
      </SyntaxHighlighter>
    </div>
  );
}