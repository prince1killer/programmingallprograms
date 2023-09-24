import java.util.Scanner;
 class h3ifelse {
    public static void main(String[]args){
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter your value=");
            int number = sc.nextInt();
            if(number == 1){
                System.out.println("You arew good");
            }
            else if(number == 2){
                System.out.println("you are normal");
            }
            else if(number == 3){
                System.out.print("You are bad");
            }
            else{
                System.out.print("please enter valid number");
            }
        }
    }
}
