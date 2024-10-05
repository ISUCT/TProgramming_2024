import * as foxyPackage from '../../src/lab2/foxy';

it('Should pass in ctor', () => {
  expect(() => {
    new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000');
  }).not.toThrow();
});

it('Should fall in ctor', () => {
  expect(() => {
    new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'wrongc');
  }).toThrow();
});

it('Should fall in setter', () => {
  expect(() => {
    new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000').color = 'wrong!';
  }).toThrow();
});

it('Should not to fall in setter', () => {
  expect(() => {
    new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000').color = 'ff0000';
  }).not.toThrow();
});

it('Should ctor name match', () => {
  expect(new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000').name).toEqual('Foxer');
});

it('Should ctor date match', () => {
  expect(new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000').birthDate).toEqual(new Date(2020, 0));
});

it('Should ctor date match', () => {
  expect(new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0033').color).toEqual('ff0033');
});

it('Should setter name match', () => {
  const instance = new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000');
  instance.name = 'Fix';

  expect(instance.name).toEqual('Fix');
});

it('Should setter date match', () => {
  const instance = new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000');
  instance.birthDate = new Date(2021, 0);

  expect(instance.birthDate).toEqual(new Date(2021, 0));
});

it('Should setter color match', () => {
  const instance = new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000');
  instance.color = '0012cc'; // Oh no... It's a blue fox!

  expect(instance.color).toEqual('0012cc');
});

it('Representation of fox shoild be a smile!', () => {
  const instance = new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000');
  instance.color = '0012cc'; // Oh no... It's a blue fox!

  expect(new foxyPackage.Foxy('Foxer', new Date(2020, 0), 'ff0000').getView()).toEqual('=^-^=');
});
