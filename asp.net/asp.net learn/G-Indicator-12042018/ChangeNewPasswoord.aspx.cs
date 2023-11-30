using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class ChangeNewPasswoord : System.Web.UI.Page
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
        if (Session["user"]==null)
        {
            Response.Redirect("Login.aspx");
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        mycon();
        cmd = new SqlCommand("Select * from User_mstr where username=@un and password=@ps", con);
        cmd.Parameters.AddWithValue("@un", Session["user"].ToString());
        cmd.Parameters.AddWithValue("@ps", TextBox1.Text);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count>0)
        {

            cmd = new SqlCommand("update User_mstr set password=@ps where username=@un",con);
            cmd.Parameters.AddWithValue("@un", Session["user"].ToString());
            cmd.Parameters.AddWithValue("@ps", TextBox3.Text);

            cmd.ExecuteNonQuery();
            Response.Write("<script>alert('your password has been successfull changed...')</script>");

        }
        else
        {
            Response.Write("<script>alert('your old password is wrong')</script>");
        }

    }
}