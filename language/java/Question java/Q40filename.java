import java.io.*;
import java.util.*;

// import javax.sound.sampled.SourceDataLine;
public class Q40filename {
    public static void main(String []afrd){
        try{
            Scanner sc = new Scanner(System.in);

            String nam,email,addre,fileName;
            int number;

            System.out.print("Enter the number of person = ");
            int num = sc.nextInt();

            String data = "";
            // int numb[] ={number}; 
            for(int i=0;i<num;i++){}
            
            System.out.print("Enter the name = ");
            nam= sc.next();
            System.out.print("Enter the Email = ");
            email = sc.next();
            System.out.print("Enter the phone = ");
            number= sc.nextInt();
            System.out.print("Enter the Address = ");
            addre= sc.next();
            System.out.print("Enter the Filename = ");
            fileName = sc.next();
            
            FileOutputStream out = new FileOutputStream("D:\\learn programming\\language\\java\\alltxtfile\\"+fileName+".txt");
            data = "Name="+nam+"\nEmail="+email+"\nPhone="+number+"\nAddress="+addre;
            byte b[] = data.getBytes();
            out.write(b);
            out.close();
            System.out.println("Success...");
        }
        catch(Exception e){
            System.out.println(e);
        }
    }    
}
