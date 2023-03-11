/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { EditorProps, OnChange } from '@monaco-editor/react';
import Editor from '@monaco-editor/react';
import { useDebounceFn } from 'ahooks';
import type { DebounceOptions } from 'ahooks/lib/useDebounce/debounceOptions';

export interface MonacoEditorProps extends EditorProps {
  // 防抖配置
  debounceOptions?: DebounceOptions;
  styled?: CSSInterpolation;
}

/**
 * @name 摩纳哥代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param debounceOptions 防抖配置 示例：{wait:100}
 * @param theme 主题样式
 * @param options 微软原版monaco-editor配置参数
 * @link rest参数详见 https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html
 * @link 其他参数详见 https://github.com/suren-atoyan/monaco-react
 */
const MonacoEditor: React.FC<MonacoEditorProps> = (props) => {
  const {
    debounceOptions = { wait: 100 },
    value = '',
    language = 'javascript',
    theme = 'vs-dark',
    styled,
    onChange,
    ...rest
  } = props;

  // onChange封装
  const onEditorChange: OnChange = (editorValue = '', ev) => {
    onChange?.(editorValue, ev);
  };

  // 防抖操作
  const { run } = useDebounceFn(onEditorChange, debounceOptions);

  return (
    <Editor
      language={language}
      defaultValue={value || ''}
      onChange={run}
      theme={theme}
      css={css(styled)}
      {...rest}
    />
  );
};

export default MonacoEditor;
