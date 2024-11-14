import { Phone } from "../src/labs/phoneClass";

describe("Phone", () => {
    let phone: Phone;
  
    beforeEach(() => {
      phone = new Phone(88123456789, "Samsung", "s23", 1337);
    });
  
    test("must create an instance of the phone class with valid properties", () => {
      expect(phone.phoneNumber).toBe(88123456789);
      expect(phone.brand).toBe("Samsung");
      expect(phone.model).toBe("s23");
      expect(phone.id).toBe(1337);
    });
  
    test("must set brand correctly", () => {
      phone.brand = "Xiaomi";
      expect(phone.brand).toBe("Xiaomi");
    });
  
    test("must set model correctly", () => {
      phone.model = "Mix Flip";
      expect(phone.model).toBe("Mix Flip");
    });
  
    test("must throw an error if length of number isnt 11", () => {
      expect(() => {
        phone.phoneNumber = 888;
      }).toThrow("the length of the number should be 11");
    });

    test("must return the required phrase", () => {
      let phrase = phone.makeCall();
      expect(phrase).toBe("Совершается вызов абонента по номеру 88123456789");
    });

    test("must return the required phrase", () => {
      let phrase = phone.getInfo();
      expect(phrase).toBe("Данный абонент, с номером 88123456789, владеет телефоном  Samsung s23, id которого 1337");
    });
  
});
