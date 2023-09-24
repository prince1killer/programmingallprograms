import java.util.Scanner;
public class h6whileloop {
    public static void main(String []agrs){
        try(Scanner sc = new Scanner(System.in)){
            System.out.print("Enter the value = ");
            int n = sc.nextInt();
            int i=0;
            while(i <= n){
                System.out.print(i);
                i++;
            }
        }
    }
}
