import java.util.*;
public class Q19fibonacci{
    public static void main(String []agrs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value = ");
        int number = sc.nextInt();
        int a=0,b=1,c;
        for(int i=2;i<=number;i++){
            c = a+b;
            System.out.println(""+c);
            a=b;
            b=c;
        }
    }
}