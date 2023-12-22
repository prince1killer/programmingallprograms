import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

public class Main extends Application{
	@Override
	public void start(Stage stage){
		try {
			Parent root = FXMLLoader.load(getClass().getResource("scene1.fxml"));
//			Group root = new Group();
			Scene scene = new Scene(root);
			Image icon = new Image("././images/monitor.png");
			stage.getIcons().add(icon);
			stage.setTitle("This is first contect text box value send to alother screne");
			stage.setScene(scene);
			stage.show();
		} catch (Exception e) {
			System.out.print(e);
		}
	}
	public static void main(String []args) {
		launch(args);
	}
}
