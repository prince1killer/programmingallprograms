import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

public class Main extends Application{
	
	public void start(Stage stage) throws Exception{
		Parent root = FXMLLoader.load(getClass().getResource("scene1.fxml"));
		Scene scene = new Scene(root);
		Image icon = new Image("././image/input.png");
		stage.getIcons().add(icon);
		stage.setScene(scene);
		stage.show();
	}
	
	public static void main(String []args) {
		launch(args);
	}
}
