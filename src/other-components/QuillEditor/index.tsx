import { css } from '@emotion/react';
import Quill, { type EmitterSource, type QuillOptions } from 'quill';
import Delta from 'quill-delta';
import 'quill/dist/quill.snow.css';
import { useEffect, useLayoutEffect, useRef, type FC } from 'react';
import { type StyledType } from 'src/types';
import { Wrapper } from './Styled';

export type QuillEditorProps = {
  value?: string;
  styled?: StyledType;
  options?: QuillOptions;
  onChange?: (value: string, delta: Delta, oldContent: Delta, source: EmitterSource) => void;
  onReady?: (quill: Quill) => void;
};

/**
 * @name 富文本编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://quilljs.com/docs/quickstart
 */
const QuillEditor: FC<QuillEditorProps> = (props) => {
  const { value, styled, options = {}, onChange, onReady } = props || {};
  const quillRef = useRef<Quill>();
  const containerRef = useRef<HTMLDivElement>(null);
  const defaultValueRef = useRef<string>(value ?? '');
  const onTextChangeRef = useRef(onChange);
  // const onSelectionChangeRef = useRef(onSelectionChange);

  const defaultOptions: QuillOptions = {
    theme: 'snow', // 或 'bubble'
    placeholder: 'Hello, World!',
    modules: {
      toolbar: [
        [{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }, { header: 5 }, { header: 6 }], // 标题大小 [{ header: [1, 2, 3, 4, 5, 6] }]
        ['bold', 'italic', 'underline', 'strike', { color: [] }, { background: [] }], // 加粗，倾斜，下划线，中划线，文字颜色，文字背景颜色
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }], // 有序列表，无需列表，可勾选列表
        [{ align: [] }, { indent: '-1' }, { indent: '+1' }, { direction: 'rtl' }], // 对齐方式 减小缩进，增加缩进，文本排列方式
        ['link', 'image', 'video'], // 超链接，图片，视频，
        ['formula', { script: 'sub' }, { script: 'super' }], // 数学公式，下标，上标
        ['blockquote', 'code-block', 'clean'], // 引用，代码块，删除选中文本的格式
        [{ size: [] }, { font: [] }] // 文字大小，字体
      ]
    },
    ...options
  };

  useLayoutEffect(() => {
    onTextChangeRef.current = onChange;
    // onSelectionChangeRef.current = onSelectionChange;
  });

  useEffect(() => {
    if (containerRef.current) {
      const quill = new Quill(containerRef.current, defaultOptions);
      // 将quill实例暴露出去。供外部使用；
      onReady?.(quill);

      quillRef.current = quill;

      // 设置初始值
      if (defaultValueRef.current) {
        quill.clipboard.dangerouslyPasteHTML(0, defaultValueRef.current);
        // quill.setText(defaultValueRef.current);
        // quill.setContents(defaultValueRef.current);
      }

      // 监听内容更改
      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(quillRef.current?.root.innerHTML ?? '', ...args);
      });

      // quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
      //   onSelectionChangeRef.current?.(...args);
      // });
    }

    return () => {
      // 清空编辑器；
      quillRef.current = undefined;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [quillRef]);

  return (
    <Wrapper css={css(styled)}>
      <div ref={containerRef} />
    </Wrapper>
  );
};

export default QuillEditor;
