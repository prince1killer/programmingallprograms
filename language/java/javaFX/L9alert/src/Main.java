import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

public class Main extends Application{
	@Override
	public void start(Stage stage)throws Exception {
		Parent root = FXMLLoader.load(getClass().getResource("alert.fxml"));
		Scene scene = new Scene(root);
		stage.setScene(scene);
		Image icon = new Image("././images/alert.png");
		stage.getIcons().add(icon);
		stage.setTitle("Make close app from alert");
		stage.show();
		
		stage.setOnCloseRequest(e -> {
			e.consume();
			
		});
		
	}
	
	public static void main(String []args){
		launch(args);
	}
}
