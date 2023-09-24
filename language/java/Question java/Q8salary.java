import java.util.*;
public class Q8salary{
    public static void main(String []agers){
        Scanner sc = new Scanner(System.in);
        System.out.println("How many employ are there = ");
        int number = sc.nextInt();
        System.out.println("Number of salary you will give = ");
        int salary = sc.nextInt();
        int har = (salary/100)*10;
        int da = (salary/100)*5;
        int totalsalary = salary +har+da;
        int pf = (salary/100)*7;
        int netsalary = totalsalary - pf;
        System.out.println("Salary = "+salary);
        System.out.println("HAR = "+har);
        System.out.println("DA = "+da);
        System.out.println("Total Salary = "+totalsalary);
        System.out.println("pf = "+pf);
        System.out.println("Net Salary = "+netsalary);
    }
}