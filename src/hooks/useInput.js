import { useState, useCallback } from 'react';

function useInputs(initialText) {
  const [text, setText] = useState(initialText);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setText((text) => ({ ...text, [name]: value }));
  }, []);
  const reset = useCallback(() => setText(initialText), [initialText]);
  return [text, onChange, reset];
}

export default useInputs;
