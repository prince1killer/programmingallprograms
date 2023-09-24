import java.util.*;
 
class A
{
String name;
String contant,email;
String cn;

Scanner sc=new Scanner(System.in);

void funA()
{
 System.out.println("Enter the customer name :");
 cn=sc.next();
 System.out.println("Enter contant number :");
 contant=sc.next();
 System.out.println("Enter email address :");
 email=sc.next();
}

}
class B extends A
{
 String pn;
 int i;

void funB()
{
 
 System.out.println("Enter product name :");
 pn=sc.next();
}
}
class C extends B
{
 int pr,qty,dis,total,net;

void funC()
{
 System.out.println("Enter product price :");
 pr=sc.nextInt();
 System.out.println("Enter product Quentily:");
 qty=sc.nextInt();

 total=total+pr*qty;
 System.out.println("total"+(total));
 
 if(total<=1500)
{
 dis=total*10/100;
 System.out.println("dis"+(dis));
}

 else if(total<=1000)
{
 dis=total*5/100;
 System.out.println("dis"+(dis));

 net=total-dis;
 System.out.println("net"+(dis));
}
}
}

class cust2
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);

C obj3=new C();


obj3.funA();
obj3.funB();
obj3.funC();


}
}



