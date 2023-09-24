interface A{
    public void printA();
}
interface B extends A{
    public void printB();
}
interface C extends A{
    public void printC();
}
class D implements B,C {
    public void printA(){
        System.out.println("A is created");
    }
    public void printB(){
        System.out.println("B is crested");
    }
    public void printC(){
        System.out.println("c is crested");
    }

}
public class h23hybridinherientence {
    public static void main(String []adfrs){
        D d = new D();
        d.printA();
        d.printB();
        d.printC();
    }
}

