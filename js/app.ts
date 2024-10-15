
//Input for birth date
let birthDate:string = "1995-08-27";


const calculateAge = (birthDate:string | number) => {
    const currentDate:any = new Date();
    console.log(currentDate);
    const currentYear:number = parseInt(currentDate.getFullYear());
    const currentMonth:number = parseInt(currentDate.getMonth());
    const currentDay:number = parseInt(currentDate.getDate());


    const birthYear:number = parseInt(String(birthDate).substring(0,4));
    const birthMonth:number = parseInt(String(birthDate).substring(5,7));
    const birthDay:number = parseInt(String(birthDate).substring(8,10));

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth) {
        age --;
    } else if (currentMonth === birthMonth) {
        if (currentDay < birthDay) {
            age --;
        }
    }
    
    console.log(age);

    
}


calculateAge(birthDate);