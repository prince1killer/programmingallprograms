class myclass1{
    public void name1(){
        System.out.println("My name pranav");
    }
}
class myclass2 extends myclass1{
    public  void name2(){
        System.out.println("my friend name Rahul");
    }
}
class myclass3 extends myclass2{
    public void name3(){
        System.out.println("my friend name jp");
    }
}
class h21multiclass{
    public static void main(String []agrs){
        myclass3 mc = new myclass3();
        mc.name1();
        mc.name2();
        mc.name3();
    }
}