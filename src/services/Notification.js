import notifee from '@notifee/react-native';

const Notification = async () => {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Local Notification',
    body: 'Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız',
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });
};

export default Notification;
