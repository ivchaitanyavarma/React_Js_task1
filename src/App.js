import logo from './logo.svg';
import './index.css';
import { useState, useRef } from 'react';

function WordCount(props) {
  const textareaRef = useRef();
  const [wordcount,setWordCount] = useState(0);

  const countwords = (e) => {
    const text = textareaRef.current.value;
    setWordCount(text.split(" ").length);
  }
  return (
    <div id="b">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea id="t1" rows={10} cols={65} ref={textareaRef} /><br /><br />
      <button onClick={countwords}>Count Words</button>
      <p>Word Count: {wordcount} words.</p>
    </div>
  );
}
export default WordCount;
