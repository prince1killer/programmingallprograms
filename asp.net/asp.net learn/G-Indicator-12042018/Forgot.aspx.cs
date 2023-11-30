using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using gIndicator.DAL;
using gIndicator.BAL;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
public partial class Forgot : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;
    

    void mycon()
    {
        con = new SqlConnection(ConfigurationManager.ConnectionStrings["connectionString"].ToString());        
        con.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        mycon();
        cmd = new SqlCommand("Select * from User_mstr where username=@un and  seq=@sq and Sea=@sa", con);
        cmd.Parameters.AddWithValue("@un", TextBox1.Text);
        cmd.Parameters.AddWithValue("@Sq", DropDownList1.SelectedValue);
        cmd.Parameters.AddWithValue("@sa", TextBox2.Text);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);
        if (ds.Tables[0].Rows.Count > 0)
        {
            Session["s1"] = TextBox1.Text;

            Response.Redirect("NewPassword.aspx");
        }
        else
        {
            Response.Write("<script>alert('invalid Securiy ans.')</script>");
        }



    }
}
