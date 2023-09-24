//this is searching array and its also called sorting of arrat;
import java.util.*;
public class h13arraysearch {
    public static void main(String []agrds){
        try (Scanner dc = new Scanner(System.in)) {
            System.out.println("Enter the value = ");
            int value = dc.nextInt();
            int input[] = new int[value];
            for(int i =0;i<value;i++){
                input[i] = dc.nextInt();
            }
            System.out.println("Enter the finding number = ");
            int number = dc.nextInt();
            for(int i=0;i<=value;i++){
                if(input[i] == number){
                    System.out.println("Its is your place to where you get your number = "+i);
                }
            }
        }

    }
}
