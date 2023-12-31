import {
  PNFirebaseAdapter,
  PushNotificationMessageTopicsDTO,
  PushNotificationService,
} from '../';

enum Providers {
  firebase = 'firebase',
}

async function main() {
  const service = new PushNotificationService({
    defaultProvider: Providers.firebase,
    adapters: {
      [Providers.firebase]: new PNFirebaseAdapter({}),
    },
  });

  console.log(
    JSON.stringify(
      await service.send(
        new PushNotificationMessageTopicsDTO({
          topics: ['all'],
          title: 'Title',
          body: 'Test',
          data: {
            test: 'test',
          },
          imageUrl: 'https://placehold.co/400x200/000000/FFFFFF.png',
        }),
        Providers.firebase,
      ),
    ),
  );
}

main();
