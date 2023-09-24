import java.util.*;
public class Q7maxmin2 {
    public static void main(String []agrs) throws Exception{
        try(Scanner dc = new Scanner(System.in)){
            System.out.println("Enter the value 1");
            int num1 = dc.nextInt();
            System.out.println("Enter the value 2 ");
            int num2 = dc.nextInt();
            System.out.println("Enter the value 3 ");
            int num3 = dc.nextInt();
            if(num1 > num2 && num1 > num3){
                System.out.println("Maximum number is "+num1);
            }
            else if(num2 > num1 && num2 > num3){
                System.out.println("Maximum number is "+num2);
            }
            else if(num3 > num2 && num3 > num1){
                System.out.println("Maximum number is "+num3);
            }
            else{
                System.out.println("All are equale");
            }
        }   
         catch (Exception e) {
            // TODO: handle exception
            System.out.println(e);
        }
    }
    
}
