import javafx.event.ActionEvent;
import javafx.scene.shape.Circle;

@FXML


public class contrillers{
    
    public void up(ActionEvent e){
        // System.out.println("Up");
        myCircle.setCenter(y -= 1);
    }
    public void down(ActionEvent e){
        // System.out.println("Down");
        myCircle.setCenter(y += 1);
    }
    public void right(ActionEvent e){
        // System.out.println("Right");
        myCircle.setCenter(x -= 1);
    }
    public void left(ActionEvent e){
        // System.out.println("Left");
        myCircle.setCenter(x += 1);
    }
    @Override
    public String toString() {
        return "contrillers []";
    }
}