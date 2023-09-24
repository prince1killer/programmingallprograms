import java.util.*;
public class Q15multtable {
    public static void main(String []agrs){
        Scanner dc = new Scanner(System.in);
        System.out.println("Enter the value 1 =");
        int num1 = dc.nextInt();
        System.out.println("Enter the value 2 = ");
        int num2 = dc.nextInt();
        for(int i=num1;i<=num2;i++){
            for(int j=1;j<=10;j++){
                System.out.println(i+" X "+ j + " = "+(i*j));
            }
            System.out.println("----------------------------------------------");
        }
    }
}
