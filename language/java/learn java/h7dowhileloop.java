import java.util.Scanner;
public class h7dowhileloop {
    public static void main(String []agrs){
        int n,i=0;
        try(Scanner sc = new Scanner(System.in) ){
            System.out.print("Enter the value = ");
             n = sc.nextInt();
             do{
                i++;
                System.out.print(i);
            }while(i<=n);
        }
    }    
}