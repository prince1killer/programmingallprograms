public class h18multipalcatch {
   public static void main(String []agrs){
        try{
            int a[] = new int[5];
            System.out.println("Your value is = "+a[7]);
        }
        catch(ArithmeticException e){
            System.out.println("Arthmatic Exception occures");
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("ArrayIndexOutOfBound Expections");
        }     
   } 
}
