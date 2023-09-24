// See https://aka.ms/new-console-template for more information

//Two value sum

/*Console.WriteLine("Enter your value = ");
int a = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Enter your value = ");
int b = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Your age is ="+(a+b));*/


// shoping system
Console.WriteLine("Enter your name=");
string nameYour= Console.ReadLine();
Console.WriteLine("Enter your product name=");
string productName = Console.ReadLine();
Console.WriteLine("Enter the product price");
int pr = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Enter the product quantity");
int qut = Convert.ToInt32(Console.ReadLine());
int t = pr * qut;
Console.WriteLine("Totle = "+t);
double di;
if (t >= 1500)
{
    di = Convert.ToDouble(t * 0.15);
    Console.WriteLine(di);
}
else if (t >= 1000)
{
    di = Convert.ToDouble(t * 0.10);
    Console.WriteLine(di);
}
else if (t >= 500) {
    di = Convert.ToDouble(t * 0.05);
    Console.WriteLine(di);
}
else{
    di = Convert.ToDouble(t * 0);
    Console.WriteLine(di);
}

int net = Convert.ToInt32(t - di);

Console.WriteLine("net price ="+net);
Console.WriteLine("product name "+productName);
Console.WriteLine("Thnak you for shoping "+nameYour);
