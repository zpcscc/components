import { css } from '@emotion/react';
import { validate } from '@zpcscc/utils';
import { useEffect, useRef, type FC } from 'react';
import { type StyledType } from 'src/types';
import VideoJs from 'video.js';
import 'video.js/dist/video-js.css';

const disableContextMenu = (event: Event) => event.preventDefault();

// https://videojs.com/guides/options/
export type VideoOptionsType = {
  sources?: { src: string; type: string }[];
  autoplay?: boolean;
  controls?: boolean;
  responsive?: boolean;
  fluid?: boolean;
  preload?: string;
  width?: number;
  height?: number;
  poster?: string; // 封面海报
  loop?: boolean; // 是否循环
  aspectRatio?: string; // "16:9" | "4:3"
};

export type VideoViewerProps = {
  url?: string;
  styled?: StyledType;
  options?: VideoOptionsType;
  onReady?: (player: any) => void;
};

/**
 * @name video播放器
 * @param url pdf的链接
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://videojs.com/guides/options/
 */
const VideoViewer: FC<VideoViewerProps> = (props) => {
  const { url, styled, onReady, options = {} } = props || {};
  const optionsRef = useRef<VideoOptionsType>({
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    preload: 'auto',
    aspectRatio: '16:9',
    ...options,
  });
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  // 初始化pdf，加载pdf文件
  const initVideo = async (url: string) => {
    // 清空之前的数据
    try {
      if (url) {
        optionsRef.current.sources = [{ src: url, type: 'video/mp4' }];
      }
      if (playerRef?.current) {
        if (optionsRef.current.sources) {
          playerRef.current.src(optionsRef.current.sources);
        }
        if (optionsRef.current.poster) {
          playerRef.current.src(optionsRef.current.poster);
        }
      } else {
        const videoElement = document.createElement('video-js');
        videoElement.classList.add('vjs-big-play-centered');
        videoRef.current?.append(videoElement);
        videoRef.current?.addEventListener('contextmenu', disableContextMenu, false);
        playerRef.current = VideoJs(videoElement, optionsRef.current, () =>
          onReady?.(playerRef.current),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 销毁video
  const disposeVideo = () => {
    if (playerRef.current) {
      playerRef.current?.dispose?.();
      playerRef.current = null;
      videoRef.current?.removeEventListener('contextmenu', disableContextMenu, false);
    }
  };

  useEffect(() => {
    if (url && validate(url, 'url')) {
      disposeVideo();
      initVideo(url);
    } else {
      console.error('请输入正确的url');
    }
    return () => disposeVideo();
  }, [url]);

  return <div className='w-full h-full' css={css(styled)} ref={videoRef} />;
};

export default VideoViewer;
