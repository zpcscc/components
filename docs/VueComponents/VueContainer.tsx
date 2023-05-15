/*
 * @Author: dxsixpc dxsixpc@gmail.com
 * @Date: 2023-05-11 17:29:03
 * @LastEditors: dxsixpc dxsixpc@gmail.com
 * @LastEditTime: 2023-05-11 19:18:46
 * @FilePath: /components/docs/VueComponents/VueContainer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect } from 'react';
import { createApp } from 'vue';
// import VueComponent from './VueComponent.vue';

const VueContainer: React.FC = () => {
  const VueComponent = createApp({
    data() {
      return {
        count: 0,
      };
    },

    render(h) {
      return h(
        'button',
        {
          on: {
            click: () => this.count++,
          },
        },
        [this.count],
      );
    },
  });

  const app = createApp(VueComponent);

  const init = async () => {
    app.mount('#vue-container');
  };

  useEffect(() => {
    init();
    return () => {
      // 卸载vue应用实例
      // app.unmount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id='container'>
      测试渲染内容
      <div id='vue-container'>12345</div>
    </div>
  );
};

export default VueContainer;
