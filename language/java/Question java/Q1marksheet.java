import java.util.Scanner;
public class Q1marksheet{
    public static void main(String []agfr){
        int a,b,c,d,e;
        try(Scanner sc = new Scanner(System.in)){
            System.out.println("Enter you subject number 1 = ");
            a = sc.nextInt();
            System.out.println("Enter you subject number 2 = ");
            b = sc.nextInt();
            System.out.println("Enter you subject number 3 = ");
            c = sc.nextInt();
            System.out.println("Enter you subject number 4 = ");
            d = sc.nextInt();
            System.out.println("Enter you subject number 5 = ");
            e = sc.nextInt();
        }
        float total = a+b+c+d+e;
        float per = (total/500)*100;                              
        if(a<0 || b<0 || c<0 || d<0 || e<0 || a>100 || b>100 || c>100 || d>100 || e>100 ){
            System.out.println("You can't enter the value less then 0 and more then 100");
            per = 00;
        }
        else if(a<33 ||b<33 ||c<33 ||d<33 ||e<33){
            System.out.println("You are fail");
            per =00;
        }
        else if(a>33 && b>33 && c>33 && d>33 && e>33){
            System.out.println("Congrulation you are pass");
        }
        else if(per>=90)
        {
            System.out.print("A+");
        }
        else if(per >=80 && per<=89 ){
            System.out.print("A");
        }
        else if(per >=70 && per<=79 ){
            System.out.print("B+");
        }
        else if(per >=60 && per<=69 ){
            System.out.print("B");
        }
        else if(per >=50 && per<=59 ){
            System.out.print("C+");
        }
        else if(per >=40 && per<=49 ){
            System.out.print("C");
        }
        else if(per >=33 && per<=39 ){
            System.out.print("D");
        }
        else{
            per = 00;
            System.out.println("you are fail");
        }

        
        System.out.println("Total = "+total);
        System.out.println("Persentage ="+per+"%");

        
        
        
    }
} 