import { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
    script.async = true;
    script.onload = () => {
      const webchat = window.botpressWebChat || window.botpress;

      if (webchat) {
        webchat.init({
          botId: 'a4932988-74ab-4f96-bcb3-b2856089315d',
          clientId: '1cdec193-60d3-493f-bf00-da4a71aec6e7',
          selector: '#webchat',
          showWidget: true,
          configuration: {
            botName: 'Neura AI',
            botAvatar: 'https://freesvg.org/img/1538298822.png',
            color: '#000000',
            themeMode: 'light',
            radius: 2,
            fontFamily: 'inter',
            variant: 'soft',
          },
        });

        webchat.on('webchat:ready', () => {
          webchat.open();
        });
      } else {
        console.error('Botpress WebChat failed to load.');
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="webchat"
      style={{
        width: '100%',
        height: '500px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    ></div>
  );
};

export default BotpressChat;
