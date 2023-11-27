/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Editor, { type EditorProps, type OnChange } from '@monaco-editor/react';
import { debounce } from 'lodash';
import { type FC } from 'react';
import type { StyledType } from 'src/type/customType';
import defineTheme from './defineTheme';

export { useMonaco } from '@monaco-editor/react';

export interface MonacoEditorProps extends EditorProps {
  styled?: StyledType;
}

/**
 * @name 摩纳哥代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param theme 主题样式 light | vs-dark | OneDarkPro
 * @param options 微软原版monaco-editor配置参数
 * @link rest参数详见 https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html
 * @link 其他参数详见 https://github.com/suren-atoyan/monaco-react
 */
const MonacoEditor: FC<MonacoEditorProps> = (props) => {
  const {
    value = '',
    language = 'javascript',
    theme = 'OneDarkPro',
    styled,
    onChange,
    ...rest
  } = props;

  // onChange封装
  const onEditorChange: OnChange = (editorValue = '', ev) => {
    onChange?.(editorValue, ev);
  };

  // 防抖操作
  const run = debounce(onEditorChange, 100);

  return (
    <Editor
      beforeMount={() => defineTheme(theme)}
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
