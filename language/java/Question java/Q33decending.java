import java.io.*;
public class Q33decending {
    public static void main(String []agrsd){
        try{
            DataInputStream dc = new DataInputStream(System.in);
            System.out.println("Enter the value 1 = ");
            int count = Integer.parseInt(dc.readLine());
            int number[] = new int[count];
            for(int i=0;i<=count-1;i++){
                number[i] = Integer.parseInt(dc.readLine()); 
            }
            int temp =0;
            System.out.println();
            for(int i=0;i<=number.length-1;i++){
                for(int j=i+1;j<=number.length-1;j++){
                    if(number[i]<number[j]){
                        temp = number[i];
                        number[i] = number[j];
                        number[j] = temp;
                    }
                }
            }
            System.out.println();
            for(int i=0;i<=number.length-1;i++){
                System.out.println(number[i]);
            }
        }
        catch(Exception e){
            System.out.println(e);
        }
    }

}