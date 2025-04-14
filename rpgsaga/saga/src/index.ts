// import { AndroidPhone } from './AndroidPhone';
// import { Application } from './Application';
// import { BabushkaPhone } from './BabushkaPhone';
// import { CellPhone } from './CellPhone';
// import { IosPhone } from './IosPhone';
import { LandLinePhone } from './LandLinePhone';
// import { Pencil } from './Pencil';
// import { Phone } from './Phone';
// import { Store } from './Store';

const ll = new LandLinePhone('landline', '123', 1230);
ll.dial('some number');

// const cellPhone = new IosPhone('Cell', '234', 500);
// cellPhone.dial('from mobile');
// cellPhone.declineCall();

// const nCell: Phone = new BabushkaPhone('Cell', '234', 500);
// nCell.dial('123');
// console.log(nCell);

// const tmp = nCell as CellPhone;
// tmp.declineCall();

// const phones: Phone[] = [ll, cellPhone];
// for (const phone of phones) {
//   phone.dial('1234556e7768686');
// }

// const samsung = new AndroidPhone('Samsung', '1234567', 500);
// samsung.sendMessage('hello');

// const store = new Store();
// store.addItem(samsung);
// store.addItem(ll);
// store.addItem(cellPhone);

// const iPencil = new Pencil();
// iPencil.draw();

// store.addItem(iPencil);

// store.showItems();

// const keep = new Application('keep');
// samsung.installApp(keep);
// samsung.runApp('keep');
// // samsung.runApp('maps');
