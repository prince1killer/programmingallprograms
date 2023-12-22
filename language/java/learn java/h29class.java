class Pen{
    String name,type;
    public void writenType(){
        System.out.println("we are writing with pen which name is "+name+" and type is "+type);
    }


    
}

public class h29class {
    public static void main(String []args){
        Pen p1 = new Pen();
        p1.name = "Apsara";        
        p1.type = "Boll pen";

        p1.writenType();
        Pen p2 = new Pen();
        p2.name = "Trimax";
        p2.type = "Boll pen";
        p2.writenType();


    }
}
