// import java.io.*;

class myclass1{
    public void name(){
        System.out.println("pranav kumar");
    }
}
class myclass2 extends myclass1{
    public void name(){
        System.out.println("Rahul kumar");
    }
}


public class h20moreclass {
    public static void main(String []ages){
        //myclass1 m1 = new myclass1();
        myclass2 m2 = new myclass2();
        m2.name();
        m2.name();
    }
}
