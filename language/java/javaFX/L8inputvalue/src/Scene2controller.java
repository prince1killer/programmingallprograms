import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class Scene2Controller {
	@FXML
	Label nameLabel;
	public void displayItem(String userName) {
		nameLabel.setText("Hello "+userName);
	}

}
