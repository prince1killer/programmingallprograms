import java.util.*;
public class Q10daytoyear {
    public static void main(String []agrs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your days = ");
        int day = sc.nextInt();
        int days,a,week,month,year;
        year = day/365;
        a = day%365;
        month = a/30;
        a = a%30;
        week = a/7;
        days = a%7;
        System.out.println("year = "+year);
        System.out.println("month = "+month);
        System.out.println("week = "+week);
        System.out.println("days = "+days);
    }
}
