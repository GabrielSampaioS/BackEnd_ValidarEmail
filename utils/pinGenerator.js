export default function generatePin() {
    const pin = Math.floor(10000 + Math.random() * 90000).toString();
    console.log(pin);
    return pin;
}
