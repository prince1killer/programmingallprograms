import java.util.Scanner;
class h2input{

    public static void main(String []args){
        
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter your full name=");
            String name = sc.next();
            System.out.println(name);
        }
            
    }
}