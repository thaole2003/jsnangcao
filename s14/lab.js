// 1. Sử dụng constructor function để khởi tạo đối tượng ô tô (Car). Ô tô có 2 thuộc
// tính: make & speed. Speed là tốc độ hiện tại của ô tô tính bằng km/h
// 2. Thực hiện một phương thức (Method) "accelerate" để tăng speed hiện tại của
// ô tô thêm 10 và in ra speed mới của ô tô;
// 3. Thực hiện một phương thức (Method) "brake" giảm speed hiện tại của ô tô đi 5
// và in ra speed mới của ô tô;
// 4. Khởi tạo 2 đối tượng ô tô (Car) và thử nghiệm gọi 2 method "brake" và
// "accelerate" nhiều lần trên mỗi đối tượng;
// Test case
// Dữ liệu ô tô 1: BMW đang chạy với tốc độ 120km/h
// Dữ liệu ô tô 2: Mercedes đang chạy với tốc độ 95km/h
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function() {};
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.speed + " km/h");
};
const bmw = new Car("bmw", 120);
bmw.accelerate();
bmw.brake();
bmw.brake();
//1. Tạo lại đối tượng Car của bài 1, nhưng sử dụng ES6 class;
// 2. Thêm một getter 'speedUS' trả về speed hiện tại với đơn vị mi/h ( chia cho 1.6,
//     1mi = 1.60934km );
//     3. Thêm một setter 'speedUS' để thay đổi tốc độ hiện tại tính bằng mi/h ( nhưng
//     trước khi lưu sẽ đổi nó sang đơn vị km/h bằng cách mi/h*1.6 )
//     4. Khởi tạo đối tượng ô tô (Car) và thực hiện 2 phương thức (method) 'accelerate'
//     & 'brake', 2 getter & setter;
//     Test case
//     LAB	7 LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 2 DỮ LIỆU XE 1: Xe ô tô Ford đang di chuyển với vận tốc 120km/h
// class car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(this.speed + " km/h");
//     }
//     brake = function() {
//         this.speed -= 5;
//         console.log(this.speed + " km/h");
//     };
//     get speedUS() {
//         return this.speed / 1.6;
//     }
// }
// const toyota = new car("toyota", 50);
// console.log(toyota.speedUS);
// toyota.accelerate();
// 1. Sử dụng contructor function để khởi tạo một đối tượng ô tô điện (ElectricCar)
// có tên EV như một lớp con của Car ( ElectricCar extends(Kế thừa) Car ), ngoài
// 'make' & 'speed' ElectricCar còn có mực pin hiện tại tính bằng % ( 'charge'
// property );
// 2. Khởi tạo phương thức ( method ) 'chargeBattery' nhận một đối số là 'chargeTo'
// và và thay đổi mức pin hiện tại bằng 'chargeTo';
// *Gọn: chargeBattery là một phương thức dùng để thay đổi mức pin hiện tại của
// ElectricCar;
// 3. Khởi tạo phương thức (method) 'accelerate' để tăng tốc độ ô tên thêm 20,
// đồng thời giảm mức pin (charge) đi 1%. Sau đó in ra dòng log: 'Tesla going at 140
// km/h, with a charge of 22%';
// *Gọn: accelerate thực hiện 3 việc: (speed + 20) & (charge - 1) &
// console.log('Tesla going at 140 km/h, with a charge of 22%');
// 4. Khởi tạo đối tượng ElectricCar và thực hiện các phương thức (method)
// 'accelerate', 'brake' và 'chargeBattery' ( mức pin là 90% )
// *Chú ý: Vấn đề khi thực hiện method 'accelerate', Hãy đọc lại về 'Tính đa hình
// của javascript' (JavaScript Polymorphism);
// Test case
// DỮ LIỆU XE 1: Ô tô 'Tesla' đang di chuyển với vận tốc 120 km/h, có mức pin là
// 23%;
const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
};
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(
        "oto đang đi với tốc độ" + this.speed + "with a change of" + this.charge
    );
};
const tesla = new EV("Tesla", 120, 30);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();