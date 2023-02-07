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
class car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(this.speed + " km/h");
    }
    brake = function() {
        this.speed -= 5;
        console.log(this.speed + " km/h");
    };
    get speedUS() {
        return this.speed / 1.6;
    }
}
const toyota = new car("toyota", 50);
console.log(toyota.speedUS);
toyota.accelerate();