import java.io.*;
import java.util.*;

public class Q41fileoddeven {
    public static void main(String []agrs){
        try(Scanner sc = new Scanner(System.in)){
            String fileName;
            String data= ""; 
            FileOutputStream out1 = new FileOutputStream("D:\\learn programming\\language\\java\\alltxtfile\\even.txt");
            FileOutputStream out2 = new FileOutputStream("D:\\learn programming\\language\\java\\alltxtfile\\odd.txt");
            FileOutputStream out3 = new FileOutputStream("D:\\learn programming\\language\\java\\alltxtfile\\prime.txt");
            for(int i=0;i<=100;i++){
                if(i%2 == 0 && i!=2 ){
                    //    fileName = "even";
                    data = String.valueOf(i);
                    byte b1[] = data.getBytes();
                    out1.write(b1);
                    out1.close();
                }
                else if(i%3==0 && i!=3){
                    // fileName = "odd";
                    data = String.valueOf(i);
                    byte b2[] = data.getBytes();
                    out2.write(b2);
                    out2.close();

                }
                else{
                    // fileName = "prime";
                    data = String.valueOf(i);
                    byte b3[] = data.getBytes();
                    out3.write(b3);
                    out3.close();
                }
            }
            System.out.println("Success...");

        }catch(Exception e){
            System.out.println(e);
        }
        
    }    
}