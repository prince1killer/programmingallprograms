import java.util.*;
public class h15array2d2 {
    public static void main(String []agrs){
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter the value one = ");
            int row = sc.nextInt();
            System.out.print("Enter the value two = ");
            int coloum = sc.nextInt();
            int values[][] = new int [row][coloum];
            for(int i=0;i<row;i++){
                for(int j=0;j<coloum;j++){
                    values[i][j] = sc.nextInt();
                }
            }
            System.out.print("Enter the value which you want to find = ");
            int number = sc.nextInt();

            for(int i=0;i<row;i++){
                for(int j=0;j<coloum;j++){
                    if(values[i][j] == number){
                        System.out.print("row "+i+", coloums "+j+" ");
                    }

                }
            }
        }
    }
}