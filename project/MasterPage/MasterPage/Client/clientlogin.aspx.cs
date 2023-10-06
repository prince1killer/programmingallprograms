using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class Client_clientlogin : System.Web.UI.Page
{

    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=C:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void signupbtn_Click(object sender, EventArgs e)
    {
        mycon();

        cmd = new SqlCommand("select * from regclient where username=@user or email=@email", cn);
        cmd.Parameters.AddWithValue("@user", user.Text);
        cmd.Parameters.AddWithValue("@email", email.Text);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count > 0)
        {
            Response.Write("<script>alert('Username and Email is already Exits')</script>");
        }
        else
        {

            cmd = new SqlCommand("insert into regclient values (@user,@pass,@email)", cn);
            cmd.Parameters.AddWithValue("@user",user.Text);
            cmd.Parameters.AddWithValue("@pass", password.Text);
            cmd.Parameters.AddWithValue("@email", email.Text);

        }


        cmd.ExecuteNonQuery();
    }
    protected void loginbtn_Click(object sender, EventArgs e)
    {
        mycon();

        cmd = new SqlCommand("select * from regclient where username=@user and password=@pass", cn);
        cmd.Parameters.AddWithValue("@user", admineuser.Text);
        cmd.Parameters.AddWithValue("@pass", adminepass.Text);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count > 0)
        {
            Session["clientlogin"] = ds.Tables[0].Rows[0]["id"];
            Response.Redirect("clienthomepage.aspx");
        }
        else
        {

            Response.Write("<script>alert('Account Not Found')</script>");

        }


        cmd.ExecuteNonQuery();

    }
}