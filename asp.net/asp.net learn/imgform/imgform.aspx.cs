using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class imgform : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;

    void myInfo() {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|Database.mdf;Integrated Security=True");
        con.Open();
    }

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        myInfo();
        cmd = new SqlCommand("insert into info values(@na,@us,@em,@pa,@ge,@bi)",con);
        cmd.Parameters.AddWithValue("@na",TextBox1.Text);
        cmd.Parameters.AddWithValue("@us",TextBox2.Text);
        cmd.Parameters.AddWithValue("@em",TextBox3.Text);
        cmd.Parameters.AddWithValue("@pa",TextBox4.Text);
        if (RadioButton1.Checked == true) {
            cmd.Parameters.AddWithValue("@ge", RadioButton1.Text);
        }
        else if (RadioButton2.Checked == true) {
            cmd.Parameters.AddWithValue("@ge", RadioButton2.Text);
        }
        else {
            Label2.Text = "Please select your gender";        
        }


        if (DropDownList1.SelectedValue == "Day" || DropDownList2.SelectedValue == "Month" || DropDownList3.SelectedValue == "Year") {
            Label1.Text = "Please select your gender";
        }
        else {
            cmd.Parameters.AddWithValue("@bi", DropDownList1.SelectedValue + "/" + DropDownList2.SelectedValue + "/" + DropDownList3.SelectedValue);
        }
        
        cmd.ExecuteNonQuery();
        con.Close();


    }
}