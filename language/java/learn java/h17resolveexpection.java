public class h17resolveexpection {
    public static void main(String []ages){
        int i=50,j=0;
        int count;
        try{
            count=i/j;
            System.out.println(count);
        }
        catch(Exception e){
            System.out.println(i/(j+2));
        }
    }
}
