import java.util.*;

class custdata
{
 
int total,dis,net,i;
String cn;
String pn[]=new String[9];
int pr[]=new int[9];
int qty[]=new int[9];

Scanner sc=new Scanner(System.in);

 void shop()
{

 System.out.println("Enter the customer name :");
 cn=sc.next();
}
void product()
{
 for(i=0;i<3;i++)
 { 
 System.out.println("Enter product name :");
 pn[i]=sc.next();
 System.out.println("Enter product price :");
 pr[i]=sc.nextInt();
 System.out.println("Enter product Quentily:");
 qty[i]=sc.nextInt();

 total=total+pr[i]*qty[i];
 dis=total*10/100;
 net=total-dis;
}
}

void title()
{
 System.out.println("name\tpname\tprice\tqty\ttotalpr\tdiscount\tnetprice\n");
}


void showcust()
{
 System.out.println("Customer Name"+(cn));
}


void show()
{
 for(i=0;i<3;i++)
 {
 System.out.println(pname[i]+"\t"+pr[i]+"\t"+qty[i]+"\t"+total+"\t"+dis+"\t"+net);
}



}

class cust
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);

int i,n,j;

System.out.println("How many customer you want a insert ?");
n=sc.nextInt();
custdata c[]=new custdata[n];


for(j=0;j<n;j++)
{
c[j]=new custdata();
c[j].shop();
c[j].product();
}

c[0].title();

for(j=0;j<n;j++)
{
 c[j].showcust();
 c[j].show();
}


}
}


