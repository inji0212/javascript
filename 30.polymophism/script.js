// Polymorphism -- 클래스는 메서드는 같지만 구현이 다릅니다.
class PaymentGateway {
    constructor() {
        this.connect();
    }
    connect() {
        // 결제 제공업체에 연결
        // ..
    }
    pay(amount) {
        // ..
    }
    refund(amount) {
        // ..
    }
}

class Paypal extends PaymentGateway {
    pay(amount) {
        // 페이팔 전용 로직을 구현해야 합니다.
    }
    refund(amount) {
        // 페이팔 전용 로직을 구현해야 합니다.
    }
    connect() {
        // 페이팔 전용 로직을 구현해야 합니다.
    }
}

class Visa extends PaymentGateway {
    pay(amount) {
        // Visa 전용 로직을 구현해야 합니다.
    }
    refund(amount) {
        // Visa 전용 로직을 구현해야 합니다.
    }
    connect() {
        // Visa 전용 로직을 구현해야 합니다.
    }
}

class Customer {
    makePayment(gateway, amount) {
        return gateway.pay(amount)
    }

    // 만약 다형성이 없다면 이런식으로 메소드들을 생성해야합니다.
    // payByPaypal(amount) {}
    // payByVisa(amount) {}

    getRefund(gateway, amount) {
        return gateway.refund(amount)
    }
}

// Why is this useful?
// We can reuse and write more generic code
// More flexible: if there are new payment gateway providers, 
// we simply need to create a new class for them, without tweaking the payment logic in customer class

// 이것이 유용한 이유는 무엇입니까?
// 더 일반적인 코드를 재사용하고 작성할 수 있습니다.
// 보다 유연함: 새로운 결제 게이트웨이 제공업체가 있는 경우
// 고객 클래스의 결제 로직을 조정하지 않고 새 클래스를 생성하기만 하면 됩니다.
const john = new Customer();
const paypal = new Paypal();
const visaCard = new Visa();

// we can pass on paypal or card since either of them implement the payment gateway mehtods.
// 둘 중 하나가 지불 게이트웨이 방법을 구현하기 때문에 우리는 페이팔이나 카드를 전달할 수 있습니다.
john.makePayment(paypal, 100);
john.makePayment(visaCard, 100);


// class Customer {
//     // the 'gateway' argument can be any object that implements the Payment Gateway methods
//     // based on this assumption, we can safely call the pay method from the gateway object
//      // '게이트웨이' 인수는 결제 게이트웨이 메서드를 구현하는 모든 객체가 될 수 있습니다.
//      // 이 가정에 따라 게이트웨이 객체에서 안전하게 지불 방법을 호출할 수 있습니다.
//     makePayment(gateway, amount) {
//         return gateway.pay(amount)
//     }

//     // 만약 다형성이 없다면 이런식으로 메소드들을 생성해야합니다.
//     // payByPaypal(amount) {}
//     // payByVisa(amount) {}

//     getRefund(gateway, amount) {
//         return gateway.refund(amount)
//     }
// }
