import java.io.FileOutputStream;

public class h24fileoutprint{
    public static void main(String []ages){
        try{
            FileOutputStream fout = new FileOutputStream("testout.txt");
            String s = "Welcone to javatpoint";
            byte b[]=s.getBytes();
            fout.write(b);
            fout.close();
            System.out.println("Success");
        }catch(Exception e){System.out.println(e);}       
    }
}