import { Phone } from "../src/labs/classes";

describe("Phone", () => {
    let phone: Phone;
  
    beforeEach(() => {
      phone = new Phone(88123456789, "Samsung", "s23");
    });
  
    test("must create an instance of the phone class with valid properties", () => {
      expect(phone.phoneNumber).toBe(88123456789);
      expect(phone.phoneBrand).toBe("Samsung");
      expect(phone.phoneModel).toBe("s23");
    });
  
    test("must set brand correctly", () => {
      phone.phoneBrand = "Xiaomi";
      expect(phone.phoneBrand).toBe("Xiaomi");
    });
  
    test("must set model correctly", () => {
      phone.phoneModel = "Mix Flip";
      expect(phone.phoneModel).toBe("Mix Flip");
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
      expect(phrase).toBe("Данный абонент, с номером 88123456789, владеет телефоном  Samsung s23");
    });
  
});
