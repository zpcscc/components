import { css } from '@emotion/react';
import { toAbsolutePath, validate } from '@zpcscc/utils';
import * as pdfjsLib from 'pdfjs-dist/build/pdf.min.mjs';
import { useEffect, useRef, useState, type FC } from 'react';
import { type StyledType } from 'src/types';
import { CanvasWrapper, PdfContainer } from './Styled';

pdfjsLib.GlobalWorkerOptions.workerSrc = toAbsolutePath('/components/pdf.worker.min.mjs');

export type PdfViewerProps = {
  url: string;
  scale?: number;
  styled?: StyledType;
};

/**
 * @name pdf查看器
 * @param url pdf的链接
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://github.com/mozilla/pdf.js
 */
const PdfViewer: FC<PdfViewerProps> = ({ url, scale = 1, styled }) => {
  const [pdfPages, setPdfPages] = useState<{ id: string; number: number }[]>([]);
  // pdf所有页面的数组
  const pdfPagesRef = useRef<{ id: string; number: number }[]>([]);
  const pdfDocRef = useRef<any>(null);

  // 加载pdf的某一页
  const renderPdfPage = async (number: number) => {
    try {
      const page = await pdfDocRef.current?.getPage(number);
      // 获取视图
      const viewport = page.getViewport({ scale });
      // 获取canvas
      const canvas: HTMLCanvasElement | null = document.querySelector(`#pdf-page-${number}`);
      if (canvas) {
        const context = canvas.getContext('2d');
        const devicePixelRatio = window.devicePixelRatio || 2;
        const outputScale = devicePixelRatio >= 2 ? devicePixelRatio : 2; // 输出缩放比例，设置为不低于2，低于2看起来会很糊；
        // 设置canvas的宽高
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        const transform = outputScale === 1 ? null : [outputScale, 0, 0, outputScale, 0, 0];
        // 渲染pdf
        const renderContext = {
          canvasContext: context,
          viewport,
          transform
        };
        // eslint-disable-next-line promise/no-nesting
        page.render(renderContext).promise.then(async () => {
          if (number < pdfPagesRef.current.length) {
            await renderPdfPage(number + 1);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 初始化pdf，加载pdf文件
  const initPdf = async (url: string) => {
    // 清空之前的数据
    pdfPagesRef.current = [];
    pdfDocRef.current = null;
    setPdfPages([]);

    // 加载pdf文件
    try {
      const pdfDoc = await pdfjsLib.getDocument({
        url,
        cMapUrl: toAbsolutePath('/components/cmaps/'),
        cMapPacked: true
      }).promise;
      pdfDocRef.current = pdfDoc;
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        pdfPagesRef.current.push({ id: `pdf-page-${i}`, number: i });
      }
      setPdfPages(pdfPagesRef.current);
      setTimeout(() => renderPdfPage(1));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(url);
    if (validate(url, 'url') && url.endsWith('.pdf')) {
      initPdf(url);
    } else {
      console.error('请输入正确的url');
    }
  }, [url]);

  return (
    <PdfContainer css={css(styled)}>
      {pdfPages.map((pageItem) => (
        <CanvasWrapper key={pageItem.id} id={pageItem.id} />
      ))}
    </PdfContainer>
  );
};

export default PdfViewer;
