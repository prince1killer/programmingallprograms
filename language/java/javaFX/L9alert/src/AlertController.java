import java.io.IOException;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class AlertController {
	
	@FXML
	private Button logoutbtn;
	
	@FXML
	private ActionEvent scenePane;
	Stage stage;
	Scene scene;

	public void displayAlert(ActionEvent e)throws IOException {
		stage = (Stage)scenePane.getScene().getWindow();
	}
	
}
