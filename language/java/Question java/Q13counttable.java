import java.util.*;
public class Q13counttable{
    public static void main(String []agrs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value = ");
        int number = sc.nextInt();
        for(int i=0;i<=number;i++){
            if(i%3 == 0 && i%7==0){
                System.out.println(i);
            }
        }
    }
}