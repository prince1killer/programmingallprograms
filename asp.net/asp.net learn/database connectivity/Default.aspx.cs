using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class _Default : System.Web.UI.Page
{

    SqlConnection con;
    SqlCommand cmd;

    void mycon()
    {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|shopping.mdf;Integrated Security=True");
        con.Open();
    }
    
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {

        mycon();
        cmd = new SqlCommand("insert into registration values (@nm,@em,@ps,@ph,@rdt)",con);

        cmd.Parameters.AddWithValue("@nm", txtname.Text);
        cmd.Parameters.AddWithValue("@em", txtemail.Value);
        cmd.Parameters.AddWithValue("@ps", txtpassword.Value);
        cmd.Parameters.AddWithValue("@ph", txtphone.Value);
        cmd.Parameters.AddWithValue("@rdt", System.DateTime.Now.ToString());
        cmd.ExecuteNonQuery();

        con.Close();

        Response.Write("successfully");






    }
}