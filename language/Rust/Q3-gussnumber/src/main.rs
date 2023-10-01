// use std::io;
use rand::Rng;
// use std::cmp::Ordering;


// fn main() {
//     println!("=================== Guss The Number ====================");
//     let secreat_number = rand::thread_rng().gen_range(1..=101);
//     loop{
//         let mut num1 = String::new();
//         println!("Please enter the number =");
//         // let num1: u32 = num1.trim().parse().expect("Please type a number!");
//         io::stdin()
//             .read_line(&mut num1)
//             .expect("Fail to read line");

//         Let num1: u32 = match num1.trim().parse();
//         println!("Your Guss {num}");
//         match num1.cmp(&secreat_number){
//             Ordering::Less=>println!("Too small"),
//             Ordering::Greater=>println!("Too Big"),
//             Ordering::Equal=>{
//                 println!("You Win!!");
//                 break;
//             }
//         }
        
//     }
    
//     // println!("print guss number {} ",secreat_number);

// }


use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Guess the number!");

    // let secret_number = rand::thread_rng().gen_range(1..=101);
    let secret_number = rand::thread_rng().gen_range(1..=101);

    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}