import java.util.Scanner;
public class h5forloop {
    public static void main(String []args){
        try(Scanner sc = new Scanner(System.in)){
            System.out.print("Enter the value = ");
            int n = sc.nextInt();
            for(int i=0;i<=n;i++){
                System.out.println(i);
            }
        }
    }
}
