class Mobile{
    String name,company;
    public void mobileInfo(){
        System.out.println("Here i am using "+name+" mobile and this is of"+ company +" company mobile");
    }
    Mobile(String name, String company){
        this.name = name;
        this.company = company;
    }
}
public class h31copyConstructor {
    public static void main(){
        Mobile mo = new Mobile();
        mo.mobileInfo("A22","sumsung");
    }
}