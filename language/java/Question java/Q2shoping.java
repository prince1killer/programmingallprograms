import java.util.*;
public class Q2shoping {
    public static void main(String []agers){
        try(Scanner dc = new Scanner(System.in)){
            System.out.print("Enter your name = ");
            String name = dc.nextLine();
            System.out.print("Enter the product name = ");
            String product = dc.nextLine();
            System.out.print("Enter the product price = ");
            int price = dc.nextInt();
            System.out.println("Enter the product quantity = ");
            int quantity = dc.nextInt();
            
            int total = price*quantity;
            int discount;
            if(total >= 1500){
                discount = (total/100)*50;
            }
            else if(total >= 1000 && total <=1499){
                discount = (total/100)*25;
            }
            else if(total >= 800 && total <= 999){
                discount = (total/100)*10;
            }
            else{
                discount = 0;
            }
            System.out.println("Your name = "+name);
            System.out.println("Your product = "+product);
            System.out.println("Your price = "+price);
            System.out.println("Your quantity = "+quantity);
            System.out.println("Your total = "+total);
            System.out.println("Your discount = "+discount);
            System.out.println("Your net = "+(total-discount));
        }
    }
}
