let person = {
    firsName: "Ha",
    lastName: "Tran",
    cccd: 15452455,
    dob: "4/5/2052",
    getFullName: function(){
        let fullName = this.lastName + " " + this.firsName;
        return fullName;
    }
};


// preson.lastName  = "Nguyen";
console.log(person.getFullName());

//class in Js
class SinhVien {
    //create constructor cho class voi 5 chuc nang
    constructor(masv, ho, ten, namSinh, email) {
        this.masv = masv;
        this.ho = ho;
        this.ten = ten;
        this.namSinh = namSinh;
        this.email = email;
    }
    // tinhtuoi cho sinh vien
    getAge() {
        const date =new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namSinh;
        return age;
    }

    //in ra full name
    getFullName() {
        return this.ho + " " + this.ten;
    }
}

let sv1 = new SinhVien('SV01', 'Tran', 'Tong', 1995, 'trantong@gmail.com' );
let sv2 = new SinhVien('SV02', 'Truong', 'thanh', 1992, 'truongthanh@gmail.com' );
let sv3 = new SinhVien('SV03', 'Thanh', 'Tho', 1997, 'thanhtho@gmail.com' );
console.log( sv1.getFullName() + ":" + sv1.getAge());
console.log( sv2.getAge() + ":" + sv2.getFullName());
console.log( sv3.getFullName() + ":" + sv3.getAge());

//dong cho nay
// window.open("https://tinhte.vn/","kien thuc", "");

let w = window.innerWidth;
let h = window.innerHeight;


console.log("width: " + w + " height: " + h);

//screen object
console.log("width: " + screen.width +"\n" +
 "height: " + screen.height +"\n"+
 "avaiWidth: " + screen.availWidth +"\n" +
 "avaiheight: " + screen.availHeight + "\n" +
 "colorDepth: " + screen.colorDepth + "\n" +
 "pixelDepth: " + screen.pixelDepth + "\n");


