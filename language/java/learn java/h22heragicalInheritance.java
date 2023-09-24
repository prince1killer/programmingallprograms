class myclass1{
    public void name1(){
        System.out.println("this is first class");
    }
}
class myclass2 extends myclass1{
    public void name2(){
        System.out.println("this is second class");
    }
}
class myclass3 extends myclass1{
    public void name3(){
        System.out.println("This is my class third");
    }
}
public class h22heragicalInheritance {
    public static void main(String []afers){
        myclass3 my = new myclass3();
        my.name1();
        my.name3();
        // my.name2();
    }
    
}
