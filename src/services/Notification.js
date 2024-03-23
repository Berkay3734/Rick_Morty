import notifee from '@notifee/react-native';
import {Button, View} from 'react-native';
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';

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
